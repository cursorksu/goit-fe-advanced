"use strict";
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