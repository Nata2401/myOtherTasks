/*jshint esversion: 9 */
'use strict';
const getRandomInt = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
};

const isNum = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const start = function() {
    let rNumber = getRandomInt(100);
    const game = function() {
        const num = prompt('"Угадай число от 1 до 100"');
        if (num === null) {
            alert('Игра окончена');
            return;
        }
        if (isNum(num)) {
            const realNum = +num;
            if (realNum > rNumber) {
                alert('Загаданное число меньше');
                game();
            } else if (realNum < rNumber) {
                alert('Загаданное число больше');
                game();
            } else {
                if (confirm('Поздравляю, Вы угадали!!!')) {
                    start();
                } else {
                    alert('Пока');
                    return;
                }
            }
        } else {
            alert('Введите число!');
            game();
        }
    };
    game();
};

start();