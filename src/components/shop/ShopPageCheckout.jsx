// react
import React, { Component } from "react";

// third-party
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Link, Redirect } from "react-router-dom";

// application
import Collapse from "../shared/Collapse";
import Currency from "../shared/Currency";
import PageHeader from "../shared/PageHeader";
import { Check9x7Svg } from "../../svg";

// data stubs
import payments from "../../data/shopPayments";
import theme from "../../data/theme";

class ShopPageCheckout extends Component {
  payments = payments;

  constructor(props) {
    super(props);

    this.state = {
      payment: "bank",
    };
  }

  handlePaymentChange = (event) => {
    if (event.target.checked) {
      this.setState({ payment: event.target.value });
    }
  };

  renderTotals() {
    const { cart } = this.props;

    if (cart.extraLines.length <= 0) {
      return null;
    }

    const extraLines = cart.extraLines.map((extraLine, index) => (
      <tr key={index}>
        <th>{extraLine.title}</th>
        <td>
          <Currency value={extraLine.price} />
        </td>
      </tr>
    ));

    return (
      <React.Fragment>
        <tbody className="checkout__totals-subtotals">
          <tr>
            <th>Аралық қорытынды</th>
            <td>
              <Currency value={cart.subtotal} />
            </td>
          </tr>
          {extraLines}
        </tbody>
      </React.Fragment>
    );
  }

  renderCart() {
    const { cart } = this.props;

    const items = cart.items.map((item) => (
      <tr key={item.id}>
        <td>{`${item.product.name} × ${item.quantity}`}</td>
        <td>
          <Currency value={item.total} />
        </td>
      </tr>
    ));

    return (
      <table className="checkout__totals">
        <thead className="checkout__totals-header">
          <tr>
            <th>Өнім</th>
            <th>Барлық</th>
          </tr>
        </thead>
        <tbody className="checkout__totals-products">{items}</tbody>
        {this.renderTotals()}
        <tfoot className="checkout__totals-footer">
          <tr>
            <th>Total</th>
            <td>
              <Currency value={cart.total} />
            </td>
          </tr>
        </tfoot>
      </table>
    );
  }

  renderPaymentsList() {
    const { payment: currentPayment } = this.state;

    const payments = this.payments.map((payment) => {
      const renderPayment = ({ setItemRef, setContentRef }) => (
        <li className="payment-methods__item" ref={setItemRef}>
          <label className="payment-methods__item-header">
            <span className="payment-methods__item-radio input-radio">
              <span className="input-radio__body">
                <input
                  type="radio"
                  className="input-radio__input"
                  name="checkout_payment_method"
                  value={payment.key}
                  checked={currentPayment === payment.key}
                  onChange={this.handlePaymentChange}
                />
                <span className="input-radio__circle" />
              </span>
            </span>
            <span className="payment-methods__item-title">{payment.title}</span>
          </label>
          <div className="payment-methods__item-container" ref={setContentRef}>
            <div className="payment-methods__item-description text-muted">
              {payment.description}
            </div>
          </div>
        </li>
      );

      return (
        <Collapse
          key={payment.key}
          open={currentPayment === payment.key}
          toggleClass="payment-methods__item--active"
          render={renderPayment}
        />
      );
    });

    return (
      <div className="payment-methods">
        <ul className="payment-methods__list">{payments}</ul>
      </div>
    );
  }

  render() {
    const { cart } = this.props;

    if (cart.items.length < 1) {
      return <Redirect to="cart" />;
    }

    const breadcrumb = [
      { title: "Басты бет", url: "" },
      { title: "Сауда Себеті", url: "/shop/cart" },
      { title: "Тексеру", url: "" },
    ];

    return (
      <React.Fragment>
        <Helmet>
          <title>{`Тексеру — ${theme.name}`}</title>
        </Helmet>

        <PageHeader header="Тексеру" breadcrumb={breadcrumb} />

        <div className="checkout block">
          <div className="container">
            <div className="row">
              <div className="col-12 mb-3">
                <div className="alert alert-primary alert-lg">
                  Қайтарылатын клиент?{" "}
                  <Link to="/account/login">Кіру үшін мына жерді басыңыз</Link>
                </div>
              </div>

              <div className="col-12 col-lg-6 col-xl-7">
                <div className="card mb-lg-0">
                  <div className="card-body">
                    <h3 className="card-title">Төлем деректемелері</h3>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="checkout-first-name">Аты - жөні </label>
                        <input
                          type="text"
                          className="form-control"
                          id="checkout-first-name"
                          placeholder="Аты - жөні "
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="checkout-last-name">Тегі</label>
                        <input
                          type="text"
                          className="form-control"
                          id="checkout-last-name"
                          placeholder="Тегі"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="checkout-company-name">
                        Компания Атауы{" "}
                        <span className="text-muted">(Қосымша)</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="checkout-company-name"
                        placeholder="Компания Атауы"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="checkout-country">Ел</label>
                      <select id="checkout-country" className="form-control">
                        <option>Елді таңдаңыз...</option>
                        <option>АҚШ</option>
                        <option>Ресей</option>
                        <option>Италия</option>
                        <option>Франция</option>
                        <option>Украина</option>
                        <option>Германия</option>
                        <option>Австралия</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="checkout-street-address">
                        Көше Мекенжайы
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="checkout-street-address"
                        placeholder="Көше Мекенжайы"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="checkout-address">
                        Apartment, suite, unit etc.{" "}
                        <span className="text-muted">(Қосымша)</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="checkout-address"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="checkout-city">Мекен / Қала</label>
                      <input
                        type="text"
                        className="form-control"
                        id="checkout-city"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="checkout-state">Штат / Округ</label>
                      <input
                        type="text"
                        className="form-control"
                        id="checkout-state"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="checkout-postcode">Индекс / ZIP</label>
                      <input
                        type="text"
                        className="form-control"
                        id="checkout-postcode"
                      />
                    </div>

                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="checkout-email">
                          Электрондық пошта
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="checkout-email"
                          placeholder="Электрондық пошта"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="checkout-phone">Телефон</label>
                        <input
                          type="text"
                          className="form-control"
                          id="checkout-phone"
                          placeholder="Телефон"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="form-check">
                        <span className="form-check-input input-check">
                          <span className="input-check__body">
                            <input
                              className="input-check__input"
                              type="checkbox"
                              id="checkout-create-account"
                            />
                            <span className="input-check__box" />
                            <Check9x7Svg className="input-check__icon" />
                          </span>
                        </span>
                        <label
                          className="form-check-label"
                          htmlFor="checkout-create-account"
                        >
                          Тіркелгі жасау керек пе?
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="card-divider" />
                  <div className="card-body">
                    <h3 className="card-title">Жеткізу Мәліметтері</h3>

                    <div className="form-group">
                      <div className="form-check">
                        <span className="form-check-input input-check">
                          <span className="input-check__body">
                            <input
                              className="input-check__input"
                              type="checkbox"
                              id="checkout-different-address"
                            />
                            <span className="input-check__box" />
                            <Check9x7Svg className="input-check__icon" />
                          </span>
                        </span>
                        <label
                          className="form-check-label"
                          htmlFor="checkout-different-address"
                        >
                          Басқа мекен-жайға жіберу керек пе?
                        </label>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="checkout-comment">
                      Тапсырыс ескертпелер{" "}
                        <span className="text-muted">(Қосымша)</span>
                      </label>
                      <textarea
                        id="checkout-comment"
                        className="form-control"
                        rows="4"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-6 col-xl-5 mt-4 mt-lg-0">
                <div className="card mb-0">
                  <div className="card-body">
                    <h3 className="card-title">Сіздің тапсырысыңыз</h3>

                    {this.renderCart()}

                    {this.renderPaymentsList()}

                    <div className="checkout__agree form-group">
                      <div className="form-check">
                        <span className="form-check-input input-check">
                          <span className="input-check__body">
                            <input
                              className="input-check__input"
                              type="checkbox"
                              id="checkout-terms"
                            />
                            <span className="input-check__box" />
                            <Check9x7Svg className="input-check__icon" />
                          </span>
                        </span>
                        <label
                          className="form-check-label"
                          htmlFor="checkout-terms"
                        >
                          Мен веб-сайтты оқып, онымен келісемін
                          <Link to="site/terms">шарттар мен ережелер</Link>*
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary btn-xl btn-block"
                    >
                      Тапсырыс Беру
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ShopPageCheckout);
