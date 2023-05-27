// react
import React from "react";

// third-party
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

// application
import PageHeader from "../shared/PageHeader";

// data stubs
import theme from "../../data/theme";

function SitePageTerms() {
  const breadcrumb = [
    { title: "Басты бет", url: "" },
    { title: "Шарттар Мен Ережелер", url: "" },
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Шарттар Мен Ережелер — ${theme.name}`}</title>
      </Helmet>

      <PageHeader breadcrumb={breadcrumb} />

      <div className="block">
        <div className="container">
          <div className="document">
            <div className="document__header">
              <h1 className="document__title">Шарттар Мен Ережелер</h1>
              <div className="document__subtitle">
                Осы Келісімге соңғы өзгеріс 2022 жылғы 27 Мамырда енгізілді.
              </div>
            </div>
            <div className="document__content typography">
              <p>
                Біздің құрылыс материалдары веб-сайтына қош келдіңіз.
                Сайтқа кіру және оның қызметтерін пайдалану кезінде сіз осы
                Шарттар мен ережелерді сақтауға келісесіз. Біз алдын ала
                ескертусіз кез келген уақытта осы Шарттар мен ережелерді өзгерту
                немесе өзгерту құқығын өзімізде қалдырамыз. Ағымдағы шарттармен
                танысу үшін осы бетті үнемі тексеріп отырыңыз.
              </p>

              <h2>Анықтамалар</h2>

              <ol>
                <li>
                  <strong>Кірпіш</strong>— Қабырғаланған жерлі маңыздылықтарды тигізу үшін қолданылатын, қобызды шектеулі материал, көбінесі дөңгелек формада болатын, жел шығарылған глинадан немесе бетоннан жасалған.
                </li>
                <li>
                  <strong>Цемент</strong>— Қамтамасыз ету және құрылыс құру үшін қолданылатын, қабырша материал, жерлермен, сүт өндірістермен және басқа құрылыс құрылыстармен қосымшаулы қабыршалар құрылатын белгілі компоненттер топтамасы.
                </li>
                <li>
                  <strong>Күзет</strong>— Жоғары температураларда күмістену арқылы құрылатын шұғыл материал, түсуі жанышты, жеңіл жасайтын. Құрылыс жасауға пайдаланылады.
                </li>
              </ol>

              

              <p>
                Тіркелу туралы ақпарат алу үшін біздің сайтқа кіріңіз
                <Link to="/site/contact-us">байланыс беті</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SitePageTerms;
