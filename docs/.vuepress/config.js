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
      { text: 'Web', link: '/Fe/' },
      { text: 'Ops', link: '/Ops/' },
      { text: 'Network', link: '/Network/' },
      { text: '随笔', link: '/Thought/' },
      {
        text: 'Contact',
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
            // 或者写成 '路径',标题自动识别为该地址的文件中的h1标题
            // 不以 '/' 结尾的就是指向.md文件
            ['','前端'],
            ['/Fe/use/', '食用指南'],
            ['/Fe/codeDesign/', 'Code Design'],
            ['/Fe/electron/', 'Electron'],
            ['/Fe/node/', 'Node'],
            ['/Fe/js/', '你不知道的JS'],
          ],
        },
        ['/Fe/Interview/', '前端面试灵魂之问'],
        ['/Fe/LeetCode/', 'LeetCode'],
      ],
      '/Ops/': [
        ['/Ops/docker/', 'Docker'],
        ['/Ops/k8s/', 'K8S'],
      ],
      '/Network/': [
        ['/Network/Http/', '透析HTTP协议'],
        ['/Network/Dns/', 'Dns'],
      ],
      // 打开Thought主页链接时生成下面这个菜单
      '/Thought/': [
        ['/Thought/Go/', 'Golang'],
        ['/Thought/mysql/', 'Mysql'],
        ['/Thought/os/', 'OS'],
      ],
    },
  },
}
