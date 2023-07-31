<template>
  <NuxtLayout name="two-column">

    <template #default>
      <div ref="scrollTarget"></div>
      <TacticDisplay :content="$route.meta.content.tactic" type="tactic" />
      <div class="tactic-seperator">+</div>
      <TacticDisplay :content="$route.meta.content.hook" type="hook" />
    </template>

    <template #sidebar>
      <div class="generator-button-card">
        <p>Not a good fit?</p>
        <button type="button" @click="navigateToRandomRoute" :disabled="loading" class="primary button filled"><svg class="generator-button-icon" width="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118.04 122.88"><!-- From https://uxwing.com/refresh-icon - License: All icons are free to use any personal and commercial projects without any attribution or credit. --><path fill="#fff" d="M16.08,59.26A8,8,0,0,1,0,59.26a59,59,0,0,1,97.13-45V8a8,8,0,1,1,16.08,0V33.35a8,8,0,0,1-8,8L80.82,43.62a8,8,0,1,1-1.44-15.95l8-.73A43,43,0,0,0,16.08,59.26Zm22.77,19.6a8,8,0,0,1,1.44,16l-10.08.91A42.95,42.95,0,0,0,102,63.86a8,8,0,0,1,16.08,0A59,59,0,0,1,22.3,110v4.18a8,8,0,0,1-16.08,0V89.14h0a8,8,0,0,1,7.29-8l25.31-2.3Z"/></svg>Generate new tactic</button>
      </div>
    </template>

  </NuxtLayout>
</template>

<script setup>
import { inject, ref } from 'vue'
import { getRandomSlugs } from '@/utils/utils'

const scrollTarget = ref(null)
const route = useRoute()

const loading = ref(false)
const smoothScroll = process.client ? inject('smoothScroll') : undefined;

const { data } = await useFetch('/api/slugs', {key: 'slugs'});

const navigateToRandomRoute = async function() {
  const { randomTactic, randomHook } = getRandomSlugs(data.value);

  loading.value = true;

  await navigateTo(`/${randomTactic}/${randomHook}`, {
    replace: false
  });

  loading.value = false;
  smoothScroll({
    scrollTo: scrollTarget.value,
    offset: -16,
    updateHistory: false
  })
}

definePageMeta({
  middleware: 'fetch-data',
  keepalive: true
})

useHead({
  title: `Campaign tactics generator | ${route.meta.content.tactic.Title}, ${route.meta.content.hook.Title}`
})
</script>

<style lang="scss">
.generator-button-card {
  padding: 1.5rem 1.5rem calc(1.5rem - 30px);
  font-weight: bold;
  color: #fff;
  background-color: #2f2f2f;

  .sidebar.show-for-large & {
    position: -webkit-sticky;
    position: sticky;
    top: 10vh;
  }

  #page > & {
    position: sticky;
    bottom: 0;
    width: 100%;

    @media print, screen and (min-width: 64em) {
      display: none;
    }
  }

  button.primary[disabled] {
    opacity: 1;
    color: rgba(255, 255, 255, 0.6)!important;
    cursor: pointer;
    text-shadow: none!important;

    svg path {
      fill: rgba(255, 255, 255, 0.8);
    }
  }
}

.generator-button-icon {
  display: inline-block;
  vertical-align: -0.1em;
  margin-right: 0.5em;

  button[disabled] & {
    animation: rotate 1s linear infinite;
  }
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.tactic-seperator {
  color: #8ac128;
  font-weight: bold;
  font-size: 250%;
  text-align: center;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
  line-height: 1;
}
</style>
