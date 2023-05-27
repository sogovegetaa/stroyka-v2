// react
import React from 'react';


function WidgetNewsletter() {
    return (
        <div className="widget-newsletter widget">
            <h4 className="widget-newsletter__title">Біздің Бюллетень</h4>
            <div className="widget-newsletter__text">
            Сізге қоғамдық, бизнес және технологиялардың соңғы жаңалықтары мен тенденциялары туралы білім алуға дайындаймыз. Біздің бюллетеніміз арқылы Сіз деңгейді жаңалықтар, эксперттік көзқарастар және ғылыми дамулар бойынша ақпараттар аласыз.
            </div>
            <form className="widget-newsletter__form" action="">
                <label htmlFor="widget-newsletter-email" className="sr-only">Электрондық пошта</label>
                <input id="widget-newsletter-email" type="text" className="form-control" placeholder="Электрондық пошта" />
                <button type="submit" className="btn btn-primary mt-3">Жазылу</button>
            </form>
        </div>
    );
}

export default WidgetNewsletter;
