//import React from 'react';

class Math {
    // Функция суммы чисел
    doSum(a, b) {
        const c = parseInt(a) + parseInt(b);

        return c;
    }

    // Функция вычитания чисел
    doMin(a, b) {
        const c = parseInt(a) - parseInt(b);

        return c;
    }

    // Функция деления чисел
    doDev(a, b) {
        const c = parseInt(a) / parseInt(b);

        return c;
    }

    // Функция умножения чисел
    doMult(a, b) {
        const c = parseInt(a) * parseInt(b);
        
        return c;
    }
}

const math = new Math({}); // Почему надо было создавать экземпляр?
// Без него была ошибка: _Math__WEBPACK_IMPORTED_MODULE_2__.default.sum is not a function
export default math;
