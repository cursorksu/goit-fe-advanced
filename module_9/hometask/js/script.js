"use strict";

/*
  Создайте скрипт секундомера.  
  По ссылке можно посмотреть пример выбрав Stopwatch http://www.online-stopwatch.com/full-screen-stopwatch/
  
  Изначально в HTML есть разметка:
  
  <div class="stopwatch">
    <p class="time js-time">00:00.0</p>
    <button class="btn js-start">Start</button>
    <button class="btn js-take-lap">Lap</button>
    <button class="btn js-reset">Reset</button>
  </div>
  <ul class="laps js-laps"></ul>
  
  Добавьте следующий функционал:
  

  
                - При нажатии на кнопку button.js-start, запускается таймер, который считает время 
                  со старта и до текущего момента времени, обновляя содержимое элемента p.js-time 
                  новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).
                    
                  🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
                                достаточно повторять не чаще чем 1 раз в 100 мс.
                  
              - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause', 
                а функционал при клике превращается в оставновку секундомера без сброса 
                значений времени.
    
               🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.
  
            - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
              меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени, 
              а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд 
              со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени 
              с 6 секунд, а не с 16. 
    
            🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его 
                          при рассчете текущего времени после возобновления таймера отнимая
                          это значение от времени запуска таймера.
    
              - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка 
                button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
                disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.
    
  - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера 
    в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/

"use strict";

const btnStart = document.querySelector('.js-start');
const btnStop = document.querySelector('.js-reset');
const clockface = document.querySelector('.js-time');
const timeList = document.querySelector('.js-laps');
const btnLap = document.querySelector('.js-take-lap');

const timer = {
  id: null,
  startTime: null,
  isActive: false,
  deltaTime: 0,

  startTimer(){
    btnStop.removeAttribute('disabled');
    btnStart.textContent ='Pause';
    if(timer.isActive) {
      this.pause();
      return; 
    };
    this.startTime = Date.now() - this.deltaTime;
    this.isActive = true;
    this.id = setInterval(() => {
      const curentTime =  Date.now();
      this.deltaTime = (curentTime - this.startTime);
      ubdateClockface(this.deltaTime);
    },100);
  },

  stopTimer(){
    btnStop.setAttribute('disabled', 'disabled');
    clearInterval(this.id)
    this.isActive = false;
    this.resetInterval();
    btnStart.textContent ='Start';
  },
  resetInterval(){
    this.deltaTime = 0;
    ubdateClockface(this.deltaTime);
  },
  pause(){
    btnStart.textContent ='Continue';
    clearInterval(this.id)
    this.isActive = false;
    ubdateClockface(this.deltaTime);
  },
  lepTime(){
    const item = document.createElement("li");
    item.textContent = clockface.textContent;
    timeList.append(item);
  }
  
}




function ubdateClockface(time){
 const clocckTime = formatTime(time);
  clockface.textContent =  clocckTime;
}
function formatTime(ms){
  const data = new Date (ms);
  const mSec = String(data.getMilliseconds()).slice(0,1);
  const sec = data.getSeconds() < 10? `0${data.getSeconds()}`:`${data.getSeconds()}`;
  const min = data.getMinutes() < 10? `0${data.getMinutes()}`:`${data.getMinutes()}`;

  return `${min}:${sec}.${mSec}`;
}


if(timer.isActive){
  btnStart.addEventListener('click', timer.pause.bind(timer));
}else{
  btnStart.addEventListener('click', timer.startTimer.bind(timer));
}

btnStop.addEventListener('click', timer.stopTimer.bind(timer));
btnLap.addEventListener('click', timer.lepTime.bind(timer));



/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Выполните домашнее задание используя класс с полями и методами.
  
  На вход класс Stopwatch принимает только ссылку на DOM-узел в котором будет 
  динамически создана вся разметка для секундомера.
  
  Должна быть возможность создать сколько угодно экземпляров секундоментов 
  на странице и все они будут работать независимо.
  
  К примеру:
  
  new Stopwatch(parentA);
  new Stopwatch(parentB);
  new Stopwatch(parentC);
  
  Где parent* это существующий DOM-узел. 
*/