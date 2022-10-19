import React from 'react';
import { Link } from 'react-router-dom';

import './List.css';
import '../Main/Main.css'
import calc from "../../images/calculator.svg";
import snake from "../../images/snake.svg";
import lab from "../../images/labirint.svg";
import ship from "../../images/ship.svg";

function List () {
    return(
        <section className="list section">
            <h3 className="list__title">4 приложения</h3>
            <ul className="list__table">
                <li className="list__item">
                    <Link to="/calculator-game">
                        <img
                            src={calc}
                            className="list__logo"
                            alt="калькулятор"
                        />
                    </Link>
                    Калькулятор
                </li>
                <li className="list__item">
                    <Link to="/sea-fight">
                        <img
                            src={ship}
                            className="list__logo"
                            alt="корабль"
                        />
                    </Link>
                    Морской бой
                </li>
                <li className="list__item">
                    <Link to="/snake-game">
                        <img
                            src={snake}
                            className="list__logo"
                            alt="змейка"
                        />
                    </Link>
                    Змейка
                </li>
                <li className="list__item">
                    <Link to="/maze-game">
                        <img
                            src={lab}
                            className="list__logo"
                            alt="лабиринт"
                        />
                    </Link>
                    Лабиринт
                </li>
            </ul>
        </section>
    );
}

export default List;
