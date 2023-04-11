// react
import React from 'react';

// application
import Pagination from '../shared/Pagination';
import Rating from '../shared/Rating';

// data stubs
import reviews from '../../data/shopProductReviews';


function ProductTabReviews() {
    const reviewsList = reviews.map((review, index) => (
        <li key={index} className="reviews-list__item">
            <div className="review">
                <div className="review__avatar"><img src={review.avatar} alt="" /></div>
                <div className=" review__content">
                    <div className=" review__author">{review.author}</div>
                    <div className=" review__rating">
                        <Rating value={review.rating} />
                    </div>
                    <div className=" review__text">{review.text}</div>
                    <div className=" review__date">{review.date}</div>
                </div>
            </div>
        </li>
    ));

    return (
        <div className="reviews-view">
            <div className="reviews-view__list">
                <h3 className="reviews-view__header">Клиенттердің пікірлері</h3>

                <div className="reviews-list">
                    <ol className="reviews-list__content">
                        {reviewsList}
                    </ol>
                    <div className="reviews-list__pagination">
                        <Pagination current={1} siblings={2} total={10} />
                    </div>
                </div>
            </div>

            <form className="reviews-view__form">
                <h3 className="reviews-view__header">Пікір жазу</h3>
                <div className="row">
                    <div className="col-12 col-lg-9 col-xl-8">
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="review-stars">Шолу жұлдыздары</label>
                                <select id="review-stars" className="form-control">
                                    <option>5 Жұлдыз рейтингі</option>
                                    <option>4 Жұлдыз рейтингі</option>
                                    <option>3 Жұлдыз рейтингі</option>
                                    <option>2 Жұлдыз рейтингі</option>
                                    <option>1 Жұлдыз рейтингі</option>
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="review-author">Аты - жөні</label>
                                <input type="text" className="form-control" id="review-author" placeholder="Аты - жөні" />
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="review-email">Электрондық пошта</label>
                                <input type="text" className="form-control" id="review-email" placeholder="Электрондық пошта" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="review-text">Сіздің пікіріңіз</label>
                            <textarea className="form-control" id="review-text" rows="6" />
                        </div>
                        <div className="form-group mb-0">
                            <button type="submit" className="btn btn-primary btn-lg">Пікіріді жариялау</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ProductTabReviews;
