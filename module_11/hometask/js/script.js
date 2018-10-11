"use strict";
/*
  /*
  Реализуйте форму фильтра товаров в каталоге и список отфильтрованных товаров.
  Используйте шаблонизацию для создания карточек товаров.
  
  Есть массив объектов (дальше в задании), каждый из которых описывает 
  ноутбук с определенными характеристиками.
  
  Поля объекта по которым необходимо производить фильтрацию: size, color, release_date.
  Поля объекта для отображения в карточке: name, img, descr, color, price, release_date.
    
  Изначально есть форма с 3-мя секциями, состоящими из заголовка и группы 
  чекбоксов (разметка дальше в задании). После того как пользователь выбрал 
  какие либо чекбоксы и нажал кнопку Filter, необходимо собрать значения чекбоксов по группам. 
  
  🔔 Подсказка: составьте объект формата
      const filter = { size: [], color: [], release_date: [] }
    
  После чего выберите из массива только те объекты, которые подходят 
  под выбраные пользователем критерии и отрендерите список карточек товаров.
  
  🔔 Каждый раз когда пользователь фильтрует товары, список карточек товаров очищается, 
      после чего в нем рендерятся новые карточки товаров, соответствующих текущим критериям фильтра.
*/

const laptops = [
  {
    size: 13,
    color: 'white',
    price: 28000,
    release_date: 2015,
    name: 'Macbook Air White 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'gray',
    price: 32000,
    release_date: 2016,
    name: 'Macbook Air Gray 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'black',
    price: 35000,
    release_date: 2017,
    name: 'Macbook Air Black 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'white',
    price: 45000,
    release_date: 2015,
    name: 'Macbook Air White 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'gray',
    price: 55000,
    release_date: 2016,
    name: 'Macbook Pro Gray 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'black',
    price: 45000,
    release_date: 2017,
    name: 'Macbook Pro Black 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'white',
    price: 65000,
    release_date: 2015,
    name: 'Macbook Air White 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'gray',
    price: 75000,
    release_date: 2016,
    name: 'Macbook Pro Gray 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'black',
    price: 80000,
    release_date: 2017,
    name: 'Macbook Pro Black 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
];
const form =  document.querySelector('.js-form');
const inputs = form.querySelectorAll('input');
//Константы для рендера разметки
const list =  document.querySelector('.js-list');
const sourse = document.querySelector('#product-card').innerHTML.trim();
const tpl = Handlebars.compile(sourse);

const filter = { 
  size: [], 
  color: [], 
  release_date: [],
}

//функция получает массив объектов и  выбирает те, которые соответствуют переданому параметру выборки

const getLaptopBySize = (arr, size) =>
  arr.filter(produkt => produkt.size === size);

const getLaptopByColor = (arr, color) =>
  arr.filter(produkt => produkt.color === color);

const getLaptopByRelease = (arr, date) =>
  arr.filter(produkt => produkt.release_date === date);


function log(str){
  console.log(str)
}

const resetFilter = () => {
  filter.size = [];
  filter.color = [];
  filter.release_date = [];
}

const getChecked = function(e){
  e.preventDefault();

  const arrInputs = Array.from(inputs);
  arrInputs.filter(input => input.checked).map(item => {
    if(item.name === 'size'){
      filter.size.push(item.value)
    };
    if(item.name === 'color'){
      filter.color.push(item.value)
    };
    if(item.name ==='release_date'){
      filter.release_date.push(item.value)
    }
  });
  let result = filterBySize(filter.size, laptops, getLaptopBySize);
  result = filterByColor(filter.color, result, getLaptopByColor);
  result = filterBy(filter.release_date, result, getLaptopByRelease);
  let ArrNew = [];
  result.forEach(item => item.map(i => ArrNew.push(i)));
  log('ArrNew:');
  log(ArrNew);
    // Разметка выборки
    marcupHTML (ArrNew);
    //  Очистка объекта фильтр
    resetFilter ();
} 

const marcupHTML = (arr) => { 
  const marcup = arr
    .reduce((acc, laptop) => acc + tpl(laptop), '');
    list.innerHTML = marcup;
}
const filterBySize = function(param, arr, fn){
  if(!param.length) {
    return arr;
  }else{
    const filterRezult = param.map(item => fn(arr, +item));
    return filterRezult;
  }
  
}  

const filterByColor = function(param, arr, fn){
  let ArrNew = [];
  if(!param.length) {
    return arr;
  }else {
    arr.forEach(item => item.map(i => ArrNew.push(i)));
    const filterRezult = param.map(item => fn(ArrNew, item));
    log('filterRezult color:');
    log(filterRezult) ;
    return filterRezult;
  } 
}  
const filterBy = function(param, arr, fn){
  let ArrNew = [];
  if(!param.length) {
    return arr;
  }else {
    arr.forEach(item => item.map(i => ArrNew.push(i)));
    const filterRezult = param.map(item => fn(ArrNew, +item));
    log('filterRezult data:');log(filterRezult) ;
    return filterRezult;
  }
} 


//Первоначальная разметка
 marcupHTML (laptops);

//по нажатию на кнопк 2 события: формирование объекта ФИЛЬТР и Выборка нужных карточек из Списка товаров
form.addEventListener("submit", getChecked);
form.addEventListener("reset", resetFilter);