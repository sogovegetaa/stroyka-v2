export default [
    {
        type: 'link',
        label: 'Home',
        url: '/',
        children: [
            { type: 'link', label: 'Home 1', url: '/' },
            { type: 'link', label: 'Home 2', url: '/home-two' },
        ],
    },

    {
        type: 'link',
        label: 'Categories',
        url: '',
        children: [
            {
                type: 'link',
                label: 'Электр құралдары',
                url: '',
                children: [
                    { type: 'link', label: "Гравюралар", url: '' },
                    { type: 'link', label: 'Кілттер', url: '' },
                    { type: 'link', label: "Қабырға Аңшысы", url: '' },
                    { type: 'link', label: "Пневматикалық Құралдар", url: '' },
                ],
            },
            {
                type: 'link',
                label: 'Станоктар',
                url: '',
                children: [
                    { type: 'link', label: 'Жіп', url: '' },
                    { type: 'link', label: 'Чип Үрлегіштер', url: '' },
                    { type: 'link', label: 'Қайрау Машиналары', url: '' },
                    { type: 'link', label: 'Құбыр Кескіштер', url: '' },
                    { type: 'link', label: 'Қашау Машиналары', url: '' },
                    { type: 'link', label: 'Рейки', url: '' },
                ],
            },
        ],
    },

    {
        type: 'link',
        label: 'Shop',
        url: '/shop/category-grid-3-columns-sidebar',
        children: [
            {
                type: 'link',
                label: 'Shop Grid',
                url: '/shop/category-grid-3-columns-sidebar',
                children: [
                    { type: 'link', label: '3 Columns Sidebar', url: '/shop/category-grid-3-columns-sidebar' },
                    { type: 'link', label: '4 Columns Full', url: '/shop/category-grid-4-columns-full' },
                    { type: 'link', label: '5 Columns Full', url: '/shop/category-grid-5-columns-full' },
                ],
            },
            { type: 'link', label: 'Shop List', url: '/shop/category-list' },
            { type: 'link', label: 'Shop Right Sidebar', url: '/shop/category-right-sidebar' },
            {
                type: 'link',
                label: 'Product',
                url: '/shop/product-standard',
                children: [
                    { type: 'link', label: 'Product', url: '/shop/product-standard' },
                    { type: 'link', label: 'Product Alt', url: '/shop/product-columnar' },
                    { type: 'link', label: 'Product Sidebar', url: '/shop/product-sidebar' },
                ],
            },
            { type: 'link', label: 'Cart', url: '/shop/cart' },
            { type: 'link', label: 'Checkout', url: '/shop/checkout' },
            { type: 'link', label: 'Wishlist', url: '/shop/wishlist' },
            { type: 'link', label: 'Compare', url: '/shop/compare' },
            { type: 'link', label: 'Track Order', url: '/shop/track-order' },
        ],
    },

    {
        type: 'link',
        label: 'Account',
        url: '/account',
        children: [
            { type: 'link', label: 'Login', url: '/account/login' },
            { type: 'link', label: 'Dashboard', url: '/account/dashboard' },
            { type: 'link', label: 'Edit Profile', url: '/account/profile' },
            { type: 'link', label: 'Тапсырыс тарихы', url: '/account/orders' },
            { type: 'link', label: 'Address Book', url: '/account/addresses' },
            { type: 'link', label: 'Change Password', url: '/account/password' },
        ],
    },

    {
        type: 'link',
        label: 'Blog',
        url: '/blog/category-classic',
        children: [
            { type: 'link', label: 'Blog Classic', url: '/blog/category-classic' },
            { type: 'link', label: 'Blog Grid', url: '/blog/category-grid' },
            { type: 'link', label: 'Blog List', url: '/blog/category-list' },
            { type: 'link', label: 'Blog Left Sidebar', url: '/blog/category-left-sidebar' },
            { type: 'link', label: 'Post Page', url: '/blog/post-classic' },
            { type: 'link', label: 'Post Without Sidebar', url: '/blog/post-full' },
        ],
    },

    {
        type: 'link',
        label: 'Pages',
        url: '/site/about-us',
        children: [
            { type: 'link', label: 'Біз туралы', url: '/site/about-us' },
            { type: 'link', label: 'Бізбен хабарласу', url: '/site/contact-us' },
            { type: 'link', label: 'Бізбен хабарласу Alt', url: '/site/contact-us-alt' },
            { type: 'link', label: '404', url: '/site/not-found' },
            { type: 'link', label: 'Terms And Conditions', url: '/site/terms' },
            { type: 'link', label: 'FAQ', url: '/site/faq' },
            { type: 'link', label: 'Components', url: '/site/components' },
            { type: 'link', label: 'Typography', url: '/site/typography' },
        ],
    },

    {
        type: 'button',
        label: 'Currency',
        children: [
            { type: 'button', label: '€ Euro', data: { type: 'currency', code: 'EUR' } },
            { type: 'button', label: '£ Pound Sterling', data: { type: 'currency', code: 'GBP' } },
            { type: 'button', label: '$ US Dollar', data: { type: 'currency', code: 'USD' } },
            { type: 'button', label: '₽ Russian Ruble', data: { type: 'currency', code: 'RUB' } },
        ],
    },

    {
        type: 'button',
        label: 'Language',
        children: [
            { type: 'button', label: 'English', data: { type: 'language', locale: 'en' } },
            { type: 'button', label: 'Russian', data: { type: 'language', locale: 'ru' } },
        ],
    },
];
