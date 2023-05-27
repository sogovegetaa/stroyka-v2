// react
import React from "react";

// third-party
import classNames from "classnames";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// application
import BlogCommentsList from "./BlogCommentsList";

// data stubs
import comments from "../../data/blogPostComments";
import posts from "../../data/blogPosts";

export default function BlogPost(props) {
  const { layout } = props;

  const postClasses = classNames("post__content typography", {
    "typography--expanded": layout === "full",
  });

  const relatedPostsList = posts.slice(0, 2).map((relatedPost) => (
    <div
      key={relatedPost.id}
      className="related-posts__item post-card post-card--layout--related"
    >
      <div className="post-card__image">
        <Link to="/">
          <img src={relatedPost.image} alt="" />
        </Link>
      </div>
      <div className="post-card__info">
        <div className="post-card__name">
          <Link to="/">{relatedPost.title}</Link>
        </div>
        <div className="post-card__date">{relatedPost.date}</div>
      </div>
    </div>
  ));

  return (
    <div className={`block post post--layout--${layout}`}>
      <div
        className={`post__header post-header post-header--layout--${layout}`}
      >
        <div className="post-header__categories">
          <Link to="/">Соңғы жаңалықтар</Link>
        </div>
        <h1 className="post-header__title">
          Сантехника мәдениетінде инновациялық технологиялар: Ақпаратты тура
          өнім болатын ақпараттық жеткізгілер танымалды
        </h1>
        <div className="post-header__meta">
          <div className="post-header__meta-item">
            Авторы
            <Link to="/">Джессика Мур</Link>
          </div>
          <div className="post-header__meta-item">
            <Link to="/">30 қараша 2023</Link>
          </div>
          <div className="post-header__meta-item">
            <Link to="/">4 пікір</Link>
          </div>
        </div>
      </div>

      <div className="post__featured">
        <Link to="/">
          <img src="images/posts/post-featured.jpg" alt="" />
        </Link>
      </div>

      <div className={postClasses}>
        <p>
          Сантехника мәдениетінде сенсационды төмендеу көрсетілуде: ақпараттық
          жеткізгілер арасында популярлығы жоғары болып табылады. Соңғы уақытта
          сантехниканың құндылықтарын олар бірнеше жаңа және ықшамды функциялар ұсынады. 
        </p>
        <p>
        Ақпараттық жеткізгілер ақпаратты басқару жүйесімен жабдықталған, пайдаланушының талаптарына сәйкес қосымша функцияларды орнатуға мүмкіндік береді. Олар, мисалы, су температурасын, шығындылығын және шығындығын автоматты түрде қолданушының индивидуалды талаптарына сәйкестеу мүмкіндігі бар.
        </p>
        <h3>Қосымша функциялары</h3>
        <p>
        Бірнеше ақпараттық жеткізгілерде жататын: оңтайлы толған өңдегі, өкпеліктің жылынасы, түнгі жарық және музыканы немесе радиоларды құрылған жыртқыштарды айналдыру мүмкіндігі.
        </p>
        <p>
        Бұл сантехникадағы инновациялық шешімдер тек көмек жасау және ықшамдылық беру емес, сондай-ақ қатар су қолдану эффективтілігін арттыру мен энергияның заттарын азайтуға көмек көрсетеді.
        </p>
        <p>
        Ақпараттық жеткізгілер қазіргі туалеттің бөлмесінде ешқандай терең комфортты жане ықшамды емес, бірақ инновацияларды естеп тұруға жататын жағдай болып табылады. Жаңағыларды таңдап жасауға немесе жаңартулармен көмек көрсету үшін бізге хабарласыңыз.
        </p>

        <hr />
        <h2>Сәтті көмек алу үшін сантехниканы жаңарту</h2>
        <p>
        Таңдаулы сантехника құндылықтарын қолданудың ең маңызды аспектілерін білу үшін бізге хабарласыңыз. Біздің көрсететін қызметтер жайында ақпарат алыңыз. Жеткізушілеріміз сізге әртүрлі сантехникалық құралдар, түсірілімдер мен жеткізуші қызметтер туралы дайындық беру үшін қуатты көмек көрсетуі мүмкін. Біз әрқашан сіздердің талаптарыңызды ескерту үшін жұмыс істейміз және сізге қалайсыздық көмек көрсету үшін күтеміз.
        </p>
      </div>

      <div className="post__footer">
        <div className="post__tags-share-links">
          <div className="post__tags tags">
            <div className="tags__list">
              <Link to="/">Жылжыту</Link>
              <Link to="/">Электр құралдары</Link>
              <Link to="/">Кілт</Link>
              <Link to="/">Электродтар</Link>
            </div>
          </div>
          <div className="post__share-links share-links">
            <ul className="share-links__list">
              <li className="share-links__item share-links__item--type--like">
                <Link to="/">Ұнайды</Link>
              </li>
              <li className="share-links__item share-links__item--type--tweet">
                <Link to="/">Tweet</Link>
              </li>
              <li className="share-links__item share-links__item--type--pin">
                <Link to="/">Бекіту</Link>
              </li>
              <li className="share-links__item share-links__item--type--counter">
                <Link to="/">4K</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="post-author">
          <div className="post-author__avatar">
            <Link to="/">
              <img src="images/avatars/avatar-1.jpg" alt="" />
            </Link>
          </div>
          <div className="post-author__info">
            <div className="post-author__name">
              <Link to="/">Джессика Мур</Link>
            </div>
            <div className="post-author__about">
            Өте маңызды жаңалық! Сантехника мәдениетінде соңғы тенденцияларды көруді қалайсыздым. Ақпараттық жеткізгілер - бұл маңызды кез-келгеншілік! Басқару жүйесі мен тапсырмаларды таңдау мүмкіндігі мен маңызды көзқарастырылған функцияларды ұнатамын.
            </div>
          </div>
        </div>
      </div>
      <section className="post__section">
        <h4 className="post__section-title">Ұқсас хабарламалар</h4>
        <div className="related-posts">
          <div className="related-posts__list">{relatedPostsList}</div>
        </div>
      </section>

      <section className="post__section">
        <h4 className="post__section-title">{`Comments (${comments.count})`}</h4>

        <BlogCommentsList comments={comments.items} />
      </section>

      <section className="post__section">
        <h4 className="post__section-title">Пікір жазу</h4>

        <form>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="comment-first-name">Аты - жөні </label>
              <input
                type="text"
                className="form-control"
                id="comment-first-name"
                placeholder="Аты - жөні "
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="comment-last-name">Тегі</label>
              <input
                type="text"
                className="form-control"
                id="comment-last-name"
                placeholder="Тегі"
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="comment-email">Электрондық пошта</label>
              <input
                type="email"
                className="form-control"
                id="comment-email"
                placeholder="Электрондық пошта"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="comment-content">Пікір</label>
            <textarea className="form-control" id="comment-content" rows="6" />
          </div>
          <div className="form-group mt-4">
            <button type="submit" className="btn btn-primary btn-lg">
              Пікір жазу
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

BlogPost.propTypes = {
  /**
   * post layout
   * one of ['classic', 'full'] (default: 'classic')
   */
  layout: PropTypes.oneOf(["classic", "full"]),
};

BlogPost.defaultProps = {
  layout: "classic",
};
