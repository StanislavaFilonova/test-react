import React from 'react';
import './List.css';
import '../Main/Main.css'

function List () {
    return(
        <section className="list section">
            <h3 className="list__title">4 приложения</h3>
            <ul className="list__table">
                <li className="list__item">Калькулятор</li>
                <li className="list__item">Морской бой</li>
                <li className="list__item">Змейка</li>
                <li className="list__item">Лабиринт</li>
            </ul>
        </section>
    );
}

export default List;
