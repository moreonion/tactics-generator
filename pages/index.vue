<template>
  <div>
  </div>
</template>

<script setup>
import { getRandomSlugs } from '@/utils/utils'

// Get a pair of random slugs from all the available ones.
const { pending, data } = await useFetch('/api/slugs', {key: 'slugs'});
// const { data } = await useAvailableSlugs()
const { randomTactic, randomHook } = getRandomSlugs(data.value);

if (process.client) {
  await navigateTo(`/${randomTactic}/${randomHook}`, {
    replace: true
  });
}
</script>
