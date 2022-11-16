// import React, { useState } from "react";

import './Calculator.css';

function Calculator () {
    return (
    <div className="calculator-grid">
            <div className="output">
                {/* Отображение ранее введенных цифр */}
                <div className="previous-operand"></div>
                {/* Отображение последней введенной цифры */}
                <div className="current-operand"></div>
            </div>
            {/* Отображение кнопок калькулятора */}
            <button className="dark-button">AC</button>
            <button className="dark-button" onclick="display('+/-')">+/-</button>
            <button className="dark-button" onclick="display('%')">%</button>
            <button className="orange-button" onclick="display('/')">÷</button>
            <button className="simple-button" onclick="display('7')">7</button>
            <button className="simple-button" onclick="display('8')">8</button>
            <button className="simple-button" onclick="display('9')">9</button>
            <button className="orange-button" onclick="display('*')">×️</button>
            <button className="simple-button" onclick="display('4')">4</button>
            <button className="simple-button" onclick="display('5')">5</button>
            <button className="simple-button" onclick="display('6')">6</button>
            <button className="orange-button" onclick="display('+')">+</button>
            <button className="simple-button" onclick="display('1')">1</button>
            <button className="simple-button" onclick="display('2')">2</button>
            <button className="simple-button" onclick="display('3')">3</button>
            <button className="orange-button" onclick="display('-')">-</button>
            <button className="span-two" onclick="display('0')">0</button>
            <button className="simple-button" onclick="display('.')">.</button>
            <button className="orange-button" onclick="displaySolve()">=</button>
    </div>
)
};

export default Calculator;
