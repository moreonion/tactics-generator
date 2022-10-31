// Initialize state by fetching the slugs.
async function fetchSlugs() {
  console.log('fetch slugs function called');
  return await $fetch('/api/slugs');
}

// Export composable.
export default async function() {
  return await useAsyncData('availableSlugs', fetchSlugs);
}
