// react
import React from 'react';

// third-party
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

// application
import PageHeader from '../shared/PageHeader';

// data stubs
import theme from '../../data/theme';


function SitePageTerms() {
    const breadcrumb = [
        { title: 'Басты бет', url: '' },
        { title: 'Шарттар Мен Ережелер', url: '' },
    ];

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Шарттар Мен Ережелер — ${theme.name}`}</title>
            </Helmet>

            <PageHeader breadcrumb={breadcrumb} />

            <div className="block">
                <div className="container">
                    <div className="document">
                        <div className="document__header">
                            <h1 className="document__title">Шарттар Мен Ережелер</h1>
                            <div className="document__subtitle">Осы Келісімге соңғы өзгеріс 2022 жылғы 27 Мамырда енгізілді.</div>
                        </div>
                        <div className="document__content typography">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                facilisis neque ut purus fermentum, ac pretium nibh facilisis.
                                Vivamus venenatis viverra iaculis. Suspendisse tempor orci non
                                sapien ullamcorper dapibus. Suspendisse at velit diam. Donec
                                pharetra nec enim blandit vulputate. Suspendisse potenti.
                                Pellentesque et molestie ante. In feugiat ante vitae ultricies
                                malesuada.
                            </p>

                            <h2>Анықтамалар</h2>

                            <ol>
                                <li>
                                    <strong>Күріш</strong>
                                    — Morbi posuere eleifend sollicitudin. Praesent eget ante in
                                    enim scelerisque scelerisque. Donec mi lorem, molestie a sapien
                                    non, laoreet convallis felis. In semper felis in lacus
                                    venenatis, sit amet commodo leo interdum. Maecenas congue ut
                                    leo et auctor.
                                </li>
                                <li>
                                    <strong>Қатысушы</strong>
                                    — Class aptent taciti sociosqu ad litora torquent per conubia
                                    nostra, per inceptos himenaeos. Nulla orci ante, viverra in
                                    imperdiet in, pharetra et leo
                                </li>
                                <li>
                                    <strong>Вестибюль</strong>
                                    — Vestibulum arcu tellus, aliquam vel fermentum vestibulum,
                                    lacinia pulvinar ipsum. In hac habitasse platea dictumst.
                                    Integer felis libero, blandit scelerisque mauris eget, porta
                                    elementum sapien. Mauris luctus arcu non enim lobortis gravida.
                                </li>
                            </ol>

                            <h2>Әшекейленген долор</h2>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                facilisis neque ut purus fermentum, ac pretium nibh facilisis.
                                Vivamus venenatis viverra iaculis. Suspendisse tempor orci non
                                sapien ullamcorper dapibus. Suspendisse at velit diam. Donec
                                pharetra nec enim blandit vulputate. Suspendisse potenti.
                                Pellentesque et molestie ante. In feugiat ante vitae ultricies
                                malesuada.
                            </p>

                            <p>
                            Тіркелу туралы ақпарат алу үшін біздің сайтқа кіріңіз
                                <Link to="/site/contact-us">байланыс беті</Link>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SitePageTerms;
