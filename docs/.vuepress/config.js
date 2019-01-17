module.exports = {
    title: 'My-ui',
    description: 'ui框架',
    themeConfig: {
        sidebar: 'auto',
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/guide/' },
            { text: '交流', link: 'https://google.com' },
        ],
        sidebar: [
            {
                title: '入门',
                children: [
                    '/install/',
                    '/get-start/',
                ]
            },
            {
                title: '组件',
                children: ['/components/button']
            }

        ]
    }
}