import React, { useState } from "react";
import math from "./Math";
import Header from './Header/Header';
import Main from './Main/Main';

//-----------------------------------------------------------------------------------------------------------------------

function App(props) {
    // Используем хук useState, чтобы управлять состоянием переменной и потом пользоваться ей при отрисовке данных.
    // Первоначально значение переменной (зд. суммы) равно 0.

    const [count, setCount] = useState(0);
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);

    //-----------------------------------------------------------------------------------------------------------------------

    // Установка инпуту числа, введенного пользователем
    function handleChangeFirstNumber(evt) {
        setFirst(evt.target.value);
    }

    // Установка инпуту числа, введенного пользователем
    function handleChangeSecondNumber(evt) {
        setSecond(evt.target.value);
    }

    //-----------------------------------------------------------------------------------------------------------------------

    // Настраиваем первоначальное значение у инпутов. Здесь они пустые.
    React.useEffect(() => {
        setFirst("");
        setSecond("");
    }, []);

    //-----------------------------------------------------------------------------------------------------------------------

    // Функция расчета суммы, не забываем отключить обновление формы после нажатия на кнопку
    function countSum(evt) {
        evt.preventDefault();

        const s = math.doSum(first, second);
        setCount(s);
    }

    // Функция расчета вычитания, не забываем отключить обновление формы после нажатия на кнопку
    function countMin(evt) {
        evt.preventDefault();

        const s = math.doMin(first, second);
        setCount(s);
    }

    // Функция расчета деления, не забываем отключить обновление формы после нажатия на кнопку
    function countDev(evt) {
        evt.preventDefault();

        const s = math.doDev(first, second);
        setCount(s);
    }

    // Функция расчета умножения, не забываем отключить обновление формы после нажатия на кнопку
    function countMult(evt) {
        evt.preventDefault();

        const s = math.doMult(first, second);
        setCount(s);
    }

    // Функция очистки инпутов
    function resertInputs(evt) {
        evt.preventDefault();
        setCount("");
        setFirst("");
        setSecond("");
    }

    //-----------------------------------------------------------------------------------------------------------------------

    // Отрисовка
    return (
        <div className="page">
            <Header/>
            <Main/>
            <form className="calculator">
                <div className="calculator__inputs">
                    <input
                        className="calculator__input"
                        type="number"
                        value={first}
                        onChange={handleChangeFirstNumber}
                    >
                        {props.first}
                    </input>
                    <input
                        className="calculator__input"
                        type="number"
                        value={second}
                        onChange={handleChangeSecondNumber}
                    >
                        {props.second}
                    </input>
                </div>
                <div className="calculator__result">
                    <span className="calculator__input_result" type="number">
                        {" "}
                        {count}
                    </span>
                </div>
                <div className="calculator__resert">
                    <button
                        className="calculator__button"
                        onClick={resertInputs}
                    >
                        c
                    </button>
                </div>
                <div className="calculator__inputs">
                    <button className="calculator__button" onClick={countSum}>
                        +
                    </button>
                    <button className="calculator__button" onClick={countMin}>
                        -
                    </button>
                    <button className="calculator__button" onClick={countDev}>
                        /
                    </button>
                    <button className="calculator__button" onClick={countMult}>
                        *
                    </button>
                </div>
            </form>
        </div>
    );
}

export default App;
