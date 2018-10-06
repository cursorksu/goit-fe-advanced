"use strict";
/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age.
  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.
*/
const refs = {
  page: document.querySelector("body"),
  form: document.querySelector(".serch-form"),
  searchUser: document.querySelector(".js-search"),
  deleteUser: document.querySelector(".js-delete"),
  putUser: document.querySelector(".js-put:not(.new)"),
  putUserNew: document.querySelector(".js-put.new"),
  addUser: document.querySelector(".js-add"),
  allUsers: document.querySelector(".js-all"),
  listUsers: document.querySelector(".js-list tbody"),
  idUser: document.querySelector(".js-id"),
  nameUser: document.querySelector(".js-name"),
  ageUser: document.querySelector(".js-age"),
  popUpInner: document.querySelector(".pop-up-inner"),
  popUpClose: document.querySelector(".pop-up-inner .btn-close"),
  idWrap: document.querySelector(".id-wrapper"),
  newWrap: document.querySelector(".new-user-wrapper"),
  allButtons: document.querySelectorAll('.btn')
}
//=================================================================


const showAllUsers = function (e) {
  e.preventDefault();
  refs.form.reset();
  refs.page.classList.add('show-loader');
  getAllUsers()
    .then(items => {
      refs.page.classList.remove('show-loader');
      const murkup = createTable(items);
      refs.listUsers.innerHTML = murkup;
    });
  refs.form.reset();
}

const getUserById = function (e) {
  e.preventDefault();
  let query = refs.idUser.value;
  try {
    if (query === '') {
      refs.idUser.setAttribute('placeholder', "Пожалуйста введите корректный id для продолжения");
      return;
    } else {
      refs.page.classList.add('show-loader');
      getUserId(query).then(item => refs.listUsers.innerHTML = murkupHTML(item));
      refs.page.classList.remove('show-loader');
      refs.form.reset();
      refs.idUser.setAttribute('placeholder', "");
    }
  } catch (e) {
    console.log(`Ошибочка вышла : ${e}`);
  }
}

const putUserById = function (e) {
  e.preventDefault();
  let query = refs.idUser.value;
  const name = prompt("Введите имя");
  const age = prompt("Введите возраст");
  console.log(age, name)
  refs.page.classList.add('show-loader');
  try {
    if (!query) {
      refs.idUser.setAttribute('placeholder', "Заполните поле");
      return;
    } else {
      refs.page.classList.add('show-loader');
      putUserId(query, name, age)
      refs.page.classList.remove('show-loader');
      refs.form.reset();
      refs.idUser.setAttribute('placeholder', '');
    }
  } catch (e) {
    console.log(`Ошибочка вышла : ${e}`);
  }
  refs.newWrap.classList.add('hide');
}

const deleteUserById = function () {
  let query = refs.idUser.value;
  try {
    if (query === '') {
      refs.idUser.setAttribute('placeholder', "Пожалуйста введите корректный id для продолжения");
      return;
    } else {
      refs.page.classList.add('show-loader');
      deleteUserId(query)
        .then(item => {
          if (item.error !== []) {
            refs.popUpInner.querySelector('span').textContent = `Пользователь с идентификатором ${query} успешно удален`
          } else {
            refs.popUpInner.querySelector('span').textContent = `Пользователь с идентификатором ${query} не найден`
          }
        })
      refs.page.classList.remove('show-loader');
      refs.page.classList.add('del-success');
    }
  } catch (e) {
    console.log(`Ошибочка вышла : ${e}`);
  }
}

const addUser = function (e) {
  e.preventDefault();
  const name = prompt("Введите имя");
  const age = prompt("Введите возраст");
  console.log(age, name)
  refs.page.classList.add('show-loader');
  addNewUser(name, age)
    .then(item => {
      refs.popUpInner.querySelector('span').textContent = `Пользователь ${name} успешно создан`;
      getAllUsers();
    });
  refs.page.classList.remove('show-loader');
  refs.form.reset();
}

const getAllUsers = () =>
  fetch("https://test-users-api.herokuapp.com/users", {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  })
  .then(response => {
    if (response.ok) return response.json();
    throw new Error(`Ошибочка вышла: ${response.statusText}`);
  })
  .then(data => {
    return data.data;
  })
  .catch(error => {
    console.log(`Ошибочка вышла : ${error}`);
  });

const getUserId = (query) =>
  fetch(`https://test-users-api.herokuapp.com/users/${query}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  })
  .then(response => {
    if (response.ok) return response.json();
    throw new Error(`Ошибочка вышла: ${response.statusText}`);
  })
  .then(data => {
    return data.data;
  })
  .catch(error => {
    console.log(`Ошибочка вышла : ${error}`);
  });

const putUserId = (query, name, age) =>
  fetch(`https://test-users-api.herokuapp.com/${query}`, {
    method: 'PUT',
    body: JSON.stringify({
      name: `${name}`,
      age: age
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  });

const addNewUser = (name, age) =>
  fetch('https://test-users-api.herokuapp.com/users', {
    method: 'POST',
    body: JSON.stringify({
      name: `${name}`,
      age: age
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  });
const deleteUserId = (query) =>
  fetch(`https://test-users-api.herokuapp.com/users/${query}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  })
  .catch(error => {
    console.log(`Ошибочка вышла : ${error}`);
  });

const createTable = (items) => {
  return items.reduce((murkup, item) => murkup + murkupHTML(item), '');
}

const murkupHTML = (item) => {
  return `<tr>
          <td class = "td td-id" width = "30%">${item.id}</td>
          <td class = "td td-name" width = "30%">${item.name}</td>
          <td class = "td td-age" width = "30%">${item.age}</td>
        </tr>`;
}

const popUpClose = () => refs.page.classList.remove('del-success');
// Эта функция должна удалять строку из таблички в интерфейсе
//без перезагрузки страницы после того как сработает клик на кнопку Удалить
//!Не работает
const deletRow = (idCurrent) => {
  refs.listUsers.querySelectorAll('.td-id');
  console.log(refs.listUsers.querySelectorAll('.td-id'));
  refs.listUsers.querySelectorAll('.td-id');
  /*.forEach(item => {
    console.log(`${item.textContent == idCurrent}: ${item.textContent}`)
    if(item.textContent == idCurrent){
        console.log(`Нашел! ${idCurrent}`)
  }
})*/
};
//Эта функция должна делать неактивными кнопки
//Не работает
const addDssabled = (button) => {

  refs.allButtons.forEach(item => item.setAttribute('disabled', 'disabled'));
  console.log(button)
  button.removeAttribute('disabled');
  console.log(refs.allButtons);
}

refs.popUpClose.addEventListener('click', popUpClose);
refs.allUsers.addEventListener('click', showAllUsers);
refs.searchUser.addEventListener('click', getUserById);
refs.deleteUser.addEventListener('click', deleteUserById);
refs.putUser.addEventListener('click', putUserById);
refs.addUser.addEventListener('click', addUser);