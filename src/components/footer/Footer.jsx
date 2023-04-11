// react
import React from 'react';

// application
import FooterContacts from './FooterContacts';
import FooterLinks from './FooterLinks';
import FooterNewsletter from './FooterNewsletter';

// data stubs
import theme from '../../data/theme';


export default function Footer() {
    const informationLinks = [
        { title: 'Біз туралы', url: '' },
        { title: 'Жеткізу туралы ақпарат', url: '' },
        { title: 'Құпиялылық саясаты', url: '' },
        { title: 'Брендтер', url: '' },
        { title: 'Бізбен хабарласу', url: '' },
        { title: 'Оралады', url: '' },
        { title: 'Сайт картасы', url: '' },
    ];

    const accountLinks = [
        { title: 'Орналасқан жері', url: '' },
        { title: 'Тапсырыс тарихы', url: '' },
        { title: 'Тілектер тізімі', url: '' },
        { title: 'Бюллетень', url: '' },
        { title: 'Ұсыныстар', url: '' },
        { title: 'Сыйлық сертификаттары', url: '' },
        { title: 'Филиалдар', url: '' },
    ];

    return (
        <div className="site-footer">
            <div className="container">
                <div className="site-footer__widgets">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <FooterContacts />
                        </div>
                        <div className="col-6 col-md-3 col-lg-2">
                            <FooterLinks title="Information" items={informationLinks} />
                        </div>
                        <div className="col-6 col-md-3 col-lg-2">
                            <FooterLinks title="My Account" items={accountLinks} />
                        </div>
                        <div className="col-12 col-md-12 col-lg-4">
                            <FooterNewsletter />
                        </div>
                    </div>
                </div>

                <div className="site-footer__bottom">
                    <div className="site-footer__copyright">
                        React арқылы жұмыс істейді
                        {' '}
                        <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">React</a>
                        {' '}
                        — Design by
                        {' '}
                        <a href={theme.author.profile_url} target="_blank" rel="noopener noreferrer">
                            {theme.author.name}
                        </a>
                    </div>
                    <div className="site-footer__payments">
                        <img src="images/payments.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
