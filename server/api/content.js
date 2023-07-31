import {Client} from '@notionhq/client';

// Initialize notion client.
const notion = new Client({
  auth: process.env.NOTION_TOKEN
});

// Reduce the notion page object to the specified properties.
function pickNotionProperties(page) {
  const result = {};
  ['Title', 'Introduction', 'Full text', 'ID'].forEach((key) => {
    result[key] = parseNotionProperty(page.properties[key])
  });
  return result;
}

// Get the actual property value out of the different nested objects.
function parseNotionProperty(prop) {
  if (prop && prop.type === 'title') {
    return prop.title.length ? prop.title[0].plain_text : undefined;
  } else if (prop && prop.type === 'rich_text') {
    return prop.rich_text.length ? prop.rich_text[0].plain_text : undefined;
  } else if (prop && prop.type === 'formula' && prop.formula.type === 'string') {
    return prop.formula.string;
  } else {
    return prop;
  }
}

async function fetchData(tacticSlug, hookSlug) {
  const response = await notion.databases.query({
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
              property: "Slug",
              rich_text: {
                equals: tacticSlug
              }
            }, {
              property: "Slug",
              rich_text: {
                equals: hookSlug
              }
            }
          ]
        }
      ]
    }
  });
  if (response.type === 'page' && response.results.length === 2) {
    const tactic = response.results.filter((result) => result.properties.Slug.rich_text[0].plain_text === tacticSlug)[0];
    const hook = response.results.filter((result) => result.properties.Slug.rich_text[0].plain_text === hookSlug)[0];
    return {
      tactic: pickNotionProperties(tactic),
      hook: pickNotionProperties(hook)
    };
  } else {
    throw createError();
  }
}

export default defineEventHandler(async function(event) {
  const query = getQuery(event);
  try {
    const data = await fetchData(query.tactic, query.hook);
    return data;
  } catch (e) {
    console.log('Error while trying to fetch data from notion API.\n', e);
    throw createError({
      statusCode: 404,
      statusMessage: 'Page Not Found'
    });
  }
})
