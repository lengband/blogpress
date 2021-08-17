const path = require('path')

module.exports = {
  title: 'Lengband Blog',
  description: '即刻记录精彩',
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    logo: '/img/hero.jpeg',
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间,
    nav: [
      { text: '前端', link: '/Fe/' },
      { text: '仓库', link: '/Store/' },
      { text: '随笔', link: '/Thought/' },
      {
        text: '联系',
        items: [
          // link：指向链接也可以是外网链接
          { text: 'github', link: 'https://github.com/lengband' },
        ],
      },
    ],
    // 侧边栏菜单( 一个模块对应一个菜单形式 )
    sidebar: {
      // 打开FAQ主页链接时生成下面这个菜单
      '/Fe/': [
        //多级菜单形式
        {
          // 菜单名
          title: '消化堆',
          // 子菜单
          children: [
            ['','前端'],
            // 或者写成 '路径',标题自动识别为该地址的文件中的h1标题
            // 不以 '/' 结尾的就是指向.md文件
            ['/Fe/use/', '食用指南'], // '/FAQ/DigestionHeap/Digested.md'文件
            ['/Fe/a', 'aaa'],
          ],
        },
      ],
      // 打开Thought主页链接时生成下面这个菜单
      '/Thought/': [
        ['/Thought/', '随笔首页'],
        {
          title: '年终回顾',
          children: [
            ['/Thought/YearReview/2021', '2021年'],
          ],
        },
      ],
    },
  },
}
