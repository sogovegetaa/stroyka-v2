// react
import React from 'react';

// data stubs
import theme from '../../data/theme';


export default function FooterContacts() {
    return (
        <div className="site-footer__widget footer-contacts">
            <h5 className="footer-contacts__title">Хабарласу</h5>

            <div className="footer-contacts__text">
            Сізбен байланысу үшін бізге хабарласу үшін астыдағы контакттарға хабарласыңыз:
            </div>

            <ul className="footer-contacts__contacts">
                <li>
                    <i className="footer-contacts__icon fas fa-globe-americas" />
                    {theme.contacts.address}
                </li>
                <li>
                    <i className="footer-contacts__icon far fa-envelope" />
                    {theme.contacts.email}
                </li>
                <li>
                    <i className="footer-contacts__icon fas fa-mobile-alt" />
                    {`${theme.contacts.phone}, ${theme.contacts.phone}`}
                </li>
                <li>
                    <i className="footer-contacts__icon far fa-clock" />
                    Дүйсенбі-сенбі 10:00-ден 19:00-ге дейін
                </li>
            </ul>
        </div>
    );
}
