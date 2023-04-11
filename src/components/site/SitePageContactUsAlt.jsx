// react
import React from 'react';

// third-party
import { Helmet } from 'react-helmet';

// application
import PageHeader from '../shared/PageHeader';

// data stubs
import theme from '../../data/theme';


function SitePageContactUsAlt() {
    const breadcrumb = [
        { title: 'Басты бет', url: '' },
        { title: 'Бізбен хабарласу', url: '' },
    ];

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Бізбен хабарласу Alt — ${theme.name}`}</title>
            </Helmet>

            <PageHeader header="Бізбен хабарласу" breadcrumb={breadcrumb} />

            <div className="block">
                <div className="container">
                    <div className="card mb-0 contact-us">
                        <div className="contact-us__map">
                            <iframe
                                title="Google Map"
                                src="https://maps.google.com/maps?q=Holbrook-Palmer%20Park&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                            />
                        </div>
                        <div className="card-body">
                            <div className="contact-us__container">
                                <div className="row">
                                    <div className="col-12 col-lg-6 pb-4 pb-lg-0">
                                        <h4 className="contact-us__header card-title">Біздің мекен-жайымыз</h4>

                                        <div className="contact-us__address">
                                            <p>
                                                715 Fake Ave, Apt. 34, New York, NY 10021 USA
                                                <br />
                                                Email: stroyka@example.com
                                                <br />
                                                Телефон нөмірі: +1 754 000-00-00
                                            </p>

                                            <p>
                                                <strong>Жұмыс уақыты</strong>
                                                <br />
                                                Дүйсенбіден жұмаға дейін: 8-ден кешкі 8-ге дейін
                                                <br />
                                                Сенбі: таңғы 8-ден кешкі 18-ге дейін
                                                <br />
                                                Жексенбі: таңғы 10-дан кешкі 16-ға дейін
                                            </p>

                                            <p>

                                                <strong>Пікір</strong>
                                                <br />
                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit. Curabitur suscipit suscipit mi, non tempor
                                                nulla finibus eget. Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <h4 className="contact-us__header card-title">Бізге хабарлама қалдырыңыз</h4>

                                        <form>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="form-name">Аты - жөні</label>
                                                    <input type="text" id="form-name" className="form-control" placeholder="Аты - жөні" />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="form-email">Email</label>
                                                    <input
                                                        type="email"
                                                        id="form-email"
                                                        className="form-control"
                                                        placeholder="Электрондық пошта"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="form-subject">Тақырып</label>
                                                <input type="text" id="form-subject" className="form-control" placeholder="Тақырып" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="form-message">Хабар</label>
                                                <textarea id="form-message" className="form-control" rows="4" />
                                            </div>
                                            <button type="submit" className="btn btn-primary">Хабарлама Жіберу</button>
                                        </form>

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

export default SitePageContactUsAlt;
