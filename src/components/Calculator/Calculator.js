// import React, { useState } from "react";

import './Calculator.css';

function Calculator () {
    return (
    <div class="calculator-grid">
            <div class="output">
                <div class="calculator_iphone">
                    {/* Отобразить число на дисплее  */}
                    <div class="calculator_input_display">
                        <textarea></textarea>
                    </div>
                </div>
                <div class="current-operand"></div>
            </div>
            <button class="span-two">AC</button>
            <button>+/-</button>
            <button>%</button>
            <button>÷</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>*</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>+</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>-</button>
            <button>.</button>
            <button>0</button>
            <button class="span-two">=</button>
    </div>
)
};

export default Calculator;
