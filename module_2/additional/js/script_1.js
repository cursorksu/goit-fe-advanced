"use strict";
// task 5
/*
  Напишите скрипт, который выбирает из массива numbers
  все числа, которые больше чем значение переменной num.
  В результате получается новый массив, только с подходящими
  числами.
*/

const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
const num = 10;
const newNumbers = [];
for(let i = 1; i <= numbers.length; i += 1){
    if(numbers[i]>num){
        newNumbers.push(numbers[i]);
    }
}
console.log(newNumbers);

//======================================================
// task 6
/*
  Написать скрипт, который проверяет произвольную строку
  и находит самое длинное слово в строке.
*/

const string = "May the force be with you";

let arrWord = string.split(' ');
let longestWord = arrWord[0].length;
for(let i = 0; i < arrWord.length - 1; i += 1){
    let wordsLength = (arrWord[i].split(''));
    if(arrWord[i + 1].length > longestWord){
        longestWord = arrWord[i + 1]
    }
}
console.log(` longestWord long word "${longestWord}"`); // 'force'


//==========================================================
// task 7

/*
  Напишите цикл, который предлагает, через prompt,
  ввести число, большее 100.

  Если посетитель ввёл другое число –
  попросить ввести ещё раз, и так далее.

  Цикл должен спрашивать число пока либо
  посетитель не введёт число, большее 100,
  либо не нажмёт кнопку Cancel.
*/
// let inputNumber =Number( prompt('input number < 100'));
//
// while ((inputNumber > 0) || (inputNumber !== undefined)){
//     if (inputNumber <= 100){
//         console.log(inputNumber);
//         inputNumber = Number( prompt('input next number'));
//     }else {
//         console.log("Что это за фигня?");
//         break;
//     }
//
// }
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// task 8
/*
  Напишите скрипт который:

  - Запрашивает по очереди числа при помощи prompt
    и сохраняет их в массиве.
  - Заканчивает запрашивать числа, как только посетитель
    введёт пустую строку, не число или нажмёт Cancel.

  - При этом ноль 0 не должен заканчивать ввод,
    это разрешённое число.

  - Выводит сумму всех значений массива.
    "Сумма: <сумма всех значений в массиве>"
*/
let inputNumber =Number( prompt('input number'));
const newArray = [];
let sumArray = 0;
let isNumber = Number(inputNumber)
do{
    if((inputNumber === isNumber)){
        inputNumber = Number( prompt('input next number'));
        newArray.push(inputNumber);
        sumArray = sumArray + inputNumber;
    }else {
        break
    }
}while(inputNumber !== false);
console.log(sumArray);