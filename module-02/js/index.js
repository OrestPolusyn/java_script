'use strict';

let userInput;
const numbers = [];
let total = 0;

do {
  userInput = prompt('Введіть число!');
  if (+(userInput) === Number(userInput)) {
    numbers.push(Number(userInput));
  } else {
    alert('Было введено не число, попробуйте еще раз');
  }
} while (userInput !== null);

for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}
alert('Общая сумма чисел равна ' + total);

