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
                                url: '/shop',
                                links: [
                                    { title: 'Гравюралар', url: '/shop' },
                                    { title: 'Кілттер', url: '/shop' },
                                    { title: 'Қабырға аңшысы', url: '/shop' },
                                    { title: 'Пневматикалық құралдар', url: '/shop' },
                                ],
                            },
                            {
                                title: 'Станоктар',
                                url: '/shop',
                                links: [
                                    { title: 'Жіптерді кесу', url: '/shop' },
                                    { title: 'Чип үрлегіштер', url: '/shop' },
                                    { title: 'Қайрау машиналары', url: '/shop' },
                                    { title: 'Құбыр кескіштер', url: '/shop' },
                                    { title: 'Қашау машиналары', url: '/shop' },
                                    { title: 'Рейкалар', url: '/shop' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 6,
                        links: [
                            {
                                title: 'Қол құралдары',
                                url: '/shop',
                                links: [
                                    { title: 'Бұрауыштар', url: '/shop' },
                                    { title: 'Қол Аралар', url: '/shop' },
                                    { title: 'Пышақтар', url: '/shop' },
                                    { title: 'Балталар', url: '/shop' },
                                    { title: 'Мультитулдар', url: '/shop' },
                                    { title: 'Бояу құралдары', url: '/shop' },
                                ],
                            },
                            {
                                title: 'Бақша жабдықтары',
                                url: '/shop',
                                links: [
                                    { title: 'Мотопомпалар', url: '/shop' },
                                    { title: 'Шынжырлы аралар', url: '/shop' },
                                    { title: 'Электрлік аралар', url: '/shop' },
                                    { title: 'Қылқалам кескіштер', url: '/shop' },
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
