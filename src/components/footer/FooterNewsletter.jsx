// react
import React from "react";

// data stubs
import theme from "../../data/theme";

export default function FooterNewsletter() {
  const socialLinks = [
    {
      key: "facebook",
      url: theme.author.profile_url,
      iconClass: "fab fa-facebook-f",
    },
    {
      key: "twitter",
      url: theme.author.profile_url,
      iconClass: "fab fa-twitter",
    },
    {
      key: "youtube",
      url: theme.author.profile_url,
      iconClass: "fab fa-youtube",
    },
    {
      key: "instagram",
      url: theme.author.profile_url,
      iconClass: "fab fa-instagram",
    },
    {
      key: "rss",
      url: theme.author.profile_url,
      iconClass: "fas fa-rss",
    },
  ];

  const socialLinksList = socialLinks.map((item) => (
    <li
      key={item.key}
      className={`footer-newsletter__social-link footer-newsletter__social-link--${item.key}`}
    >
      <a href={item.url} target="_blank" rel="noopener noreferrer">
        <i className={item.iconClass} />
      </a>
    </li>
  ));

  return (
    <div className="site-footer__widget footer-newsletter">
      <h5 className="footer-newsletter__title">Бюллетень</h5>
      <div className="footer-newsletter__text">
        Сізге басқа сұрауларды жауап беру үшін менімді хабарласа аласыз.
      </div>

      <form action="" className="footer-newsletter__form">
        <label className="sr-only" htmlFor="footer-newsletter-address">
          Электрондық пошта
        </label>
        <input
          type="text"
          className="footer-newsletter__form-input form-control"
          id="footer-newsletter-address"
          placeholder="Электрондық пошта..."
        />
        <button
          type="submit"
          className="footer-newsletter__form-button btn btn-primary"
        >
          Жазылу
        </button>
      </form>

      <div className="footer-newsletter__text footer-newsletter__text--social">
        Бізді әлеуметтік желілерде бақылаңыз
      </div>

      <ul className="footer-newsletter__social-links">{socialLinksList}</ul>
    </div>
  );
}
