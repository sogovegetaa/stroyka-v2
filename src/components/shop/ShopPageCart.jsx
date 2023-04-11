// react
import React, { Component } from 'react';

// third-party
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

// application
import AsyncAction from '../shared/AsyncAction';
import Currency from '../shared/Currency';
import InputNumber from '../shared/InputNumber';
import PageHeader from '../shared/PageHeader';
import { cartRemoveItem, cartUpdateQuantities } from '../../store/cart';
import { Cross12Svg } from '../../svg';

// data stubs
import theme from '../../data/theme';


class ShopPageCart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            /** example: [{itemId: 8, value: 1}] */
            quantities: [],
        };
    }

    getItemQuantity(item) {
        const { quantities } = this.state;
        const quantity = quantities.find((x) => x.itemId === item.id);

        return quantity ? quantity.value : item.quantity;
    }

    handleChangeQuantity = (item, quantity) => {
        this.setState((state) => {
            const stateQuantity = state.quantities.find((x) => x.itemId === item.id);

            if (!stateQuantity) {
                state.quantities.push({ itemId: item.id, value: quantity });
            } else {
                stateQuantity.value = quantity;
            }

            return {
                quantities: state.quantities,
            };
        });
    };

    cartNeedUpdate() {
        const { quantities } = this.state;
        const { cart } = this.props;

        return quantities.filter((x) => {
            const item = cart.items.find((item) => item.id === x.itemId);

            return item && item.quantity !== x.value;
        }).length > 0;
    }

    renderItems() {
        const { cart, cartRemoveItem } = this.props;

        return cart.items.map((item) => {
            let image;
            let options;

            if (item.product.images.length > 0) {
                image = <Link to={`/shop/product/${item.product.id}`}><img src={item.product.images[0]} alt="" /></Link>;
            }

            if (item.options.length > 0) {
                options = (
                    <ul className="cart-table__options">
                        {item.options.map((option, index) => (
                            <li key={index}>{`${option.optionTitle}: ${option.valueTitle}`}</li>
                        ))}
                    </ul>
                );
            }

            const removeButton = (
                <AsyncAction
                    action={() => cartRemoveItem(item.id)}
                    render={({ run, loading }) => {
                        const classes = classNames('btn btn-light btn-sm btn-svg-icon', {
                            'btn-loading': loading,
                        });

                        return (
                            <button type="button" onClick={run} className={classes}>
                                <Cross12Svg />
                            </button>
                        );
                    }}
                />
            );

            return (
                <tr key={item.id} className="cart-table__row">
                    <td className="cart-table__column cart-table__column--image">
                        {image}
                    </td>
                    <td className="cart-table__column cart-table__column--product">
                        <Link to={`/shop/product/${item.product.id}`} className="cart-table__product-name">
                            {item.product.name}
                        </Link>
                        {options}
                    </td>
                    <td className="cart-table__column cart-table__column--price" data-title="Price">
                        <Currency value={item.price} />
                    </td>
                    <td className="cart-table__column cart-table__column--quantity" data-title="Quantity">
                        <InputNumber
                            onChange={(quantity) => this.handleChangeQuantity(item, quantity)}
                            value={this.getItemQuantity(item)}
                            min={1}
                        />
                    </td>
                    <td className="cart-table__column cart-table__column--total" data-title="Total">
                        <Currency value={item.total} />
                    </td>
                    <td className="cart-table__column cart-table__column--remove">
                        {removeButton}
                    </td>
                </tr>
            );
        });
    }

    renderTotals() {
        const { cart } = this.props;

        if (cart.extraLines.length <= 0) {
            return null;
        }

        const extraLines = cart.extraLines.map((extraLine, index) => {
            let calcShippingLink;

            if (extraLine.type === 'shipping') {
                calcShippingLink = <div className="cart__calc-shipping"><Link to="/">Жеткізу Құны</Link></div>;
            }

            return (
                <tr key={index}>
                    <th>{extraLine.title}</th>
                    <td>
                        <Currency value={extraLine.price} />
                        {calcShippingLink}
                    </td>
                </tr>
            );
        });

        return (
            <React.Fragment>
                <thead className="cart__totals-header">
                    <tr>
                        <th>Аралық қорытынды</th>
                        <td><Currency value={cart.subtotal} /></td>
                    </tr>
                </thead>
                <tbody className="cart__totals-body">
                    {extraLines}
                </tbody>
            </React.Fragment>
        );
    }

    renderCart() {
        const { cart, cartUpdateQuantities } = this.props;
        const { quantities } = this.state;

        const updateCartButton = (
            <AsyncAction
                action={() => cartUpdateQuantities(quantities)}
                render={({ run, loading }) => {
                    const classes = classNames('btn btn-primary cart__update-button', {
                        'btn-loading': loading,
                    });

                    return (
                        <button type="button" onClick={run} className={classes} disabled={!this.cartNeedUpdate()}>
                            Себетті Жаңарту
                        </button>
                    );
                }}
            />
        );

        return (
            <div className="cart block">
                <div className="container">
                    <table className="cart__table cart-table">
                        <thead className="cart-table__head">
                            <tr className="cart-table__row">
                                <th className="cart-table__column cart-table__column--image">Сурет</th>
                                <th className="cart-table__column cart-table__column--product">Өнім</th>
                                <th className="cart-table__column cart-table__column--price">Бағасы</th>
                                <th className="cart-table__column cart-table__column--quantity">Саны</th>
                                <th className="cart-table__column cart-table__column--total">Барлық</th>
                                <th className="cart-table__column cart-table__column--remove" aria-label="Remove" />
                            </tr>
                        </thead>
                        <tbody className="cart-table__body">
                            {this.renderItems()}
                        </tbody>
                    </table>
                    <div className="cart__actions">
                        <form className="cart__coupon-form">
                            <label htmlFor="input-coupon-code" className="sr-only">Құпия сөз</label>
                            <input type="text" className="form-control" id="input-coupon-code" placeholder="Купон коды" />
                            <button type="submit" className="btn btn-primary">Купонды қолдану</button>
                        </form>
                        <div className="cart__buttons">
                            <Link to="/" className="btn btn-light">Сатып алуды жалғастыру</Link>
                            {updateCartButton}
                        </div>
                    </div>

                    <div className="row justify-content-end pt-md-5 pt-4">
                        <div className="col-12 col-md-7 col-lg-6 col-xl-5">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title">Себет деректері</h3>
                                    <table className="cart__totals">
                                        {this.renderTotals()}
                                        <tfoot className="cart__totals-footer">
                                            <tr>
                                                <th>Барлық</th>
                                                <td><Currency value={cart.total} /></td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                    <Link to="/shop/checkout" className="btn btn-primary btn-xl btn-block cart__checkout-button">
                                    Тапсырысты рәсімдеу
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const { cart } = this.props;
        const breadcrumb = [
            { title: 'Басты бет', url: '' },
            { title: 'Сауда Себеті', url: '' },
        ];

        let content;

        if (cart.quantity) {
            content = this.renderCart();
        } else {
            content = (
                <div className="block block-empty">
                    <div className="container">
                        <div className="block-empty__body">
                            <div className="block-empty__message">Сіздің себетіңіз бос!</div>
                            <div className="block-empty__actions">
                                <Link to="/" className="btn btn-primary btn-sm">Жалғастыру</Link>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <React.Fragment>
                <Helmet>
                    <title>{`Сауда Себеті — ${theme.name}`}</title>
                </Helmet>

                <PageHeader header="Сауда Себеті" breadcrumb={breadcrumb} />

                {content}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart,
});

const mapDispatchToProps = {
    cartRemoveItem,
    cartUpdateQuantities,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopPageCart);
