import {Client} from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

async function fetchData() {
  const pages = await notion.databases.query({
    database_id: process.env.NOTION_DB_ID,
    filter: {
      or: [
        {
          property: "Type",
          select: {
            equals: "Tactic",
          }
        }, {
          property: "Type",
          select: {
            equals: "Hook",
          }
        }
      ]
    },
  });
  const tactics = [];
  const hooks = [];

  pages.results.forEach((page) => {
    if (page.properties.Slug && page.properties.Slug.rich_text && page.properties.Slug.rich_text[0] && page.properties.Slug.rich_text[0].plain_text) {
      if (page.properties.Type && page.properties.Type.select.name === 'Tactic') {
        tactics.push(page.properties.Slug.rich_text[0].plain_text);
      } else if (page.properties.Type && page.properties.Type.select.name === 'Hook') {
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
