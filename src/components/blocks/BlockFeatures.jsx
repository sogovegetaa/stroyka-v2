// react
import React from 'react';

// third-party
import PropTypes from 'prop-types';

// application
import {
    ManuFactureSvg,
    LightBulbSvg,
    CalendarSvg,
} from '../../svg';


export default function BlockFeatures(props) {
    const { layout } = props;

    return (
        <div className={`block block-features block-features--layout--${layout}`}>
            <div className="container">
                <div className="block-features__list">
                    <div className="block-features__item">
                        <div className="block-features__icon">
                            <ManuFactureSvg />
                        </div>
                        <div className="block-features__content">
                            <div className="block-features__title">Фурниссерлер</div>
                            <div className="block-features__subtitle">Ғимараттағы барлық жеткізушілердің толық каталогын қараңыз.</div>
                        </div>
                    </div>
                    <div className="block-features__divider" />
                    <div className="block-features__item">
                        <div className="block-features__icon">
                            <LightBulbSvg />
                        </div>
                        <div className="block-features__content">
                            <div className="block-features__title">Шабыт</div>
                            <div className="block-features__subtitle">Декор идеялары туралы көбірек білу үшін біздің "Шабыт" айдарын қараңыз.</div>
                        </div>
                    </div>
                    <div className="block-features__divider" />
                    <div className="block-features__item">
                        <div className="block-features__icon">
                            <CalendarSvg />
                        </div>
                        <div className="block-features__content">
                            <div className="block-features__title">Оқиға</div>
                            <div className="block-features__subtitle">Жәрмеңкелер, іс-шаралар, өнімдерді іске қосу байланыста болыңыз.</div>
                        </div>
                    </div>
               
                </div>
            </div>
        </div>
    );
}

BlockFeatures.propTypes = {
    layout: PropTypes.oneOf(['classic', 'boxed']),
};

BlockFeatures.defaultProps = {
    layout: 'classic',
};
