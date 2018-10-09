"use strict";
// const poly = {
//   name: 'Poly',
//   age: 2,
//   img: 'https://cdn.pixabay.com/photo/2016/09/05/21/37/cat-1647775_960_720.jpg'
// }

const coffee = [
  {
    name: "espreso",
    volumeGlass: "70ml", 
    milk: false,
    traits: ['fuzzy','cute']
   },
   {
    name: "espreso",
    volumeGlass: "100ml", 
    milk: true,
    traits: ['fuzzy','cute']
   },
   {
    name: "americano",
    volumeGlass: "200ml", 
    milk: false,
    traits: ['fuzzy','cute']
   },
   {
    name: "americano",
    volumeGlass: "300ml", 
    milk: true,
    traits: ['black','cute']
   },
  ]
const coffeeList =  document.querySelector('.coffee-list');
const coffeeSourse = document.querySelector('#coffee-item').innerHTML.trim();
const tpl = Handlebars.compile(coffeeSourse);
const coffeeMarcup = coffee.reduce((acc, glass) => acc + tpl(glass), '');
//const coffeeMarcupOne = tpl(coffee);


// const root =  document.querySelector('#root')
// const sourse = document.querySelector('#cat-template').innerHTML.trim();
// const templates = Handlebars.compile(sourse);
// console.log(templates);

// const marcup = templates(poly);
// console.log(marcup);

// root.insertAdjacentHTML("afterBegin", marcup);
//coffeeList.insertAdjacentHTML("afterBegin", coffeeMarcupOne)
coffeeList.insertAdjacentHTML("afterBegin", coffeeMarcup)