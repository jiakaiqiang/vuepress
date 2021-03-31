module.exports = {
    title: '知码学院',
    description: '君哥带你上王者',
    dest: './dist',
    port: '7777',
    head: [
        ['link', {rel: 'icon', href: '/img/iocn/favicon.ico'}]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: [{
            text: '懵逼指南', link: '/guide/'
        },
        {
            text:"测试导航一",
            items: [
                { text: 'Chinese', link: '/language/chinese/' },
                { text: 'Japanese', link: '/language/japanese/' },
                {
                    text:'扩展',
                    items:[{
                        text:"百度",
                        link:"https://www.baidu.com"
                    }]
                }
              ]
        }
    ],
            // sidebar:require("./sideber"),
        //     sidebar:{'/guide/':
        //     [
        //         {
        //           title:'新手指南',
        //           collapsable: true,
        //           children:[
        //             '/guide/notes/one',
        //           ]
        //         },
        //         {
        //           title:'知码学院',
        //           collapsable: true,
        //           children:[
        //             '/guide/notes/two',
        //           ]
        //         }
        //     ]
        
        
        // },
        sidebar:['/',['/guide/','我是链接文字'],['/guide/notes/one','我是one的链接文字']],
        search:true,
        searchMaxSuggestoins:10,

            
            
       
        sidebarDepth: 2,
        lastUpdated: '更新时间',
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
