module.exports = {
  title: 'LZX\'s Blog by VuePress',
  description: 'lzx a project',
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
      nav: [
          { text: '主页', link: '/' },
          { text: '博文',
            items: [
              { text: 'bar', link: '/bar/' },
              { text: 'foo', link: '/foo/' },
            ] 
          },
          { text: '关于', link: '/about/' },
          { text: 'Github', link: 'https://www.github.com/codeteenager' },
      ],
      sidebar: [{
          title: 'bar',
          collapsable: true,
          children: [
              ['/bar/three', 'three'],
              ['/bar/four', 'four'],
          ]
      },
      {
          title: 'foo',
          collapsable: true,
          children: [
              ['/foo/one', 'one'],
              ['/foo/two', 'two'],
          ]
      }],
      sidebarDepth: 1,
      lastUpdated: 'Last Updated', 
  },
}