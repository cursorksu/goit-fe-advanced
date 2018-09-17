"use strict";
//================== task 1 ===============================
console.log("======= Task 1 ======");

/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal" 
    и классом js-open-modal, модальное окно с классом modal, 
    должно появляться, тобишь необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (js-close-modal)
    или на серый фон с прозрачностью (js-modal-backdrop), 
    модальное окно должно закрываться.
    
  
  Задание повышеной сложности:
  - Попробуйте реализовать плагин функционала модального окна используя класс.
    При создании экземпляра необходимо передать селекторы для кнопки закрытия окна
    и самого прозрачного фона. Плагин должен реализовавать два метода show и hide,
    либо один toggle.
    
    При клике на кнопку показа модального окна должен вызываться 
    метод show или toggle. Соответственно при для закрытия 
    окна hide либо toggle.
*/
/*
const bodySelector = document.body;
const modaleSelector = bodySelector.querySelector('.js-modal-backdrop')
const btnOpen = bodySelector.querySelector('.js-open-modal')
const btnClose = bodySelector.querySelector('.js-close-modal')
btnOpen.addEventListener('click', hendelOpenModale);
modaleSelector.addEventListener('click', hendelCloseModale);
function hendelOpenModale (e){
  modaleSelector.classList.remove('modal-hidden')
}
function hendelCloseModale (e){
  if(e.target === modaleSelector || e.target === btnClose ){
     modaleSelector.classList.add('modal-hidden')
  }
}
*/
/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Send" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в абзац с классом .result
*/
/*

const form = document.querySelector('.question-form');
const inputs = Array.from(document.querySelectorAll('input[name="option"]'));
const result = document.querySelector('.result');
const btn = document.querySelector('.btn');
form.addEventListener('submit',hendleSubmit);

function hendleSubmit (e) {
  e.preventDefault();
  let  choice = inputs.filter(input =>input.checked);
  result.textContent = `Result: ${choice[0].value}`
}
*/

/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс menu-link-active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пункотв меню может быть произвольное количество, используйте
  прием "Делегирование событий". Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/
const menu = document.querySelector('.js-menu');
const items = Array.from(menu.querySelectorAll('.menu-link'));
console.log(items);
menu.addEventListener('click', hendleItemActive);

function hendleItemActive (e){
  e.stopPropagation();
  if(e.target === menu) return;
  const menuActive = items.filter(item => item.className === 'menu-link menu-link-active');
  menuActive.map(item => item.className ='menu-link');
  e.target.className = 'menu-link menu-link-active'
}
/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в консоль выводит строку "Input is in focus!"
    - При наборе текста в текстовое поле (событие input), текущее его значение должно 
      отображаться в абзаце с классом input-value 
*/
/* const input = document.querySelector('.input');
const text = document.querySelector('.input-value')
input.addEventListener('focus', getFocus);
input.addEventListener('keypress', getCurrentValue);
input.addEventListener('keydown', getCurrentDelete);

function getFocus(e){
  console.log("Input is in focus!");
}
function getCurrentValue(e){
  const currentKey = e.key;
  const currentValue = e.target.value + currentKey;
text.textContent = `Current input value: ${currentValue}`
}
function getCurrentDelete(e){
  const code = e.code
  if(code !== 'Backspace') return;
  text.textContent = `Current input value:`;
  e.target.value = '';
}*/

/*

const linckOnInput = list.addEventListener("click", getFildLinck);

function getFildLinck(e){
  if(e.target.nodeName !== "INPUT"){
    return
  }
  const fildLength = e.target.dataset.length;
  const item = e.target

  item.addEventListener('blur', fildValidation);
}

function fildValidation(e){
  const value = e.target.value;
  const length = value.length;
  const dataLength = + e.target.dataset.length
  console.log(value, length, dataLength)
  if(length === dataLength){
    console.log('correct');
    e.target.className = 'validity';

  } else{
    console.log('error');
    e.target.className = 'unvalidity';

  }
}
*/

/*
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.btn');
  const input = document.querySelector('.input');
  const name = document.querySelector('.name');
  const hendlerColor = (e) => {
   
  
    let rand = 'c' + Math.round(Math.random()*1000) + Math.round(Math.random()*10);
    if(rand.length < 6){
      let delta = rand.length - 6;
       do{
        rand =  rand + 'f';
      } while(rand.length < 6);
      
    }
    const colorBtn = "#" + rand;
    console.log(colorBtn);
    btn.style.background = colorBtn;
    console.log(e.target);
  }
  
  const user = {
    name: 'Ivan',
    showname (){
      console.log(this);
      name.textContent =`Hallo! i\`m ${this.name}` ;
    }
  }
  
  const hendlerText = () => {
    input.textContent = 'Я изменился';
  }
  btn.addEventListener('click', hendlerText);
  btn.addEventListener('click', hendlerColor);
  btn.addEventListener('click', user.showname.bind(user));
  
  
  const form = document.querySelector('.js-note-form');
  const inputNode = form.querySelector('input')
  const noteList = document.querySelector('.js-note-list');
  
  
  form.addEventListener('submit', hendlerSubmit);
  
  function hendlerSubmit (e) {
    e.preventDefault;
    const newNode = inputNode.value;
    this.reset();
    const marcup = createNode(newNode);
    noteList.insertAdjacentHTML('afterbegin', marcup);
  }
  function hendelDeletItem (e){
    const nodeName = e.target.nodeName;
    if(nodeName !== 'BUTTON' || e.target.dataset.action !== 'delite-note') return;
    const parent = e.target.closest('.js-note-item');
    parent.remove();
    form.removeEventListener('submit', hendlerSubmit);
  }

  
  noteList.addEventListener('click', hendelDeletItem);

})
  function createNode(text){
    return `
           <li class = "js-note-item">
             <p class="js-note note">${text}</p>
             <div class = "js-active">
               <button class="js-edit btn" data-action = "edit-note">Edit</button>
               <button class="js-del btn" data-action = "delite-note">Delet</button>
             </div>
         </li>
    `
   }

   */
