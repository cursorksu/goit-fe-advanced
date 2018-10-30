/*
  Напишите приложение для хранения url веб-страниц в виде карточек-закладок.

  Реализуйте следующий функционал:
    - Используйте Gulp для сборки проекта, JS обработан транспайлером Babel, ресурсы оптимизированы

    - Для добавления новой закладки, в приложении есть форма с элементом input и кнопкой "Добавить"

    - В приложении есть список всех добавленных карточек-закладок, располагающийся под формой

    - Некоторые элементы интерфейса создаются динамически. Используйте шаблонизатор Handlebars для
      создания списка карточек. Форма уже есть в HTML при загрузке страницы.

    - При добавлении ссылки в поле формы и нажатии на кнопку "Добавить", происходят проверки:
        * на существование закладки с такой ссылкой в текущей коллекции закладок. Если такая закладка есть,
          всплывает диалоговое окно оповещающее пользователя о том, что такая закладка уже есть.
        * при условии валидной, еще не существующей в коллекции ссылки, карточка с такой ссылкой
          добавляется в коллекцию.

    - В интерфейсе, новые карточки добавляются наверх списка, а не вниз.

    - Каждая карточка-закладка содержит кнопку для удаления карточки из коллекции, при клике
      на кнопку происходит удаление.

    - При повторном посещении страницы с одного и того же устройства и браузера, пользователь видит
      все карточки-закладки которые были во время последнего его посещения. Используйте localStorage

  🔔 Оформление интерфейса произвольное
*/

/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ

    - При добавлении ссылки в поле формы и нажатии на кнопку "Добавить", происходи проверка
      на валидность введенной ссылки: если был введен невалидный url то должно всплывать
      диалоговое окно, оповещающее пользователя о том, что это невалидный url. Используйте
      регулярные выражения для валидации url.

    - Каждая карточка содержит превью изображение и базовую информацию о странице по адресу закладки,
      для получения этой информации воспользуйтесь этим Rest API - https://www.linkpreview.net/
*/
const refs = {
  page: document.querySelector("body"),
  form: document.querySelector(".search-form"),
  btnSearch: document.querySelector(".search-form__btn"),
  delete: document.querySelector(".js-delete"),
  more: document.querySelector(".js-more"),
  prev: document.querySelector(".js-prev"),
  next: document.querySelector(".js-next"),
  select: document.querySelector(".js-select"),
  close: document.querySelector(".js-close")
};
localStorage.setItem('img', 'choise'); //Этот массив объектов временный для наглядности. Вместо него должен приходить массив объектов из АПИ

const pictures = [{
  img: 'images/bynns1-tif.png',
  name: 'alt'
}, {
  img: 'images/bynns1-tif.png',
  name: 'alt'
}, {
  img: 'images/bynns1-tif.png',
  name: 'alt'
}, {
  img: 'images/bynns1-tif.png',
  name: 'alt'
}, {
  img: 'images/bynns1-tif.png',
  name: 'alt'
}, {
  img: 'images/bynns1-tif.png',
  name: 'alt'
}, {
  img: 'images/bynns1-tif.png',
  name: 'alt'
}, {
  img: 'images/bynns1-tif.png',
  name: 'alt'
}, {
  img: 'images/bynns1-tif.png',
  name: 'alt'
}, {
  img: 'images/bynns1-tif.png',
  name: 'alt'
}, {
  img: 'images/bynns1-tif.png',
  name: 'alt'
}, {
  img: 'images/bynns1-tif.png',
  name: 'alt'
}, {
  img: 'images/bynns1-tif.png',
  name: 'alt'
}, {
  img: 'images/bynns1-tif.png',
  name: 'alt'
}, {
  img: 'images/bynns1-tif.png',
  name: 'alt'
}, {
  img: 'images/bynns1-tif.png',
  name: 'alt'
}]; //Константы для рендера разметки

const list = document.querySelector('.pict-list');
const sourse = document.querySelector('#pict').innerHTML.trim();
const tpl = Handlebars.compile(sourse);

const marcupHTML = arr => {
  const marcup = arr.reduce((acc, img) => acc + tpl(img), '');
  list.innerHTML = marcup;
};

marcupHTML(pictures);

const popUpClose = () => refs.page.classList.remove('pop-up_active');

function popUpOpen(event) {
  event.preventDefault();
  const target = event.target; //console.log("event target: ", target); // посмотрите что тут

  if (target.nodeName !== "LI") return;
  refs.page.classList.add('pop-up_active');
}

list.addEventListener('click', popUpOpen);
refs.close.addEventListener('click', popUpClose);