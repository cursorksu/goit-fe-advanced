/*
  Напишите приложение для хранения url веб-страниц в виде карточек-закладок.

  Реализуйте следующий функционал:
    *** Используйте Gulp для сборки проекта, JS обработан транспайлером Babel, ресурсы оптимизированы

    *** Для добавления новой закладки, в приложении есть форма с элементом input и кнопкой "Добавить"

    *** В приложении есть список всех добавленных карточек-закладок, располагающийся под формой

    *** Некоторые элементы интерфейса создаются динамически. Используйте шаблонизатор Handlebars для
      создания списка карточек. Форма уже есть в HTML при загрузке страницы.

    *** При добавлении ссылки в поле формы и нажатии на кнопку "Добавить", происходят проверки:
        * на существование закладки с такой ссылкой в текущей коллекции закладок. Если такая закладка есть,
          всплывает диалоговое окно оповещающее пользователя о том, что такая закладка уже есть.
        * при условии валидной, еще не существующей в коллекции ссылки, карточка с такой ссылкой
          добавляется в коллекцию.

    *** В интерфейсе, новые карточки добавляются наверх списка, а не вниз.

    - Каждая карточка-закладка содержит кнопку для удаления карточки из коллекции, при клике
      на кнопку происходит удаление.

    - При повторном посещении страницы с одного и того же устройства и браузера, пользователь видит
      все карточки-закладки которые были во время последнего его посещения. Используйте localStorage

  🔔 Оформление интерфейса произвольное
*/

/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ

    *** При добавлении ссылки в поле формы и нажатии на кнопку "Добавить", происходи проверка
      на валидность введенной ссылки: если был введен невалидный url то должно всплывать
      диалоговое окно, оповещающее пользователя о том, что это невалидный url. Используйте
      регулярные выражения для валидации url.

key=5bc46fbf6c978842625dc46b85b5a25f333e5ce7f3f42


    *** Каждая карточка содержит превью изображение и базовую информацию о странице по адресу закладки,
      для получения этой информации воспользуйтесь этим Rest API - https://www.linkpreview.net/
*/
//Работа с ЛокалСторидж
window.onload = function () {
  let linksList = [];
  // localStorage.setItem("linksList", JSON.stringify(linkList));
  // let linksListLS = localStorage.linksList ? JSON.parse(localStorage.linksList) : [];
  // log(`linksListLS:`, linksListLS); //Объект переменных

  const refs = {
    page: document.querySelector("body"),
    form: document.querySelector(".js-form"),
    input: document.querySelector("input"),
    btnSearch: document.querySelector(".form__btn"),
    btnDelete: document.querySelector(".js-del"),
    linksList: document.querySelector(".js-list"),
    linksItem: document.querySelector(".js-item")
  }; //Будущий объект карточек
  //Разметка

  const list = document.querySelector('.links__list');
  const sourse = document.querySelector('#links').innerHTML.trim();
  const template = Handlebars.compile(sourse);

  const log = item => console.log(item);

  const marcupHTML = items => {
    const markup = items.reduce((acc, item) => {
      return acc + createCard(item);
    }, '');
    list.innerHTML = markup;
  };

  const createCard = item => {
    const markup = template(item);
    return markup;
  }; //Аякс Запросы


  const getItem = query => fetch(`http://api.linkpreview.net/?key=5bc46fbf6c978842625dc46b85b5a25f333e5ce7f3f42&q=${query}`, {
    method: 'GET',
    contentType: "application/json"
  }).then(response => {
    if (response.ok) return response.json();
    throw new Error(`Ошибочка вышла: ${response.statusText}`);
  }).catch(error => {
    console.log(`Ошибочка вышла : ${error}`);
  }); //Функции для слушателей событий


  const hendelPushLink = function (e) {
    e.preventDefault();
    const link = refs.input.value;
    const valid = /^(ftp|http|https):\/\/[^ "]+$/.test(link);

    if (link === '' || !valid) {
      alert('Введите корректную ссылку');
      return;
    }

    const isInList = linksList.some(item => item.url === refs.input.value);
    refs.form.reset();
    getItem(link).then(data => {
      if (!isInList) {
        linksList.unshift(data);
        marcupHTML(linksList);
      } else {
        alert('Эта ссылка уже есть в списке.. \nВведите другую ссылку');
      }
    }); //LS

    // log(`obj:`, linksList);
    // foo = linksList;
    // localStorage.foo = JSON.stringify(foo);
  };

  const hendelRemoveLink = function (e) {
    e.preventDefault();
    const target = e.target;
    if (target.nodeName !== "BUTTON") return;
    const parent = target.closest('li');
    const link = parent.querySelector("a").getAttribute('href');
    linksList = linksList.filter(item => item.url !== link);
    parent.remove();
    data = [linksList.map(li => li.innerHTML)];
  }; //Слушатели событий


  refs.linksList.addEventListener('click', hendelRemoveLink);
  refs.form.addEventListener('submit', hendelPushLink);
};