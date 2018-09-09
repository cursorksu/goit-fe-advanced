"use strict";
//================== task 1 ===============================
console.log("======= Task 1 ======");
/*
  Создать функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email и friendsCount. 
  
  В prototype функции-конструктора добавить метод getAccountInfo(), 
  который выводит в консоль значения полей login, email и friendsCount. 
  
  Обратите внимание, метод будет всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывести их в консоль.
*/

const Account = function (lg, e, fc) {
  this.login = lg;
  this.email = e;
  this.friendsCount = fc;
}
//привязываем метод  через прототип 
Account.prototype.getAccountInfo = function () {
  console.log( `login is ${this.login}` );
  console.log( `email is ${this.email}` );
  console.log( `friendsCount is ${this.friendsCount}` );
}
//создаем экземпляры объектов
const user1 = new Account('anna','anna@gmail.com',20);

const user2 = new Account('sanya','sanya@gmail.com',4);

const user3 = new Account('olena','olena@gmail.com',70);
//вызываем мыетод по ссылке на каждом объекте
user1.getAccountInfo();
user2.getAccountInfo();
user3.getAccountInfo();

//================== task 2 ===============================
console.log("======= Task 2 ======");
/*
  Напишите функцию-конструктор StringBuilder.
  
  На вход она получает один параметр string - строку.
  
  Добавьте следующие методы в prototype функции-конструктора.
  
    - getValue() - выводит в консоль текущее значение поля value
  
    - append(str) - получает парметр str - строку и добавляет 
      ее в конец значения поля value
    
    - prepend(str) - получает парметр str - строку и добавляет 
      ее в начало значения поля value
  
    - pad(str) - получает парметр str - строку и добавляет 
      ее в начало и в конец значения поля value
*/


function StringBuilder(string = "") {
  this.value = string;
}

const myString = new StringBuilder('.');

StringBuilder.prototype.showValue = function(){
  console.log(this.value);
}
StringBuilder.prototype.append = function(str){
 const newVal  = this.value.split('');
 newVal.push(str);
 this.value = newVal.join('');
}
StringBuilder.prototype.prepend = function(str){
  const newVal  = this.value.split('');
  newVal.splice(0,0,str);
  this.value = newVal.join('');
}
StringBuilder.prototype.pad = function(str){
  const newVal  = this.value.split('');
  newVal.splice(0,0,str);
  newVal.push(str);
  this.value = newVal.join('');
}
myString.append('^'); 
myString.showValue(); // '.^'
myString.prepend('^'); 
myString.showValue(); // '^.^'
myString.pad('='); 
myString.showValue(); // '=^.^='

//================== task 3 ===============================
console.log("======= Task 3 ======")
/*
  Создайте класс Car с указанными полями и методами.
*/
class Car {
  constructor(maxSpeed, value) {
    /*
    Добавьте свойства:
      - speed - для отслеживания текущей скорости, изначально 0.
      - maxSpeed - для хранения максимальной скорости 
      - running - для отслеживания заведен ли автомобиль, 
        возможные значения true или false. Изначально false.
      - distance - содержит общий киллометраж, изначально с 0
    */
      this.speed = 0;
      this.maxSpeed = maxSpeed;
      this.runing = false;
      this.distance = 0;  
      this._value = value;   
  }
 

  turnOn() {
    // Добавьте код для того чтобы завести автомобиль
    // Просто записывает в свойство running значание true
    this.runing = true;
  }

  turnOff() {
    // Добавьте код для того чтобы заглушить автомобиль
    // Просто записывает в свойство running значание false
    this.runing = false;
  }
  
  accelerate(spd) {
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed
    if(spd <= this.maxSpeed){
      this.speed = spd;
    }
  }
  
  decelerate(spd) {
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed и не меньше нуля
    if(spd <= this.maxSpeed && spd > 0){
      this.speed = spd;
    }
  }

  drive(hours) {
    // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
    // но только в том случае если машина заведена!
    if(this.runing = true){
      this.distance = hours * this.speed;    
    }
  }
  static getSpecs (carsName) {
    console.log(`maxSpeed: ${carsName.maxSpeed}, runing: ${carsName.runing}, distance: ${carsName.distance}`);
  }
  get value () {
    return this._value;
  }

  set value (value) {
    this._value = value;
    console.log(this._value);
  }
}
  const car1 = new Car(180);
  car1.turnOn();
  car1.accelerate(120);
  car1.drive(16);


  console.log(car1);

  const car2 = new Car(220);

  car2.accelerate(82);
  car2.turnOn();
  car2.drive(5);


  console.log(car2);
//================== task 4 ===============================
console.log("======= Task 4 ======");
/*
  Добавьте к классу Car из предыдущего задания статический
  метод getSpecs, который получает объект-машину как аргумент
  и выводит в консоль значения полей maxSpeed, running и distance.
  
  Использование будет выглядеть следующим образом:
*/   
  const someCar = new Car(100);
  someCar.turnOn();
  someCar.accelerate(100);
  someCar.drive(2);
 
  Car.getSpecs(someCar); // maxSpeed: 100, running: true, distance: 200

//================== task 5 ===============================
console.log("======= Task 5 ======");
/*
  Добавьте классу Car свойство value - цена автомобиля.
  
  Добавьте классу Car использование геттеров и сеттеров для свойства value.
  
  Геттер вернет текущей значение поля this._value
  Сеттер запишет в поле this._value то что ему присвоят
  
  PS: имя геттера и сеттера не может совпадать с полем, поэтому используйте
    не this.value а this._value
    
  Использование выглядит следующим образом:
  */ 
  const myCar = new Car(50, 2000);
 
  myCar.value; // 2000
  myCar.value = 4000;
  myCar.value; // 4000

  

/*
class Car {
  constructor(maxSpeed, value) {
    // ... код
    this._value = value;
  }
  // ... код
}


*/
class Student {constructor (){}}
if(typeof Student === object){
  console.log('+')
}

/*
	
typeof Student === 'object'
 b
typeof Student === 'function'
 c
typeof Student === function
 d
typeof Student === object
*/