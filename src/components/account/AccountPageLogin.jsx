// react
import React, { useRef } from "react";

// third-party
import { Helmet } from "react-helmet";

// application
import PageHeader from "../shared/PageHeader";

// data stubs
import theme from "../../data/theme";

export default function AccountPageLogin() {
  const breadcrumb = [
    { title: "Басты бет", url: "" },
    { title: "Менің аккаунтым", url: "" },
  ];
  const [errAcc, setErrAcc] = React.useState(false);
  const [accCreated, setAccCreated] = React.useState(false)
  const [accCreatedError, setAccCreatedError] = React.useState(false)
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const full_name = formData.get("full_name");
    const password = formData.get("password");

    var requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        full_name,
        password,
      }),
      redirect: "follow",
    };
    fetch("https://asem-backend.vercel.app/api/user/reg", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setAccCreated(true)
        window.location.href = "/"
        console.log(result)})
      .catch((error) => {
        setAccCreatedError(true)
        console.log("error", error)});
  };

  const onLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    var requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
      redirect: "follow",
    };
    fetch("https://asem-backend.vercel.app/api/user/login", requestOptions)
      .then((response) => {
        return response.json()
      }).then(res => {
        if(!res.token){
          setErrAcc(true)
        }else {
          localStorage.setItem("Bekas_token", res.token);
          window.location.href = "/"
        }
        console.log(res);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Логин — ${theme.name}`}</title>
      </Helmet>

      <PageHeader header="Менің аккаунтым" breadcrumb={breadcrumb} />

      <div className="block">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex">
              <div className="card flex-grow-1 mb-md-0">
                <div className="card-body">
                  <h3 className="card-title">Логин</h3>
                  <form onSubmit={(e) => onLogin(e)}>
                    <div className="form-group">
                      <label htmlFor="login-email">Электрондық пошта</label>
                      <input
                        id="login-email"
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        name="email"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="login-password">Құпия сөз</label>
                      <input
                        id="login-password"
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                      />
                      <small
                        className="form-text"
                        style={{ color: "red!important" }}
                      >
                        {errAcc && "Деректер дұрыс енгізілмеген"}
                      </small>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary mt-2 mt-md-3 mt-lg-4"
                    >
                      Логин
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex mt-4 mt-md-0">
              <div className="card flex-grow-1 mb-0">
                <div className="card-body">
                  <h3 className="card-title">Тіркеу</h3>
                  <form onSubmit={(e) => onSubmit(e)}>
                    <div className="form-group">
                      <label htmlFor="register-email">Электрондық пошта</label>
                      <input
                        id="register-email"
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email енгізіңіз"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="full-name">Аты - жөні</label>
                      <input
                        id="full_name"
                        type="text"
                        name="full_name"
                        className="form-control"
                        placeholder="Толық атын енгізіңіз"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="register-password">
                        Құпия сөзді қайталау
                      </label>
                      <input
                        id="register-password"
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Құпия сөзді енгізіңіз"
                      />
                    </div>


                    <button
                      type="submit"
                      className="btn btn-primary mt-2 mt-md-3 mt-lg-4"
                    >
                      Тіркеу
                    </button>
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
