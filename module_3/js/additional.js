"use strict";

// ===================================== task 1 =============================
/*
  Напишите функцию checkNumberType(num)
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/
const checkNumberType = (num) => {
    if (num % 2 === 0) {
        console.log('Even');
    } else {
        console.log('Odd');
    }
}
// Вызовы функции для проверки
console.log(checkNumberType(2)); // 'Even'

console.log(checkNumberType(46)); // 'Even'

console.log(checkNumberType(3)); // 'Odd'

console.log(checkNumberType(17)); // 'Odd'
// в консоль выводится нужное значение 
//и результат возврата функции "undefined"??? Какого??
// http://prntscr.com/jv863m

// ===================================== task 2 =============================
console.log('==== task 2 ====');
/*
  Напишите функцию formatString(str)
  
  - Функия принимает на вход строку str
  - Если длина строки не превышает 20 символов, функция возвращает ее. 
  - Если длина больше 20 символов, то функция обрезает строку до 20-ти
    символов и добавляет в конец строки троеточие '...', после чего 
    возвращает укороченную версию.
*/
const limitLenth = +(prompt('Введите число символов, до которого следует обрезать строку'));
const inputString = prompt('Введите строку произвольной длины');
const formatString = (str) =>{
    if(str.length <= limitLenth){
        console.log(str);
    }else{
        let strArr  = str.split('');
        let strShertArr = strArr.slice(0,limitLenth);
        strShertArr.push('...');
        console.log(strShertArr.join(''));
    }
};
// Вызовы функции для проверки
console.log( formatString('Latest technology') ); // false

console.log( formatString('JavaScript weekly newsletter') ); // false

console.log( formatString('Get best sale offers now!') ); // true

console.log( formatString('[SPAM] How to earn fast money?') ); // true

console.log( formatString(inputString) ); // true

// ===================================== task 3 =============================
console.log('==== task 3 ====');

/*
  Напишите функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/
const checkForSpam = (str) => {
    str = str.toLowerCase(); // a вот тут переписалась переменная?
    if (str.includes('spam') || str.includes('sale')) {
        return true;
    } else {
        return false;
    }
};
// Вызовы функции для проверки
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true



// ===================================== task 4 =============================
console.log('==== task 4 ====');

/*  
  Написать функцию, getPx(str) 

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да, 
  возвращать только числовую составляющую, к примеру 10.
    
  Если была передана не строка, функция возвращает null.
*/

const getPx = (str) => {
    if (typeof str === 'string') {
        let srtNum = parseFloat(str); // Почему у меня не получилось 
        //перезаписать переменную str -- 
        //Это свойство параметров такое???
        return srtNum;
    } else {
        return false
    }
};

// Вызовы функции для проверки
console.log(getPx("10px") === 10); // должно быть:  true
console.log(getPx("10.5") === 10.5); // должно быть:  true
console.log(getPx("0") === 0); // должно быть:  true
console.log(getPx(-1)); // должно быть:  null
console.log(getPx(10)); // должно быть:  null

// ===================================== task 5 =============================
console.log('==== task 5 ====');

/*  
  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы
  и символы букв и цифр!
*/

const findLongestWord = (str) => {
    const strArray = str.split(' ');
    let maxLength = 0;
    let longestItem;
    for (let i = 0; i < strArray.length; i += 1) {
        let itemLenth = strArray[i].length;
        if (maxLength < strArray[i].length) {
            maxLength = strArray[i].length;
            longestItem = strArray[i];
        }
    }
    return longestItem;
}

// Вызовы функции для проверки
console.log(
    findLongestWord("The quick brown fox jumped over the lazy dog")
); // вернет 'jumped'

console.log(
    findLongestWord("Google do a roll")
); // вернет 'Google'

console.log(
    findLongestWord("May the force be with you")
); // вернет 'force'



// ===================================== task 6 =============================
console.log('==== task 6 ====');

/*  
  Создайте функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/

const findLargestNumber = (numbers) => Math.max(...numbers);

// Вызовы функции для проверки
console.log(
    findLargestNumber([1, 2, 3])
); // вернет 3

console.log(
    findLargestNumber([27, 12, 18, 5])
); // вернет 27

console.log(
    findLargestNumber([31, 128, 14, 74])
); // вернет 128

// ===================================== task 7 =============================
console.log('==== task 7 ====');

/*  
  Есть массив уникальных чисел uniqueNumbers.
  
  Написать функцию, addUniqueNumbers(...), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/
/* 1. псевдомассив аргументс преобразовать в массив
  2. при помощи цикла перебрать все елементы массива аргументс
  3. проверить каждый элемент входит ли он в исходный массив
  4. если не входит - пушим в массив
*/
const uniqueNumbers = [2, 1, 4, 9];
const addUniqNumbers = (...args) => {
    for (let item of args) {
        if (uniqueNumbers.includes(item) === false) {
            uniqueNumbers.push(item);
        }
    }
}
// Вызовы функции для проверки
addUniqNumbers(1, 2, 3);
console.log(
    uniqueNumbers
); // [2, 1, 4, 9, 3]

addUniqNumbers(12, 2, 3, 19);
console.log(
    uniqueNumbers
); // [2, 1, 4, 9, 3, 12, 19]

addUniqNumbers(4, 5, 12, 3, 1, 2, 8);
console.log(
    uniqueNumbers
); // [2, 1, 4, 9, 3, 12, 19, 5, 8]

// ===================================== task 8 =============================
console.log('==== task 8 ====');

/*
  Создайте функцию removeFromArray(arr), 
  которая получает 1 параметр, исходный массив arr.
  
  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел. 
  
  Удалите все элементы из исходного массива, 
  которые имеют такое же значение, что и аргументы.
*/
const removeFromArray = (arr, ...args) => {
    for (let item of args) {
        if (arr.includes(item)) {
            arr.splice((arr.indexOf(item)), 1);
        }
    }
    return arr;
}
// Вызовы функции для проверки
console.log(
    removeFromArray([1, 2, 3, 4, 5], 2, 4)
); // [1, 3, 5]

console.log(
    removeFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
); // [12, 8, 17]
