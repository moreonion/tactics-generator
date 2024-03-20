import {Client} from '@notionhq/client';

// These are the ones we'll get from the database:
const TACTIC_TYPE = 'Objective'
const HOOK_TYPE = 'Engagement action'

// Initialize notion client.
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

async function fetchData() {
  const pages = await notion.databases.query({
    database_id: process.env.NOTION_DB_ID,
    filter: {
      and: [
        {
          property: "Status",
          status: {
            equals: "Live"
          }
        },
        {
          or: [
            {
              property: "Type",
              select: {
                equals: TACTIC_TYPE,
              }
            }, {
              property: "Type",
              select: {
                equals: HOOK_TYPE,
              }
            }
          ]
        }
      ]
    },
  });
  const tactics = [];
  const hooks = [];

  // Gather the slugs of tactics and hooks in separate arrays.
  pages.results.forEach((page) => {
    if (page.properties.Slug && page.properties.Slug.rich_text && page.properties.Slug.rich_text[0] && page.properties.Slug.rich_text[0].plain_text) {
      if (page.properties.Type && page.properties.Type.select.name === TACTIC_TYPE) {
        tactics.push(page.properties.Slug.rich_text[0].plain_text);
      } else if (page.properties.Type && page.properties.Type.select.name === HOOK_TYPE) {
        hooks.push(page.properties.Slug.rich_text[0].plain_text);
      }
    }
  });

  return {
    tactics,
    hooks
  };
}

export default defineEventHandler(async function(event) {
  try {
    const data = await fetchData();
    return data;
  } catch (e) {
    console.log('Error while trying to fetch data from notion API.\n', e);
    throw createError({
      statusCode: 404,
      statusMessage: 'Page Not Found'
    });
  }
})
