// react
import React from "react";

// third-party
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

// application
import SlickWithPreventSwipeClick from "../shared/SlickWithPreventSwipeClick";

// data stubs
import theme from "../../data/theme";

const slickSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 400,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 379,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function SitePageAboutUs() {
  return (
    <div className="block about-us">
      <Helmet>
        <title>{`Біз туралы — ${theme.name}`}</title>
      </Helmet>

      <div
        className="about-us__image"
        style={{ backgroundImage: 'url("images/aboutus.jpg")' }}
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="about-us__body">
              <h1 className="about-us__title">Біз туралы</h1>
              <div className="about-us__text typography">
                <p>
                  Біз құрылыс материалдар мамандығында маман болған
                  профессионалдар тобымыз. Біздің мақсатымыз - жоғары сапалы
                  тауарлар ұсыну және клиенттеріміздің талаптарын көрсету.
                </p>
                <p>
                  Біздің тәжірибеміз мен анықтамаларымыздан біз мақтанамыз, олар
                  бізге клиенттеріміздің міндеттерін ефективті түрде шешу
                  мүмкіндігін береді.
                </p>
              </div>
              <div className="about-us__team">
                <h2 className="about-us__team-title">Біздің команданың еті</h2>
                <div className="about-us__team-subtitle text-muted">
                  Біздің тату командада жұмыс істегіңіз келе ме?
                  <br />
                  <Link to="/site/contact-us">Бізбен хабарласыңыз</Link> біз
                  сіздің кандидатураңызды қарастырамыз.
                </div>
                <div className="about-us__teammates teammates">
                  <SlickWithPreventSwipeClick {...slickSettings}>
                    <div className="teammates__item teammate">
                      <div className="teammate__avatar">
                        <img src="images/teammates/teammate-1.jpg" alt="" />
                      </div>
                      <div className="teammate__name">Майкл Руссо</div>
                      <div className="teammate__position text-muted">
                        Атқарушы директор
                      </div>
                    </div>
                    <div className="teammates__item teammate">
                      <div className="teammate__avatar">
                        <img src="images/teammates/teammate-2.jpg" alt="" />
                      </div>
                      <div className="teammate__name">Кэтрин Миллер</div>
                      <div className="teammate__position text-muted">
                        Маркетинг маманы
                      </div>
                    </div>
                    <div className="teammates__item teammate">
                      <div className="teammate__avatar">
                        <img src="images/teammates/teammate-3.jpg" alt="" />
                      </div>
                      <div className="teammate__name">Энтони Харрис</div>
                      <div className="teammate__position text-muted">
                        Қаржы директоры
                      </div>
                    </div>
                  </SlickWithPreventSwipeClick>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SitePageAboutUs;
