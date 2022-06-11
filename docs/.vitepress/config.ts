// https://vitepress.vuejs.org/config/introduction.html
import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'ClassLate',
  titleTemplate: 'ClassLate',
  description: 'Essays',
  appearance: true,
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
    anchor: { permalink: true },
    // toc: { level: [1, 2, 3, 4, 5, 6], },
    // config: (md) => {},
  },
  themeConfig: {
    siteTitle: '着香槟的猫头鹰',
    // logo: '',
    nav: [
      { text: '首页', link: '/' },
      { text: '随笔', link: '/essays', activeMatch: '/tags|essays/' },
      { text: '关于', link: '/about' },
    ],
    sidebar: {
      '/essays': sidebarTags(),
      '/tags/': sidebarTags(),
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/classlate' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present ClassLate',
    },
    editLink: {
      repo: 'classlate/classlate.github.io',
      branch: 'main',
      dir: 'docs',
      text: 'Edit this page',
    },
    lastUpdatedText: 'Updated Date',
  },
})

function sidebarTags() {
  return [
    {
      text: '标签',
      items: [
        { text: '算法', link: '/tags/algorithm' },
        { text: '软件记录', link: '/tags/application' },
        { text: '计算机', link: '/tags/computer' },
        { text: 'linux', link: '/tags/linux' },
        { text: 'arch', link: '/tags/arch' },
        { text: 'wsl', link: '/tags/wsl' },
        { text: 'js', link: '/tags/js' },
        { text: 'css', link: '/tags/css' },
        { text: 'vue', link: '/tags/vue' },
        { text: 'typescript', link: '/tags/typescript' },
        { text: '源码', link: '/tags/source-code' },
        { text: 'demo', link: '/tags/demo' },
      ],
      collapsible: true,
      collapsed: false,
    },
  ]
}
