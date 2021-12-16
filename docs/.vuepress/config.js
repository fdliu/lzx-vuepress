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
  markdown: {
    lineNumbers: true
  },
  plugins: [['flexsearch'],{
    '@vuepress/back-to-top': false,
    '@vuepress/last-updated': true,
    '@vuepress/nprogress':true, //默认为true，设置为false可以关闭顶部进度条
    '@vuepress/search': {
          search: true, //默认false
          searchMaxSuggestions: 10 // 默认是5
     },
     '@vssue/vuepress-plugin-vssue': {
      // 设置平台，而不是 `api` 
      platform: 'github-v4',

      // 其他的 Vssue 配置
      owner: 'fdliu', // 仓库的拥有者的名称
      repo: 'lzx-vuepress', // 存储 Issue 和评论的仓库的名称
      clientId: 'fe2fd274555c456b2c81', // 刚保存下来的  Client ID
      clientSecret: 'b736aa7c1c66d16acce5bf07070793e94641a098', //  刚才保存下来的 Client secrets
      autoCreateIssue: true,//自动创建评论
    },
  }],
  themeConfig: {
      search: true,
      nav: navConfig,
      sidebar: sidebarConfig,
      sidebarDepth: 1,
      lastUpdated: '上次更新', 
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': '/image/'
      }
    }
  }
}