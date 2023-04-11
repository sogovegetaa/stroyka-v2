// react
import React from 'react';

// third-party
import { Link } from 'react-router-dom';


function WidgetTags() {
    return (
        <div className="widget-tags widget">
            <h4 className="widget__title">Тегтер бұлты</h4>
            <div className="tags tags--lg">
                <div className="tags__list">
                    <Link to="/">Жылжыту</Link>
                    <Link to="/">Электр құралдары</Link>
                    <Link to="/">Жаңа түсімдер</Link>
                    <Link to="/">Бұрағыш</Link>
                    <Link to="/">Кілт</Link>
                    <Link to="/">Монтаждау</Link>
                    <Link to="/">Электродтар</Link>
                    <Link to="/">Шынжырлы аралар</Link>
                    <Link to="/">Манометрлер</Link>
                    <Link to="/">Тырнақтар</Link>
                    <Link to="/">Пневматикалық тапаншалар</Link>
                    <Link to="/">Кесу дискілері</Link>
                </div>
            </div>
        </div>
    );
}

export default WidgetTags;
