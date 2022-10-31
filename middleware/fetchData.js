export default async function (context) {
  try {
    context.meta.content = await $fetch(`/api/content?tactic=${context.params.slug[0]}&hook=${context.params.slug[1]}`);
  } catch (e) {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
  }
}
