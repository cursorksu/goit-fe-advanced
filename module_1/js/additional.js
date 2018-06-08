"use strict";

// ===================================== task 1 =============================
/*
  - Объявите две переменные: guest и name
  - В переменную name запишите строку 'Mango'
  - Скопируйте значение из name в guest
  - Выведите в консоли значение переменной guest (должно вывести 'Mango')
*/
console.log('==== task 1 ====');

let guest;
const name = 'Mango';
guest = name;
console.log(guest);


// ===================================== task 2 =============================
console.log('==== task 2 ====');
/*
  Есть три переменные содержащие день, месяц, и год.
  Необходимо получить строку день\месяц\год
  в формате xx\xx\xxxx

  Найдите ошибку в записи значания для переменной date,
  результат будет выведен в консоль и равен комментарию
  напротив console.log()
*/

const day = 2;
const month = 10;
const year = 2017;

const date = `0${day}\\${month}\\${year}`;
const dateCorrect = '0' + day + "\\" + month + "\\" + year;
console.log(`Дата записана с использованием Интерполяции: ${date}`); // 02\10\2017
console.log(`Исправленная дата: ${dateCorrect}`); // 02\10\2017

// ===================================== task 3 =============================
console.log('==== task 3 ====');
/*
  Напишите скрипт который:
  - при загрузке страницы спрашивает имя пользователя (используйте prompt)
  - после того как было введено имя показывает alert с тем что ввели в prompt
*/
const userName = prompt(`Input name`);
alert(userName);

// ===================================== task 4 =============================
console.log('==== task 4 ====');

/*
  Есть две переменные name и date, roomType, содержащие
  имя гостя, дату его прибытия на отдых и тип комнаты отеля.

  Используя шаблонные строки необходимо записать
  в перменную message сообщение формата:
  "имя гостя" прибывает на отдых "дата прибытия" в "тип комнаты".

  Найти ошибки в коде и исправить их, при верном решении
  в консоль будет выведена строка идентичная той что
  напротив console.log
*/


const guestName = 'Mango';
const dateComin = '14/08/2031';
const roomType = 'люкс';

const message = `${guestName} прибывает на отдых ${dateComin} в ${roomType}.`;

console.log(message); // Mango прибывает на отдых 14/08/2031 в люкс.

// ===================================== task 5 =============================
console.log('==== task 5 ====');

/*
  Есть 3 переменные в которых хранится  размер составляющих
  блочной модели в формате Npx, где N это целое число.

  Используя эти переменные, запишите в переменную totalWidth
  общую ширину блока в формате Npx.

  К примеру "сумма" '20px' и '30px' будет равна '50px'.

  Если все верно, то в консоли будет выведена строка '125px'
*/

const padding = "20px";
const border = "5px";
const contentWidth = "100px";

let totalWidth;
totalWidth = parseInt(padding) + parseInt(border) + parseInt(contentWidth);
console.log(totalWidth); // '125px'


// ===================================== task 6 =============================
console.log('==== task 6 ====');

/*
  Напишите скрипт который:

  - Через prompt cпрашивает 'Какой сейчас год?'
  - Если посетитель вводит 2018 - показывать alert со строкой 'Все верно!'
  - Если что-то другое — показывать alert 'Но ведь на вдоре 2018!'

  PS: используйте конструкцию if..else.
*/

let yearNow = prompt('Какой сейчас год?');
    yearNow = Number(yearNow);
if(yearNow === 2018){
    alert(`Все верно!`);
}
else {
    alert(`Но ведь на вдоре 2018!`);
}


// ===================================== task 7 =============================
console.log('==== task 7 ====');

/*
  Напишите скрипт который:

  - Через prompt cпрашивает 'Введите произвольное целое число'
  - Если пользователь нажал Cancel - показывать alert 'Приходите еще!'
  - Если посетитель вводит целое число - показывать alert со строкой 'Спасибо!'
  - Если посетитель вводит что либо другое — показывать alert 'Необходимо было ввести целое число!'

  PS: используйте конструкцию if..else.
*/

let anyNumber = prompt('Введите произвольное целое число?');
let isFloatElement = anyNumber.indexOf('.') < 0;

if(anyNumber !== null) {                                // если не нажали отмену
    anyNumber = Number(anyNumber);                      // преобразуй к числу то что ввели

    if(!isNaN(anyNumber) && isFloatElement) {           // если тип - число и не содержит запятой
        alert(`Спасибо!`);                              // благодарит
    }else if (isNaN(anyNumber)) {
        alert(`Необходимо было ввести число!`);         // ругается
    }else{
        alert(`Необходимо было ввести целое число!`);   // ругается
    }

} else{                                                 // при отмене -  прощается
    alert(`Приходите еще!`);
}


// ===================================== task 8 =============================
console.log('==== task 8 ====');
/*
  В переменную num записывается случайное число.

  Используя ветвления запишите в переменную type строку:
    - "even" если num четное
    - "odd" если num не четное

  PS: попробуйте использовать тернарный оператор
*/

const num = Number.parseInt(Math.random() * 100);

let type;

type = (num%2 === 0)?'even':'odd';

console.log(`${num} is ${type}`);


// ===================================== task 9 =============================
console.log('==== task 9 ====');

/*
  Время состоит из:
    часов(hours)
    минут (minutes)
    секунд(seconds).

  Время должно всегда выводиться в формате xx:xx:xx
  Например: 01:12:04 или 14:03:45

  Составляющие времени не гарантированно состоят из 2-х цифр!

  Напишите скрипт который проверяет каждую составляющую,
  тоесть значения переменных hours, minutes, seconds
  и добавлят впереди 0 если необходимо.
*/

let hours = 7;
let minutes = 3;
let seconds = 42;

if(String(hours).length < 2){
    hours = '0' + hours

}
if(String(minutes).length < 2){
    minutes = '0' + minutes
}
if(String(seconds).length < 2){
    seconds = '0' + seconds
}
const time = `${hours}:${minutes}:${seconds}`;

console.log('Time is: ', time);

// ===================================== task 10 =============================
console.log('==== task 10 ====');

/*
  Создайте срипт поиска отелей, где пользователь
  с помощью prompt должен ввести число от 1 до 5

  Проверить что пользователь ввел именно цифру от 1 до 5

  Если пользователь нажал Cancel, то вывести
  alert с текстом 'очень жаль, приходите еще!'

  Если было введено что либо кроме чисел 1-5,
  вывести alert с текстом 'Неверный ввод, возможные варианты 1-5!'

  Если же пользовател ввел валидное число,
  в зависимости от числа, используя switch,
  вывести alert с одной из строк:

    1 - "Каталог хостелов"
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
*/
let hotel = prompt(`Введите число от одного до пяти`);
if(hotel !== null) {
    let isHotelFloatElement = hotel.indexOf('.') < 0;
    hotel = Number(hotel);

    if(isHotelFloatElement && !isNaN(hotel)) {
        if (1 <= hotel <= 5) {
            switch (hotel) {
                case 1:// if (x === 'value1')
                    alert(` 1 - "Каталог хостелов"`);
                    break;
                case 2:// if (x === 'value2')
                    alert(`2 - "Каталог бюджетных отелей"`);
                    break;
                case 3:// if (x === 'value3')
                    alert(`3 - "Каталог отелей ***"`);
                    break;
                case 4:// if (x === 'value4')
                    alert(`4 - "Каталог отелей ****"`);
                    break;
                case 5:// if (x === 'value5')
                    alert(`5 - "Каталог лучших отелей"`);
            }
        } else {
            alert(`Необходимо было ввести число oт 1 до 5!`);
        }
    }else {
        alert(`Необходимо было ввести целое число oт 1 до 5 без буквенных значений!`);
    }
}
else{
    alert(`Очень жаль, приходите еще!`);
}

// let sharmGroupFreePlaces = 15,
//     hurgadaGroupFreePlaces = 25,
//     tabaGroupFreePlaces = 6,
//     numberReserved = prompt('Введите количество мест, которое вы хотите забронировать.');
//
// if(numberReserved > 0 && parseInt(numberReserved) == numberReserved){
//     if(numberReserved <= 6) {
//         let isReady = confirm("Вы готовы лететь с  группой Taba?");
//         if(isReady){
//             alert("Приятного путешесвия в группе Taba!");
//             tabaGroupFreePlaces = tabaGroupFreePlaces - numberReserved;
//             console.log("В группе Taba осталось " + tabaGroupFreePlaces + " мест");
//         }
//         else {
//             alert("Нам очень жаль! Приходите еще.");
//         }
//     }else if (numberReserved <= 15) {
//         let isReady = confirm("Вы готовы лететь с  группой Sharm?");
//         if(isReady){
//             alert("Приятного путешесвия в группе Sharm!");
//             sharmGroupFreePlaces = sharmGroupFreePlaces - numberReserved;
//             console.log("В группе Shatm осталось " + sharmGroupFreePlaces + " мест");
//         }
//         else {
//             alert("Нам очень жаль! Приходите еще.");
//         }
//     }else if (numberReserved <= 25) {
//         let isReady = confirm("Вы готовы лететь с  группой Hurgada?");
//         if(isReady){
//             alert("Приятного путешесвия в группе Hurgada!");
//             hurgadaGroupFreePlaces = hurgadaGroupFreePlaces - numberReserved;
//             console.log("В группе Hurgada осталось " + hurgadaGroupFreePlaces + " мест");
//         }
//         else {
//             alert("Нам очень жаль! Приходите еще.");
//         }
//
//     }else {
//         alert('Извините, такого количества мест нет.');
//     }
// }
// else {
//     alert("Oшибка ввода!");
// }

// Tusk 3

// let inLowerCase = prompt('input a message').toLowerCase();
// let inUpperCase = prompt('input a message').toUpperCase();
//
// console.log(inLowerCase);
// console.log(inUpperCase);

// Tusk 4
//
// const name = 'Mango';
// const typingSpeed = 50;
//
// const message = `${name} печатает со скоростью ${typingSpeed} знаков в минуту.`;
//
// console.log(message); // Mango печатает со скоростью 50 знаков в минуту.
//
// Tusk 5

// const padding = parseInt("20px");
// const border = parseInt("5px");
// const contentWidth = parseInt("100px");
//
// let totalWidth = `${padding + border + contentWidth}px`;
//
// console.log(totalWidth); // '125px'

// Tusk 6

// let padding = parseFloat('20.25px') ;
// let border = parseFloat('5.15px');
// let contentWidth = parseFloat('100.45px');
//
//
// let totalWidth = `${(padding*100 + border*100 + contentWidth*100)/100}px`;
//
// console.log(totalWidth); // '125.85px'

// tusk 7

// let winner;
//
// winner = Math.round(Math.random()*(100-1)+100);
// console.log(`Победитель является обладателем номера ${winner}!`);
