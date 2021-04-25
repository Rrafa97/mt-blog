module.exports = {
  title: 'Rrafa',
  description: '霍格沃兹，qq：1162965298',
  base: '/mt-blog/',
  theme: 'vuepress-theme-reco',
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }]
  ],
  themeConfig: {
    logo: '/favicon.ico',
    type: 'blog',
    nav: [
      { text: '首页', link: '/' },
      { text: '一个颜色选取工具', link: 'http://rrafa.icu/', icon: 'reco-color' },
      { text: '读书笔记(Clean Code)', link: './ReadingNotes/ClearCode/' }
    ],
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: 'Tag'      // 默认文案 “标签”
      },
      // socialLinks: [     // 信息栏展示社交信息
      //   { icon: 'reco-github', link: 'https://github.com/recoluan' },
      //   { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
      // ]
    },
    sidebar: 'auto',
    sidebarDepth: 3,
    friendLink: [
      {
        title: '一个国风色彩网站',
        desc: '一个简单的色彩选择网站',
        logo: "/favicon.ico",
        link: 'http://rrafa.icu/'
      }
    ]
  }
}