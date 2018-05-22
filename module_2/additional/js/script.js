"use strict";
// task 1
// const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];
//
// console.log(users.length); // 4
//
// console.log(users[1]); // Poly
// console.log(users[3]); // Chelsey
// console.log(users[0]); // Mango
// console.log(users[2]); // Ajax

// task 2
/*
  Есть массив имен пользователей.
  Используя методы массива выполнить следующие операции.
*/

// const users = ["Mango", "Poly", "Ajax", "Chelsey"];

// Удалить из начала массива нулевой элемент и вывести в консоль результат.
// users.splice(0,1);
// console.log(users); // ["Poly", "Ajax", "Chelsey"]

// // Удалить из конца массив последний элемент и вывести в консоль результат.
// let usersNew = users.slice(1,3);
// console.log(usersNew); // ["Poly", "Ajax"]
//
// // Добавить в начало массива любое имя
// users.splice(0,0,'добавленное имя');
// console.log(users); // ["добавленое имя", "Poly", "Ajax"]
//
// // Добавить в конец массива два любых имени за одну операцию
// users.push("имя 1", "имя 2");
// console.log(users); //  ["добавленое ранее имя", "Poly", "Ajax", "имя 1", "имя 2"]
//
//
// let string = "Mather clining window",
//     arr = string.split(' ');
//
// // Составить массив из строки и записать в переменную arr
// console.log(arr);
// // Вывести в консоли общую длину массива arr
// console.log(arr.length);
// // Используя цикл, вывести в консоль все индексы массива arr
// for(var i = 0; i < arr.length; i += 1){
//     console.log(i);
// }
//
// // Используя цикл, вывести в консоль все элементы массива arr
// for(var i = 0; i < arr.length; i += 1){
//     console.log(arr[i]);
// }
//
// // Используя цикл, bывести в консоли все пары индекс:значение массива arr
//
// for(var i = 0; i < arr.length; i += 1) {
//     let index = i,
//     name = arr[i];
//     console.log(`${index} : ${name}`);
// }

// task 4
/*
//   Создайте игру угадай число.
//   Есть массив чисел numbers, содержащий "верные" числа.
//
//   Числа в массиве всегда идут по возрастанию,
//   1-5, 20-40, 2-100 и т.п.
//
//   Просим пользователя ввести цифру от самого маленького,
//   до самого большого элемента массива. Пусть prompt говорит
//   "Введите цифру между x и y", где x и y соотвественно самый
//   маленький и самый большой элемент массива.
//   */
//   const numbers = [12, 15, 25, 37, 41, 85, 92, 132, 179, 200, 4, 111];
//   let inputNumber = prompt('Введите число от 1 до 200');
//   inputNumber = Number(inputNumber);
//   let isNumber = typeof (inputNumber) === 'number';
//   // let isNumber = typeof (inputNumber) === Number;
//   console.log(`${inputNumber} : ${typeof inputNumber}`);
// /*
//   Но пользователь может ввести что угодно,
//   необходимо проверить что было введено.
//   Преобразовать input в числовой тип и проверить число ли это.
//   */
// // console.log(isNumber);
//
//     if (isNaN(inputNumber) && isNumber){
//         console.log(`Что  за херню вы ввели?`);
//         alert(`Что  за херню вы ввели?`)
//     }
//     else {
//         console.log(`Это идиотское число ${inputNumber}`);
//         if(numbers.includes(inputNumber)){
//             alert("Congratulation!!!")
//
//         }else {
//             alert('So Sorry!!!')
//         }
//
//
//     }

/*
  Если нет - выводим alert с сообщением о том,
  что было введено не число.


  Если да - проверить содержит ли в себе массив numbers это число.

  Если содержит - выводим alert с сообщением
  'Поздравляем, Вы угадали!'.

  Есл не содержит - выводим alert с сообщением
  'Сожалеем, Вы не угадали!'.
*/


// const clients = ['masha','Sasha','Dasha','pasha'];
// const four = clients[2]||'user name';
// console.log(four);