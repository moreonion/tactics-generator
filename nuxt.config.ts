// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Tactics generator',
      meta: [
        { name: 'description', content: '' } // TODO: fill in the blanks...
      ],
      link: [
        { 
          rel: 'preconnect',
          href: 'https://assets.more-onion.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://assets.more-onion.com/ist/v1/impact-stack.css?rjzina',
          crossorigin: ''
        }
      ]
    }
  }
})
