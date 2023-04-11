// react
import React from 'react';

// third-party
import { Helmet } from 'react-helmet';

// data stubs
import theme from '../../data/theme';


export default function AccountPageProfile() {
    return (
        <div className="card">
            <Helmet>
                <title>{`Профиль — ${theme.name}`}</title>
            </Helmet>

            <div className="card-header">
                <h5>Профильді өңдеу</h5>
            </div>
            <div className="card-divider" />
            <div className="card-body">
                <div className="row no-gutters">
                    <div className="col-12 col-lg-7 col-xl-6">
                        <div className="form-group">
                            <label htmlFor="profile-first-name">Аты - жөні</label>
                            <input
                                id="profile-first-name"
                                type="text"
                                className="form-control"
                                placeholder="Аты - жөні"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="profile-last-name">Тегі</label>
                            <input
                                id="profile-last-name"
                                type="text"
                                className="form-control"
                                placeholder="Тегі"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="profile-email">Электрондық пошта</label>
                            <input
                                id="profile-email"
                                type="email"
                                className="form-control"
                                placeholder="Электрондық пошта"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="profile-phone">Телефон нөмірі</label>
                            <input
                                id="profile-phone"
                                type="text"
                                className="form-control"
                                placeholder="Телефон нөмірі"
                            />
                        </div>

                        <div className="form-group mt-5 mb-0">
                            <button type="button" className="btn btn-primary">Сақтау</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
