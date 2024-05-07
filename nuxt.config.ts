// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Campaign tactics generator',
      meta: [
        { name: 'description', content: 'Generate ideas for creative advocacy campaign tactics for progressive change' },
        { name: 'keywords', content: 'Campaign tactic, tactics generator, tactic, advocacy tactic, activist tactic, non-profit idea generator, impact ideas' },
        { name: 'robots', content: 'index, follow' },

        { name: 'msapplication-TileColor', content: '#ffffff'},
        { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png'},
        { name: 'theme-color', content: '#ffffff'},

        { property: 'og:title', content: 'Campaign tactics idea generator'},
        { property: 'og:image', content: 'https://ucarecdn.com/869750b6-f90b-4303-9da2-b1352d80fda6/'},
        { property: 'og:type', content: 'website'},
        { property: 'og:url', content: 'https://tactics.impact-stack.org/'},
        { property: 'og:site_name', content: 'Advocacy: tactics idea generator'},
        { property: 'og:description', content: 'Generate ideas for digital tactics you can use in your advocacy campaigns'},

        { name: 'twitter:card', content: 'summary_large_image'},
        { name: 'twitter:title', content: 'Generate ideas for creative advocacy campaign tactics for progressive change'},
        { name: 'twitter:description', content: 'Generate ideas for creative advocacy campaign tactics for progressive change ➨ HERE'},
        { name: 'twitter:image', content: 'https://ucarecdn.com/869750b6-f90b-4303-9da2-b1352d80fda6/'},
        { name: 'twitter:site', content: '@impact_stack'},
        { name: 'twitter:creator', content: '@moreonion'},
      ],
      link: [
        { rel: 'preconnect', href: 'https://assets.more-onion.com' },
        { rel: 'stylesheet', href: 'https://assets.more-onion.com/ist/v1/impact-stack.css?rjzina', crossorigin: '' },

        { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' },
        { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' },
        { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' },
        { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' },
        { rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png' },
        { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png' },
        { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png' },
        { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png' },

        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },

        { rel: 'manifest', href: '/manifest.json' },
      ]
    }
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL
    }
  }
})
