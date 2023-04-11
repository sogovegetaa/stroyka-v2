// react
import React from 'react';

// third-party
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

// data stubs
import theme from '../../data/theme';


function SitePageNotFound() {
    return (
        <div className="block">
            <Helmet>
                <title>{`404 Бет Табылмады — ${theme.name}`}</title>
            </Helmet>

            <div className="container">
                <div className="not-found">
                    <div className="not-found__404">
                    Ой! Қате 404
                    </div>

                    <div className="not-found__content">
                        <h1 className="not-found__title">Бет табылмады</h1>

                        <p className="not-found__text">
                        Сіз іздеген бетті таба алмайтын сияқтымыз.
                            <br />
                            Іздеуді пайдаланып көріңіз.
                        </p>

                        <form className="not-found__search">
                            <input type="text" className="not-found__search-input form-control" placeholder="Іздеу Nермині..." />
                            <button type="submit" className="not-found__search-button btn btn-primary">Іздеу</button>
                        </form>

                        <p className="not-found__text">
                        Немесе жаңадан бастау үшін басты бетке өтіңіз.
                        </p>

                        <Link to="/" className="btn btn-secondary btn-sm">Басты бетке өту</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SitePageNotFound;
