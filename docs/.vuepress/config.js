const navConfig = require("../../navConfig/nav")
const sidebarConfig = require("../../sidebarConfig/sidebar")
module.exports = {
  title: 'LZX\'s Blog by VuePress',
  description: 'lzx a project,每天进步一点点。',
  serviceWorker: true,
  base: '/lzx-vuepress/',
	head: [
        ['link', { rel: 'icon', href: '/logo.jpg' }],
  ],
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@alias': 'path/to/some/dir'
  //     }
  //   }
  // },
  themeConfig: {
    search: true,
      nav: navConfig,
      sidebar: sidebarConfig,
      sidebarDepth: 1,
      lastUpdated: 'Last Updated', 
  },
}