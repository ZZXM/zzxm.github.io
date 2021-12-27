const navList = require('./nav.js')
const sidebar = require('./sidebar.js')

console.log(sidebar, 'sidebar')

module.exports = {
  title: '庄生晓梦',
  description: '庄生晓梦',
  dest: './dist',
  port: '7777',
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg' }]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: navList,
    sidebar: sidebar,
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    searchMaxSuggestoins: 10,
    serviceWorker: {
      updatePopup: {
        message: "有新的内容.",
        buttonText: '更新'
      }
    },
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页 ！'
  }
}
