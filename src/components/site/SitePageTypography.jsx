// react
import React from 'react';

// third-party
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

// application
import PageHeader from '../shared/PageHeader';

// data stubs
import theme from '../../data/theme';


function SitePageTypography() {
    const breadcrumb = [
        { title: 'Басты бет', url: '' },
        { title: 'Баспахана', url: '' },
    ];

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Баспахана — ${theme.name}`}</title>
            </Helmet>

            <PageHeader breadcrumb={breadcrumb} />

            <div className="block">
                <div className="container">
                    <div className="document">
                        <div className="document__header">
                            <h1 className="document__title">Баспахана</h1>
                        </div>
                        <div className="document__content typography">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                facilisis neque ut purus fermentum, ac pretium nibh facilisis.
                                Vivamus venenatis viverra iaculis. Suspendisse tempor orci non
                                sapien ullamcorper dapibus. Suspendisse at velit diam. Donec
                                pharetra nec enim blandit vulputate.
                            </p>

                            <h2>H2 Тақырыбының Мысалы</h2>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                facilisis neque ut purus fermentum, ac pretium nibh facilisis.
                                Vivamus venenatis viverra iaculis. Suspendisse tempor orci non
                                sapien ullamcorper dapibus. Suspendisse at velit diam. Donec
                                pharetra nec enim blandit vulputate.
                            </p>

                            <h3>H3 Тақырыбының Мысалы</h3>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                facilisis neque ut purus fermentum, ac pretium nibh facilisis.
                                Vivamus venenatis viverra iaculis. Suspendisse tempor orci non
                                sapien ullamcorper dapibus. Suspendisse at velit diam. Donec
                                pharetra nec enim blandit vulputate.
                            </p>

                            <h4>H4 Тақырыбының Мысалы</h4>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                facilisis neque ut purus fermentum, ac pretium nibh facilisis.
                                Vivamus venenatis viverra iaculis. Suspendisse tempor orci non
                                sapien ullamcorper dapibus. Suspendisse at velit diam. Donec
                                pharetra nec enim blandit vulputate.
                            </p>

                            <h5>H5 Тақырыбының Мысалы</h5>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                facilisis neque ut purus fermentum, ac pretium nibh facilisis.
                                Vivamus venenatis viverra iaculis. Suspendisse tempor orci non
                                sapien ullamcorper dapibus. Suspendisse at velit diam. Donec
                                pharetra nec enim blandit vulputate.
                            </p>

                            <h6>H6 Тақырыбының Мысалы</h6>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                facilisis neque ut purus fermentum, ac pretium nibh facilisis.
                                Vivamus venenatis viverra iaculis. Suspendisse tempor orci non
                                sapien ullamcorper dapibus. Suspendisse at velit diam. Donec
                                pharetra nec enim blandit vulputate.
                            </p>

                            <hr />

                            <h3>Блоктан дәйексөз</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                facilisis neque ut purus fermentum, ac pretium nibh facilisis.
                                Vivamus venenatis viverra iaculis.
                            </p>
                            <blockquote>
                                <p>
                                    Suspendisse tempor orci non sapien ullamcorper dapibus. At
                                    velit diam. Donec pharetra nec enim blandit vulputate.
                                </p>
                                <p><cite>Адам Тейлор</cite></p>
                            </blockquote>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                facilisis neque ut purus fermentum, ac pretium nibh facilisis.
                                Vivamus venenatis viverra iaculis.
                            </p>

                            <hr />

                            <h3>Стандартты тізім</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                facilisis neque ut purus fermentum, ac pretium nibh facilisis.
                                Vivamus venenatis viverra iaculis.
                            </p>
                            <ul>
                                <li>
                                    Morbi dignissim hendrerit ligula, quis rutrum risus ultrices eu
                                </li>
                                <li>
                                    Nullam dapibus id mauris dignissim dignissim.
                                    Sed ut metus mauris.
                                </li>
                                <li>
                                    Nulla mollis justo faucibus, laoreet tortor ac, ornare arcu.
                                </li>
                                <li>
                                    Libero quis mattis sollicitudin, ipsum sem mattis ligula,
                                    pharetra consectetur nisl mi sit amet turpis.
                                </li>
                                <li>
                                    Vivamus malesuada, mauris in pulvinar ultricies, eros ligula
                                    scelerisque mi, a porttitor nulla ligula sed erat.
                                </li>
                            </ul>

                            <h3>Нөмірленген тізім</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                facilisis neque ut purus fermentum, ac pretium nibh facilisis.
                                Vivamus venenatis viverra iaculis.
                            </p>
                            <ol>
                                <li>
                                    Morbi dignissim hendrerit ligula, quis rutrum risus ultrices eu
                                </li>
                                <li>
                                    Nullam dapibus id mauris dignissim dignissim.
                                    Sed ut metus mauris.
                                </li>
                                <li>
                                    Nulla mollis justo faucibus, laoreet tortor ac, ornare arcu.
                                </li>
                                <li>
                                    Libero quis mattis sollicitudin, ipsum sem mattis ligula,
                                    pharetra consectetur nisl mi sit amet turpis.
                                </li>
                                <li>
                                    Vivamus malesuada, mauris in pulvinar ultricies, eros ligula
                                    scelerisque mi, a porttitor nulla ligula sed erat.
                                </li>
                            </ol>

                            <h3>Мәтін мәнерлері</h3>
                            <p>
                                Lorem ipsum
                                <strong>bold text</strong>
                                , consectetur
                                <em>italic text</em>
                                . Donec facilisis
                                <del>line through</del>
                                neque ut purus fermentum, ac
                                <Link to="/">link</Link>
                                . Vivamus venenatis viverra iaculis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SitePageTypography;
