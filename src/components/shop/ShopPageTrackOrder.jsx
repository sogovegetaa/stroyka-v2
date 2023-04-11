// react
import React from 'react';

// third-party
import { Helmet } from 'react-helmet';

// application
import PageHeader from '../shared/PageHeader';

// data stubs
import theme from '../../data/theme';


function ShopPageTrackOrder() {
    const breadcrumb = [
        { title: 'Басты бет', url: '' },
        { title: 'Тапсырысты Бақылау', url: '' },
    ];

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Тапсырысты Бақылау — ${theme.name}`}</title>
            </Helmet>

            <PageHeader breadcrumb={breadcrumb} />

            <div className="block">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-lg-6 col-md-8">
                            <div className="card flex-grow-1 mb-0 mt-lg-4 mt-md-3 mt-2">
                                <div className="card-body">
                                    <div className="card-title text-center"><h1 className="pt-lg-0 pt-2">Тапсырысты Бақылау</h1></div>
                                    <p className="mb-4 pt-2">
                                        Vestibulum sem odio, ullamcorper a imperdiet tincidunt
                                        sed magna felis, consequat a erat ut, rutrum finibus
                                        odio.
                                    </p>
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="track-order-id">Тапсырыс ID</label>
                                            <input id="track-order-id" type="text" className="form-control" placeholder="Тапсырыс ID" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="track-email">Электрондық пошта</label>
                                            <input id="track-email" type="email" className="form-control" placeholder="Электрондық пошта" />
                                        </div>
                                        <div className="pt-3">
                                            <button type="submit" className="btn btn-primary btn-lg btn-block">Жол</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ShopPageTrackOrder;
