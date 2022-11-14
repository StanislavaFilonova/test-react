// import React, { useState } from "react";

import './Calculator.css';

function Calculator () {
    return (
    <div className="calculator-grid">
            <div className="output">
                {/* Отображение ранее введенных цифр */}
                <div className="previous-operand">123 +</div>
                {/* Отображение последней введенной цифры */}
                <div className="current-operand">456</div>
            </div>
            {/* Отображение кнопок калькулятора */}
            <button className="dark-button">AC</button>
            <button className="dark-button">+/-</button>
            <button className="dark-button">%</button>
            <button className="orange-button">÷</button>
            <button className="simple-button">7</button>
            <button className="simple-button">8</button>
            <button className="simple-button">9</button>
            <button className="orange-button">×️</button>
            <button className="simple-button">4</button>
            <button className="simple-button">5</button>
            <button className="simple-button">6</button>
            <button className="orange-button">+</button>
            <button className="simple-button">1</button>
            <button className="simple-button">2</button>
            <button className="simple-button">3</button>
            <button className="orange-button">-</button>
            <button className="span-two">0</button>
            <button className="simple-button">.</button>
            <button className="orange-button">=</button>
    </div>
)
};

export default Calculator;
