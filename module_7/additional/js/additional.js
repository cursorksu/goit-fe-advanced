"use strict";
//================== task 1 ===============================
console.log("======= Task 1 ======");

/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/
const num = prompt('Input number 1 to 3');
//====Функция, находящая имя
const categoryLists = Array.from(document.querySelector('.categories').querySelectorAll('.title'));

const getTitle = (arr, num) => {
  const titles = arr.map(list => list.textContent);
  let title = titles.filter(titleItem => num - 1 === titles.indexOf(titleItem));
  return title;
}
//====Функция, подсчитывающая количество элементов
const lengthList =  Array.from(document.querySelector('.categories').querySelectorAll('ul'));

const getLength = (arr, num) => {
  const choisenList = arr.filter(list => num -1 === arr.indexOf(list));
  let length = choisenList[0].children.length;
  return length;
}
//====Использование функций
console.log(`Категория: ${ getTitle(categoryLists, num)}`);
console.log(`Количество вложенных li: ${getLength(lengthList, num)}`);

//================== task 2 ===============================
console.log("======= Task 2 ======");
/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/
const programList = document.querySelector('.list');
const firstChildLi = programList.firstElementChild.classList.add('red');
const lastChildLi = programList.lastElementChild.style.color = 'blue';

//================== task 3 ===============================
console.log("======= Task 3 ======")
/*
  Дан ul склассом .programlist и массив строк. 
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

const listOfProg = document.querySelector('.programlist');

const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
elements.forEach(element =>{
  const item = document.createElement("li");
  item.textContent = element;
  listOfProg.append(item);
})
console.log(listOfProg)
//================== task 4 ===============================
console.log("======= Task 4 ======");

/*
  Напишите скрипт для создания списка ul.
  
  Для каждого пункта:
    - Запрашивайте содержимое пункта li у пользователя с помощью prompt.
    - Создавайте пункт и добавляйте его к ul.
    - Процесс прерывается, когда пользователь нажимает Cancel.
    - Все элементы списка должны создаваться динамически.
*/

let newItem;
//=== Создаем меню
const articleElm = document.querySelector('article')
const newMenu = document.createElement('ul');

newMenu.classList.add('newmenu');
articleElm.append(newMenu);


const newMenuList = document.querySelector('.newmenu');
console.log(newMenuList);
//=== Cоздаем один пункт
const  createNewItem = function(parentElm){
  newItem = prompt("Введите Еще один пункт списка");
  if(newItem !== null){
    const item =  document.createElement('li');
  item.textContent = newItem;
  newMenu.appendChild(item);
  }
}
do {
  createNewItem(newMenuList) 
} while (newItem !== null);

//================== task 5 ===============================
console.log("======= Task 5 ======");

/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию getInputsData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/
const sizeFilter = document.querySelector('.size-filter');
const inputList = Array.from(sizeFilter.querySelectorAll('input'));
console.log(inputList);
const getInputsData = (inputs) =>{
  const valueArray = [];
  inputs.map(input => {
    if(input.hasAttribute('checked')){
      valueArray.push(input.getAttribute('value'));
    } 
  })
  return valueArray
}
console.log(getInputsData(inputList))

//================== task 6 ===============================
console.log("======= Task 6 ======");

/*
  Создайте функцию createPostCard(), которая 
  создает и возвращает DOM-узел карточки поста.

  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/
/*<div class="post">
       
        <h2 class="post__title">Lorem ipsum dolor</h2>
        <p class="post__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!</p>
      
        <a class="button" href="#">Read more</a>
      </div>
*/
const createCardImg = () => {
  const img = document.createElement('img');
  img.classList.add('post__image');
  img.setAttribute('src','http://via.placeholder.com/400x150');
  img.setAttribute('alt','post image');
  return img
}
const createPostTitle = () => {
  const title = document.createElement('h2');
  title.classList.add('post__title');
  title.textContent = 'Lorem ipsum dolor';
  return title
}
const createPostText = () => {
  const text = document.createElement('p');
  text.classList.add('post__text');
  text.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!';
  return text
}
const createPostButton = () => {
  const button = document.createElement('a');
  button.classList.add('button');
  button.setAttribute('href','#');
  button.textContent = 'Read more';
  return button
}
const createPostCard = () => {
  const post = document.createElement('div');
  post.classList.add('post');
  articleElm.append(post);

  post.append(createCardImg(), createPostTitle(), createPostText(), createPostButton());

  return post
}

const postCsrd = createPostCard();

//================== task 7 ===============================
console.log("======= Task 7 ======");

/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/

let numberBlock = prompt('Число цветных блоков = ');
const root = document.getElementById('root'); 
const createBlock = () => {
  const block = document.createElement('div');
  let rand = 'c' + Math.round(Math.random()*1000) + Math.round(Math.random()*10);
  if(rand.length < 6){
    let delta = rand.length - 6;
     do{
      rand =  rand + 'f';
    } while(rand.length < 6);
    
  }
  block.classList.add('block');
  block.style.background = "#" + rand;
  block.style.width = widthBlock + 'px';
  block.style.height= heightBlock + 'px';

  root.append(block);

  return block
}
let widthBlock = 30;
let heightBlock = 30;
do{
  const block = document.querySelector('.block');
  widthBlock = widthBlock + 10;
  heightBlock = heightBlock + 10;
  numberBlock = numberBlock - 1;
  createBlock();
}while(numberBlock > 0);