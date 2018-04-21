"use strict";
let sharmGroupFreePlaces = 15,
    hurgadaGroupFreePlaces = 25,
    tabaGroupFreePlaces = 6,
    numberReserved = prompt('Введите количество мест, которое вы хотите забронировать.');

if(numberReserved > 0 && parseInt(numberReserved) == numberReserved){
    if(numberReserved <= 6) {
        let isReady = confirm("Вы готовы лететь с  группой Taba?");
        if(isReady){
            alert("Приятного путешесвия в группе Taba!");
            tabaGroupFreePlaces = tabaGroupFreePlaces - numberReserved;
            console.log("В группе Taba осталось " + tabaGroupFreePlaces + " мест");
        }
        else {
            alert("Нам очень жаль! Приходите еще.");
        }
    }else if (numberReserved <= 15) {
        let isReady = confirm("Вы готовы лететь с  группой Sharm?");
        if(isReady){
            alert("Приятного путешесвия в группе Sharm!");
            sharmGroupFreePlaces = sharmGroupFreePlaces - numberReserved;
            console.log("В группе Shatm осталось " + sharmGroupFreePlaces + " мест");
        }
        else {
            alert("Нам очень жаль! Приходите еще.");
        }
    }else if (numberReserved <= 25) {
        let isReady = confirm("Вы готовы лететь с  группой Hurgada?");
        if(isReady){
            alert("Приятного путешесвия в группе Hurgada!");
            hurgadaGroupFreePlaces = hurgadaGroupFreePlaces - numberReserved;
            console.log("В группе Hurgada осталось " + hurgadaGroupFreePlaces + " мест");
        }
        else {
            alert("Нам очень жаль! Приходите еще.");
        }

    }else {
        alert('Извините, такого количества мест нет.');
    }
}
else {
    alert("Oшибка ввода!");
}