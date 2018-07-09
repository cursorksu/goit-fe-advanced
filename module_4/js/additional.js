"use strict";
//================== task 1 ===============================
console.log('======= Task 1 ======')
/*  
  Напишите скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - удаляет свойство premium
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя цикл for...in
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

const user = {
    name: "Mango",
    age: 20,
    hobby: "html",
    premium: true
};
//- добавляет поле mood со значением 'happy'
user.mood = 'happy';
// - заменяет значение hobby на 'javascript'
user.mood = 'javascript';
//  - удаляет свойство premium
delete user.premium;
console.log(user.mood);
console.log(user.premium);
// - выводит содержимое объекта user в формате ключ:значение 
//используя цикл for...in

for (let key in user) {
    console.log(key + ':' + user[key]);
}

//    - выводит содержимое объекта user в формате ключ:значение 
//используя Object.keys и for...of

const keys = Object.keys(user);
console.log(keys);
for (let key of keys) {
    console.log(key + ':' + user[key]);
}

//- выводит содержимое объекта user в формате ключ:значение 
//используя Object.entries и for...of

const entries = Object.entries(user);
console.log(entries);
for (let item of entries) {
    const key = item[0];
    const value = item[1];
    console.log(`${key}: ${value}`)
}
//================== task 2 ===============================
console.log('======= Task 2 ======');
/*
  Напиште скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

const tasksCompleted = {
    ann: 29,
    david: 35,
    helen: 10,
    lorence: 99
};
const entriesTasks = Object.entries(tasksCompleted);
let maxTasks = entriesTasks[0][1];
let nameMaxTasksCompleted;
for (let item of entriesTasks) {
    const value = item[1];
    const key = item[0];
    if (value > maxTasks) {
        maxTasks = value;
        nameMaxTasksCompleted = key;
    }
}
console.log(nameMaxTasksCompleted)

//================== task 3 ===============================
console.log('======= Task 3 ======');
/*  
  Напишите функцию countProps(obj),
  считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/
const countProps = (props) => Object.keys(props).length;

// Вызовы функции для проверки
console.log(
    countProps({})
); // 0

console.log(
    countProps({
        a: 1,
        b: 3,
        c: 'hello'
    })
); // 3
//================== task 4 ===============================
console.log('======= Task 4 ======');
/*  
  Создайте функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  Возвращает true если объект пустой, false если не пустой.
*/
const isObjectEmpty = (param) => Object.keys(param).length > 0 ? false : true;
// Вызовы функции для проверки
console.log(
    isObjectEmpty({})
); // true

console.log(
    isObjectEmpty({
        a: 1
    })
); // false

console.log(
    isObjectEmpty({
        a: 1,
        b: 2
    })
); // false

//================== task 5 ===============================
console.log('======= Task 5 =======');

/*  
  Напишите функцию countTotalSalary(salaries),
  получающую объект и считающую общую сумму запрплаты работников.
  
  Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"
  
  Функция возвращает общую сумму зарплаты.
*/
const countTotalSalary = (saleryList) => { 
    const valueList = Object.values(saleryList)
    let sum = 0;
    for(let person of valueList){
        sum = sum + person;
    }
    return sum;
}
// Вызовы функции для проверки
  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80
    })
  ); // 330
  
  console.log(
    countTotalSalary({})
  ); // 0

//================== task 6 ===============================
console.log('======= Task 6 =======');
/*  
  Напишите функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа, 
  возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

const users = [
    { name: 'Poly', age: 7, mood: 'happy' },
    { name: 'Mango', age: 4, mood: 'blissful'},
    { name: 'Ajax', age: 3, mood: 'tired' },
    { name: 'Neponiatka', age: 6, mood: 'sed' },
    { name: 'Neponiatka', age: 8, mood: 'lovely' }
  ];
  
  const getAllPropValues = (arr, prop) => {
    const newArrey = []
    for(let user of arr){
        if(user[prop] !== undefined){
             newArrey.push (user[prop]);
        }
    }
    return newArrey
  };
  // Вызовы функции для проверки
  console.log(
    getAllPropValues(users, 'name')
  ); // ['Poly', 'Mango', 'Ajax']
  
  console.log(
    getAllPropValues(users, 'mood')
  ); // ['happy', 'blissful', 'tired']
  
  console.log(
    getAllPropValues(users, 'hangury')
  ); // []
//================== task 7 ===============================
console.log('======= Task 7 =======');
/*Напишите код, который бы  с помощью 
функции-конструкора User, позволял создавать 
объекты пользователя со следующим свойствами:
  - name - строка (имя)
  - isActive - буль (активен)
  - age - число (возраст)
  - friends - число (кол-во друзей)

Имя, активность, возраст и друзей, 
необходимо передать как аргументы 
при вызове конструктора.

Добавить метод getUserInfo(), которая, выводит строку:
`User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

Создать несколько объектов пользователя User и с помощью 
функции getUserInfo вывести строку в консоль.
*/

function User(name, isActive, age, friends) {
  this.name = name;
  this.isActive = isActive;
  this.age = age;
  this.friends = friends;
  this.getUserInfo = function() {
    console.log( `User ${this.name} is ${this.age} years old and has ${this.friends} friends`);
  };
}
const Anna = new User("Anna", true, 25, 100);
const Sasha = new User("Sasha", false, 33, 500);
const Vala = new User("Vala", true, 30, 10);
const Dima = new User("Dima", false, 10, 4);
console.log(Anna);
Sasha.getUserInfo();
Vala.getUserInfo();
Dima.getUserInfo();
//================== task 8 ===============================
console.log('======= Task 8 =======');
/*  
  Расставьте отсутствующие this 
  в методах объекта store
*/

const store = {
  products: ['bread', 'cheese', 'milk', 'apples'],
  managers: ['poly', 'mango', 'ajax'],
  addManager(manager) {
    this.managers.push(manager);
    
    console.log(this.managers);
  },
  removeManager(manager) {
    const idx = this.managers.indexOf(manager);
    
    this.managers.splice(idx, 1);
    
    console.log(this.managers);
  },
  getProducts() {
    console.log(this.products);
    
    return this.products;
  }
}

store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']

store.removeManager('mango'); // ['poly', ajax', 'chelsey']

store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']


//================== task 9 ===============================
console.log('======= Task 9 =======');
/*  
  Расставьте отсутствующие this в конструкторе объектов Account
*/

function Account({ login, password, type = "regular" }) {
  this.login = login;
  this.password = password;
  this.type = type;

this.changePassword = function(newPassword) {
    this.password = newPassword;

    return this.password;
  };
this.getAccountInfo = function() {
  return (`
      Login: ${this.login}, 
      Pass: ${this.password}, 
      Type: ${this.type}
    `);
  };
}
const account = new Account({
  login: "Mango",
  password: "qwe123",
  type: "premium"
});
console.log(account.login); // 'Mango'
console.log(account.password); // 'qwe123'
console.log(account.type); // 'premium'
console.log(account.changePassword("asdzxc")); // 'asdzxc'
console.log(account.getAccountInfo()); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'

