// import React, { useState } from "react";

import './Calculator.css';

function Calculator () {
    return (
    <div class="calculator-grid">
            <div class="output">
                {/* Отображение ранее введенных цифр */}
                <div class="previous-operand"></div>
                {/* Отображение последней введенной цифры */}
                <div class="current-operand"></div>
            </div>
            {/* Отображение кнопок калькулятора */}
            <button>AC</button>
            <button>+/-</button>
            <button>%</button>
            <button>÷</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>×️</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>+</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>-</button>
            <button>.</button>
            <button class="span-two">0</button>
            <button>=</button>
    </div>
)
};

export default Calculator;
