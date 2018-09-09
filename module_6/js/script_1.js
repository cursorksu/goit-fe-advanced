"use strict";
class Hamburger {
  constructor(size, stuffing) {
    this._size = size;
    this._stuffing = stuffing;
    this._toppings = [];
  }

  addTopping(topping) {
    if(this._toppings.includes(topping) === false){
      this._toppings.push(topping);
    }
  }

  removeTopping(topping) {
    if(this._toppings.includes(topping)){
        const position = this._toppings.indexOf(topping);
        this._toppings.splice(position, 1);
      }
      console.log (topping);
      console.log (this._toppings);
  }

  get Toppings() {
    return this._toppings
  }


  get Size() {
    return this._size
    console.log(this._size)
  }

  get Stuffing() {
    return this._stuffing
  }


  calculatePrice() {
    let toppingPrice = 0;
    const toppingsArr = this._toppings;
    const arr = Object.entries(Hamburger.TOPPINGS);
   
    for(let j in toppingsArr){
        for(let i in arr){
            if(arr[i][0] === (toppingsArr[j])){
                toppingPrice = toppingPrice + arr[i][1].price
            }
        }
    }

    const arrOrder = [Hamburger.SIZES[this._size], Hamburger.STUFFINGS[this._stuffing]];
    let sumPrice = arrOrder.reduce((acc, obj) => acc + obj.price, 0) + toppingPrice;
      
    return sumPrice
  }

  calculateCalories() {
    let toppingCal = 0;
    const toppingsArr = this._toppings;
    const arr = Object.entries(Hamburger.TOPPINGS);
   
    for(let j in toppingsArr){
        for(let i in arr){
            if(arr[i][0] === (toppingsArr[j])){
                toppingCal = toppingCal + arr[i][1].calories;
            }
        }
    }
    const arrOrder = [Hamburger.SIZES[this._size], Hamburger.STUFFINGS[this._stuffing]];
    let sumCal = arrOrder.reduce((acc, obj) => acc + obj.calories, 0) + toppingCal;
      
    return sumCal

  }
}

Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';

Hamburger.SIZES = {
  [Hamburger.SIZE_SMALL]: {
    price: 30,
    calories: 50,
  },
  [Hamburger.SIZE_LARGE]: {
    price: 50,
    calories: 100,
  }
};

Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';

Hamburger.STUFFINGS = {
  [Hamburger.STUFFING_CHEESE]: {
    price: 15,
    calories: 20,
  },
  [Hamburger.STUFFING_SALAD]: {
      price: 20,
      calories: 5,
  },
  [Hamburger.STUFFING_MEAT]: {
      price: 35,
      calories: 15,
  }
};

Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';

Hamburger.TOPPINGS = {
  [Hamburger.TOPPING_SPICE]: {
    price: 10,
    calories: 0,
  },
  [Hamburger.TOPPING_SAUCE]: {
    price: 15,
    calories: 5,
  }
};

const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// Добавка из приправы
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// Спросим сколько там калорий
console.log("Calories: ", hamburger.calculateCalories());

// Сколько стоит?
console.log("Price: ", hamburger.calculatePrice());

// Я тут передумал и решил добавить еще соус
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// А сколько теперь стоит?
console.log("Price with sauce: ", hamburger.calculatePrice());

// Проверить, большой ли гамбургер?
console.log("Is hamburger large: ", hamburger.Size === Hamburger.SIZE_LARGE); // -> false

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);

// Смотрим сколько добавок
console.log("Hamburger has %d toppings", hamburger.Toppings.length); // 1

