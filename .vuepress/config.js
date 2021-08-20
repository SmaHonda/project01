module.exports = {
  title: "Let's Write VuePress 範例",
  description: "由 Let's Write 製作的 VuePress Demo 頁面，歡迎多多分享~",
  head: [
    ['link', { rel: 'icon', href: 'https://letswritetw.github.io/letswritetw/dist/img/logo_512.png' }]
  ],
  base: './project01/',
  dest: 'docs',

  theme: 'default-prefers-color-scheme',

  themeConfig: {

    // Logo
    logo: './logo.svg',

    // Repository 連結
    repo: 'SmaHonda/project01',
    repoLabel: '本頁原始碼',
    docsRepo: 'https://github.com/SmaHonda/project01',
    docsDir: '',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '修改此頁面',

    // 頂部導覽列
    nav: [
      { text: '首頁', link: '/' },
      { text: "Let's Write 官網", link: 'https://www.letswrite.tw', target: '_self' },
    ],

    // 側邊導覽列
    sidebar: [
      // '/',
      // ['/tools/', '小工具'],
      // ['/social/', '社群']
      {
        title: '小工具',       // 必填
        path: './tools/',     // 選填，一定要有這個資料夾及檔案
        collapsable: false, // 分組項目是否關上，true 關上、false 打開
        // 這個分組底下有哪些連結
        children: [
          './tools/'
        ]
      },
      {
        title: '社群',
        collapsable: false,
        children: [
          ['./social/', '經營社群']
        ],
        initialOpenGroupIndex: -1 // 選填，預設值是 0
      }
    ]
  },


}