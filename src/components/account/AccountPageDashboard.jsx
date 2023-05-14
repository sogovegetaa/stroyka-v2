// react
import React from "react";

// third-party
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

// data stubs
import addresses from "../../data/accountAddresses";
import allOrders from "../../data/accountOrders";
import theme from "../../data/theme";
import { parseJwt } from "../shared/ParseToken";

export default function AccountPageDashboard() {
  const userdata = parseJwt(localStorage.getItem("Bekas_token"));
  const [token, setToken] = React.useState(localStorage.getItem("Bekas_token"));
  function handleLogout() {
    localStorage.removeItem('Bekas_token') // Delete the token
    setToken(null); // Update the token state to null
    window.location.href="/account/login"
  }
  const address = addresses[0];
  const orders = allOrders.slice(0, 3).map((order) => (
    <tr key={order.id}>
      <td>
        <Link to="/">#{order.id}</Link>
      </td>
      <td>{order.date}</td>
      <td>{order.status}</td>
      <td>{order.total}</td>
    </tr>
  ));

  return (
    <div className="dashboard">
      <Helmet>
        <title>{`My Account — ${theme.name}`}</title>
      </Helmet>

      <div className="dashboard__profile card profile-card">
        <div className="card-body profile-card__body">
          <div className="profile-card__avatar">
            <img src="images/avatars/avatar-2.jpg" alt="" />
          </div>
          <div className="profile-card__name">
            {userdata ? userdata.id : "Не авторизован"}
          </div>
          <div className="profile-card__email">{userdata.email}</div>
          <div className="profile-card__edit">
            {token ? (
              <Link onClick={handleLogout} className="btn btn-secondary btn-sm">
                Профильден шығу
              </Link>
            ) : (
              <Link to="profile" className="btn btn-secondary btn-sm">
                Логин
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="dashboard__address card address-card address-card--featured">
        {address.default && (
          <div className="address-card__badge">Әдепкі мекенжай</div>
        )}
        <div className="address-card__body">
          <div className="address-card__name">{userdata.id}</div>
          <div className="address-card__row">
            {address.country}
            <br />
            {address.postcode},{address.city}
            <br />
            {address.address}
          </div>
          <div className="address-card__row">
            <div className="address-card__row-title">Телефон нөмірі</div>
            <div className="address-card__row-content">{address.phone}</div>
          </div>
          <div className="address-card__row">
            <div className="address-card__row-title">Электрондық пошта</div>
            <div className="address-card__row-content">{userdata.email}</div>
          </div>
          <div className="address-card__footer">
            <Link to="/">Мекенжайды өзгерту</Link>
          </div>
        </div>
      </div>
      <div className="dashboard__orders card">
        <div className="card-header">
          <h5>Recent Orders</h5>
        </div>
        <div className="card-divider" />
        <div className="card-table">
          <div className="table-responsive-sm">
            <table>
              <thead>
                <tr>
                  <th>Тапсырыс</th>
                  <th>Күні</th>
                  <th>Мәртебесі</th>
                  <th>Барлық</th>
                </tr>
              </thead>
              <tbody>{orders}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
