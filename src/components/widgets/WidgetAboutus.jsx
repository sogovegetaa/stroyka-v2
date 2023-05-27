// react
import React from 'react';

// data stubs
import theme from '../../data/theme';


function WidgetAboutus() {
    const links = [
        {
            key: 'rss',
            url: theme.author.profile_url,
            iconClass: 'fas fa-rss',
        },
        {
            key: 'youtube',
            url: theme.author.profile_url,
            iconClass: 'fab fa-youtube',
        },
        {
            key: 'facebook',
            url: theme.author.profile_url,
            iconClass: 'fab fa-facebook-f',
        },
        {
            key: 'twitter',
            url: theme.author.profile_url,
            iconClass: 'fab fa-twitter',
        },
        {
            key: 'instagram',
            url: theme.author.profile_url,
            iconClass: 'fab fa-instagram',
        },
    ].map((item) => {
        const itemClasses = `widget-aboutus__link widget-aboutus__link--${item.key}`;
        const iconClasses = `widget-social__icon ${item.iconClass}`;

        return (
            <li key={item.key}>
                <a className={itemClasses} href={theme.author.profile_url} target=" _blank">
                    <i className={iconClasses} />
                </a>
            </li>
        );
    });

    return (
        <div className="widget-aboutus widget">
            <h4 className="widget__title">Блог туралы</h4>
            <div className="widget-aboutus__text">
            Біздің блог арқылы Сіз бизнес, технологиялар, кәсіпкерлік, инновациялар мен басқа қызықты аймақтар туралы ақпарат аласыз. Біздің блог платформасы арқылы Сіз даму тенденцияларын, бизнес-тәжірибелерін, технологиялық жетістіктерді, идеяларды және жаңа бағдарламалардың мәліметтерін білім аласыз.
            </div>
            <div className="widget-aboutus__socials">
                <ul>
                    {links}
                </ul>
            </div>
        </div>
    );
}

export default WidgetAboutus;
