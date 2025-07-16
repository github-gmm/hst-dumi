import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  base: '/hst-dumi/',
  publicPath: '/hst-dumi/',
  themeConfig: {
    name: 'hst-dumi',
    footer: false,
    nav: [
      // { title: '指南', link: '/guide' },
      // { title: '工具', link: '/utils' },
      { title: '组件', link: '/components' },
    ],
  },
});
