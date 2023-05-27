// react
import React from 'react';

// third-party
import { Helmet } from 'react-helmet';

// application
import PageHeader from '../shared/PageHeader';

// data stubs
import theme from '../../data/theme';


function SitePageFaq() {
    const breadcrumb = [
        { title: 'Басты бет', url: '' },
        { title: 'Жиі қойылатын сұрақтар', url: '' },
    ];

    return (
        <React.Fragment>
            <Helmet>
                <title>{`FAQ — ${theme.name}`}</title>
            </Helmet>

            <PageHeader header="Жиі қойылатын сұрақтар" breadcrumb={breadcrumb} />

            <div className="block faq">
                <div className="container">
                    <div className="faq__section">
                        <div className="faq__section-title">
                            <h3>Жеткізу туралы ақпарат</h3>
                        </div>
                        <div className="faq__section-body">
                            <div className="row">
                                <div className="faq__section-column col-12 col-lg-6">
                                    <div className="typography">
                                        <h6>Жеткізудің қандай әдістері бар?</h6>

                                        <p>
                                        Жеткізу процесінде көптеген әдістер пайда болуы мүмкін. Оныларды таңдау, өзара кеңістіктерге байланысты айырмашылықтарды тексеру, жаңа технологияларды қолдану, мәселелерді шешу уақытын талдау және өтеуден қорғау, мәліметтерді жинау, жеткізу параметрлерін көзделу және төмендеу, тексеру және бағалау, жеткізуді бастау, көзделу және бағалау, жеткізуді бастау және бітіру, нәтижелерді анықтау және дәлелдеме жасау сияқты бірнеше әдістерге қатысты болуы мүмкін.
                                        </p>

                                        <h6>Сіз халықаралық тасымалдарды жүзеге асырасыз ба?</h6>

                                        <p>
                                        Сіз халықаралық тасымалдарды жүзеге асырасыз. Біз тасымалдау компаниясы ретінде қызмет көрсетеміз, әлемдік деңгейде жеткізу, көлемді және мөлшерлі каргоны жеткізу жатамында. Бізге жеткізу кезінде сенімді боласыз, сондықтан барлық қажетті жолақтарды, жеткізу мөлшерлерін және техникалық мүмкіндіктерді қамтамасыз ету үшін бізбен байланысуға тырысуыңызды қалаймыз.
                                        </p>
                                    </div>
                                </div>
                                <div className="faq__section-column col-12 col-lg-6">
                                    <div className="typography">
                                        <h6>Жеткізудің қандай әдістері бар?</h6>

                                        <p>
                                        Жеткізудің әдістері даму, пайдаланушының біліктілігін тексеру, технологияларды қолдану, мәселелерді шешу, мәліметтерді жинау, параметрлерді көзделу, тексеру және бағалау, бастау және бітіру, нәтижелерді анықтау және дәлелдеме жасау сияқты әдістерден тұратын болады.
                                        </p>

                                        <h6>Сіз халықаралық тасымалдарды жүзеге асырасыз ба?</h6>

                                        <p>
                                        Біз халықаралық тасымалдарды жүзеге асырамыз. Мыңдаған клиенттерге қызмет көрсету арқылы, әлемдік деңгейде жеткізу қызметтерін орындауға дайынмыз. Біз сіздің тасымалдау жатамында көлемді және мөлшерлі каргоны жеткізу қызметіне көмек көрсетеміз. Сіздің көліктерді, ұшақтарды, жүктерді және басқа каргоның көлемінің қажетті болатын мөлшеріне жауап береміз. Біздің қызметтерге сенімді болып, бізбен байланысуға тырысыңыз.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="faq__section">
                        <div className="faq__section-title">
                            <h3>Төлем туралы ақпарат</h3>
                        </div>
                        <div className="faq__section-body">
                            <div className="row">
                                <div className="faq__section-column col-12 col-lg-6">
                                    <div className="typography">
                                        <h6>Жеткізудің қандай әдістері бар?</h6>

                                        <p>
                                            Lorem ipsum dolor sit amet conse ctetur adipisicing
                                            elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris nisi ut aliquip
                                            ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore
                                            eu fugiat.
                                        </p>
                                    </div>
                                </div>
                                <div className="faq__section-column col-12 col-lg-6">
                                    <div className="typography">
                                        <h6>Жеткізудің қандай әдістері бар?</h6>

                                        <p>
                                            Lorem ipsum dolor sit amet conse ctetur adipisicing
                                            elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris nisi ut aliquip
                                            ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore
                                            eu fugiat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="faq__section">
                        <div className="faq__section-title">
                            <h3>Тапсырыстар мен қайтарулар</h3>
                        </div>
                        <div className="faq__section-body">
                            <div className="row">
                                <div className="faq__section-column col-12 col-lg-6">
                                    <div className="typography">
                                        <h6>Жеткізудің қандай әдістері бар?</h6>

                                        <p>
                                            Lorem ipsum dolor sit amet conse ctetur adipisicing
                                            elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris nisi ut aliquip
                                            ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore
                                            eu fugiat.
                                        </p>
                                    </div>
                                </div>
                                <div className="faq__section-column col-12 col-lg-6">
                                    <div className="typography">
                                        <h6>Жеткізудің қандай әдістері бар?</h6>

                                        <p>
                                            Lorem ipsum dolor sit amet conse ctetur adipisicing
                                            elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris nisi ut aliquip
                                            ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore
                                            eu fugiat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SitePageFaq;
