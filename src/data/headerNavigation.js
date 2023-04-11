export default [
    {
        title: 'Басты бет',
        url: '',
        submenu: {
            type: 'menu',
            menu: [
                { title: 'Басты бет 1', url: '/' },
                { title: 'Басты бет 2', url: '/home-two' },
            ],
        },
    },
    {
        title: 'Мегаменю',
        url: '',
        submenu: {
            type: 'megamenu',
            menu: {
                size: 'nl',
                columns: [
                    {
                        size: 6,
                        links: [
                            {
                                title: 'Электр құралдары',
                                url: '',
                                links: [
                                    { title: 'Гравюралар', url: '' },
                                    { title: 'Кілттер', url: '' },
                                    { title: 'Қабырға аңшысы', url: '' },
                                    { title: 'Пневматикалық құралдар', url: '' },
                                ],
                            },
                            {
                                title: 'Станоктар',
                                url: '',
                                links: [
                                    { title: 'Жіптерді кесу', url: '' },
                                    { title: 'Чип үрлегіштер', url: '' },
                                    { title: 'Қайрау машиналары', url: '' },
                                    { title: 'Құбыр кескіштер', url: '' },
                                    { title: 'Қашау машиналары', url: '' },
                                    { title: 'Рейкалар', url: '' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 6,
                        links: [
                            {
                                title: 'Қол құралдары',
                                url: '',
                                links: [
                                    { title: 'Бұрауыштар', url: '' },
                                    { title: 'Қол Аралар', url: '' },
                                    { title: 'Пышақтар', url: '' },
                                    { title: 'Балталар', url: '' },
                                    { title: 'Мультитулдар', url: '' },
                                    { title: 'Бояу құралдары', url: '' },
                                ],
                            },
                            {
                                title: 'Бақша жабдықтары',
                                url: '',
                                links: [
                                    { title: 'Мотопомпалар', url: '' },
                                    { title: 'Шынжырлы аралар', url: '' },
                                    { title: 'Электрлік аралар', url: '' },
                                    { title: 'Қылқалам кескіштер', url: '' },
                                ],
                            },
                        ],
                    },
                ],
            },
        },
    },
    {
        title: 'Дүкен',
        url: '/shop/category-grid-3-columns-sidebar',
        submenu: {
            type: 'menu',
            menu: [
                {
                    title: 'Дүкен торы',
                    url: '/shop/category-grid-3-columns-sidebar',
                    submenu: [
                        { title: '3 Баған Тақта', url: '/shop/category-grid-3-columns-sidebar' },
                        { title: '4 Баған Толтырылған', url: '/shop/category-grid-4-columns-full' },
                        { title: '5 Баған Толтырылған', url: '/shop/category-grid-5-columns-full' },
                    ],
                },
                { title: 'Дүкендер Тізімі', url: '/shop/category-list' },
                { title: 'Оңжақ Панельдегі Дүкен', url: '/shop/category-right-sidebar' },
                {
                    title: 'Өнім',
                    url: '/shop/product-standard',
                    submenu: [
                        { title: 'Өнім', url: '/shop/product-standard' },
                        { title: 'Өнім Alt', url: '/shop/product-columnar' },
                        { title: 'Өнім Тақта', url: '/shop/product-sidebar' },
                    ],
                },
                { title: 'Арба', url: '/shop/cart' },
                { title: 'Тексеру', url: '/shop/checkout' },
                { title: 'Тілектер тізімі', url: '/shop/wishlist' },
                { title: 'Салыстыру', url: '/shop/compare' },
                { title: 'Тапсырысты бақылау', url: '/shop/track-order' },
            ],
        },
    },
    {
        title: 'Аккаунт',
        url: '/account',
        submenu: {
            type: 'menu',
            menu: [
                { title: 'Логин', url: '/account/login' },
                { title: 'Тақта', url: '/account/dashboard' },
                { title: 'Профильді өзгерту', url: '/account/profile' },
                { title: 'Тапсырыс тарихы', url: '/account/orders' },
                { title: 'Адрес кітабі', url: '/account/addresses' },
                { title: 'Құпия сөзді өзгерті', url: '/account/password' },
            ],
        },
    },
    {
        title: 'Блог',
        url: '/blog/category-classic',
        submenu: {
            type: 'menu',
            menu: [
                { title: 'Блог Калссикалық ', url: '/blog/category-classic' },
                { title: 'Блог Тор', url: '/blog/category-grid' },
                { title: 'Блог Тізім', url: '/blog/category-list' },
                { title: 'Блог Солжақ Тақта', url: '/blog/category-left-sidebar' },
                { title: 'Пікікр Беті', url: '/blog/post-classic' },
                { title: 'Пікікр Тақтасіз', url: '/blog/post-full' },
            ],
        },
    },
    {
        title: 'Беттер',
        url: '/site/about-us',
        submenu: {
            type: 'menu',
            menu: [
                { title: 'Біз туралы', url: '/site/about-us' },
                { title: 'Бізбен хабарласу', url: '/site/contact-us' },
                { title: 'Бізбен хабарласу Alt', url: '/site/contact-us-alt' },
                { title: '404', url: '/site/not-found' },
                { title: 'Шарттар мен Ережелер', url: '/site/terms' },
                { title: 'FAQ', url: '/site/faq' },
                // { title: 'Компоненттер', url: '/site/components' },
                { title: 'Баспахана', url: '/site/typography' },
            ],
        },
    },
   
];
