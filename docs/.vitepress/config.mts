import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Aethros',
  description: 'The Player’s Guide to Aethros',
  base: '/aethros-guide/',

  themeConfig: {
    siteTitle: 'AETHROS',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Player’s Guide', link: '/players-guide' },
      { text: 'The World', link: '/world' },
      { text: 'Expeditions', link: '/expeditions' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Welcome to Aethros', link: '/' },
          { text: 'Player’s Guide', link: '/players-guide' },
          { text: 'The West Marches', link: '/west-marches' }
        ]
      },
      {
        text: 'The World of Aethros',
        items: [
          { text: 'World Overview', link: '/world' },
          { text: 'Tarsakech', link: '/regions/tarsakech' },
          { text: 'Kazan', link: '/regions/kazan' },
          { text: 'Aetherion', link: '/regions/aetherion' },
          { text: 'Shattersea', link: '/regions/shattersea' },
          { text: 'Myr', link: '/regions/myr' }
        ]
      },
      {
        text: 'Campaign Resources',
        items: [
          { text: 'Expeditions', link: '/expeditions' },
          { text: 'Rules & Mechanics', link: '/rules' },
          { text: 'Crafting & Equipment', link: '/crafting' },
          { text: 'Guilds & Prosperity', link: '/guilds' }
        ]
      }
    ],

    search: {
      provider: 'local'
    },

    appearance: true,

    outline: {
      level: [2, 3]
    },

    footer: {
      message: 'A Pathfinder 2e West Marches Campaign',
      copyright: 'The World of Aethros'
    }
  }
})
