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
  putUser: document.querySelector(".js-put"),
  addUser: document.querySelector(".js-add"),
  addNewUser: document.querySelector(".js-send-data"),
  putNewUser: document.querySelector(".js-send-data-for-put"),
  allUsers: document.querySelector(".js-all"),
  listUsers: document.querySelector(".js-list tbody"),
  idUser: document.querySelector(".js-id"),
  nameUser: document.querySelector(".js-name"),
  ageUser: document.querySelector(".js-age"),
  popUpInner: document.querySelector(".pop-up-inner"),
  popUpClose: document.querySelector(".pop-up-inner .btn-close"),
  idWrap: document.querySelector(".id-wrapper"),
  newWrap: document.querySelector(".new-user-wrapper"),
  allButtons: document.querySelectorAll('.button-wrap .btn')
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
  const name = refs.nameUser.value;
  const age = refs.ageUser.value;
  refs.page.classList.add('show-loader');
  putUserId(query, name, age)
  .then(item => {
    putRow(query, item.name, item.age);
    const text = `Пользователь\nс ID:${item.id}\nуспешно изменен.`
    popUpShow(text)
   });
  refs.page.classList.remove('show-loader');
  refs.form.reset();
  refs.newWrap.classList.add('hide');
  removeDssabled();
}

const deleteUserById = function (e) {
  e.preventDefault();
  let query = refs.idUser.value;
  try {
    if (query === '') {
      refs.idUser.setAttribute('placeholder', "Пожалуйста введите корректный id для продолжения");
      return;
    } else {
      refs.page.classList.add('show-loader');
      deleteUserId(query)
        .then(response => {
          const text = `Пользователь с\nс ID:${query}\n не найден!`;
          popUpShow(text);
          if (response.ok) return response.json();
          throw new Error(`Ошибочка вышла: ${response.statusText}`);
        })
        .then(data => {
          return data.data; 
        })
        .then(item => {
          deleteRow(query);
          const text = `Пользователь\nс ID:${item.id}\nуспешно удален.`
          popUpShow(text)
        });
      refs.page.classList.remove('show-loader');
      refs.page.classList.add('del-success');
    }
  } catch (e) {
    console.log(`Ошибочка вышла : ${e}`);
  }
}
const sendDataForPut = function (e) {
  e.preventDefault();
  refs.newWrap.classList.remove('hide');
  refs.putNewUser.classList.remove('hide')
  refs.addNewUser.classList.add('hide')
  addDssabled()
}

const sendData = function (e) {
  e.preventDefault();
  refs.newWrap.classList.remove('hide');
  refs.idWrap.classList.add('hide');
  refs.putNewUser.classList.add('hide')
  refs.addNewUser.classList.remove('hide')
  addDssabled()
}

const addUser = function (e) {
    const name = refs.nameUser.value;
    const age = refs.ageUser.value;
    refs.page.classList.add('show-loader');
    addNewUser(name, age)
      .then(item => {
          return item;
      })
      .then(response => {
        const text = `Не удалось создать пользователя. Проверьте правильность заполнения формы`;
        popUpShow(text);
        if (response.ok) return response.json();
        throw new Error(`Ошибочка вышла: ${response.statusText}`);
      })
      .then(data => {
        return data.data;
      })
      .then(string => {
        const text = `Пользователь ${name} успешно создан`;
        popUpShow(text);
        refs.listUsers.insertAdjacentHTML('beforeend', murkupHTMLResp(string));
        return string
      }
      );
    refs.page.classList.remove('show-loader');
    refs.form.reset();
    refs.idWrap.classList.remove('hide');
    refs.newWrap.classList.add('hide');
    removeDssabled();
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
  fetch(`https://test-users-api.herokuapp.com/users/${query}`, {
    method: 'PUT',
    body: JSON.stringify({
      name: `${name}`,
      age:  `${age}`
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  })
  .then(response => {
    const text = `Не удалось обновить данные пользователя. Проверьте правильность заполнения формы`;
    popUpShow(text);
    if (response.ok) return response.json();
    throw new Error(`Ошибочка вышла: ${response.statusText}`);
  })
  .then(data => {
    return data.data;
  })
  .catch(error => {
    console.log(`Ошибочка вышла : ${error}`);
  });
  ;

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
const murkupHTMLResp = (item) => {
  return `<tr>
          <td class = "td td-id" width = "30%">${item._id}</td>
          <td class = "td td-name" width = "30%">${item.name}</td>
          <td class = "td td-age" width = "30%">${item.age}</td>
        </tr>`;
}
const popUpShow = (text) => {
  refs.page.classList.add('del-success')
  refs.popUpInner.querySelector('span').textContent = text;
};
const popUpClose = () => refs.page.classList.remove('del-success');

const deleteRow = (idCurrent) => {
 let id = Array.from(refs.listUsers.querySelectorAll('.td-id'));
 const row = id.map(item => {
    if(item.textContent === idCurrent.toLowerCase()){
      item.closest('tr').classList.add('hide');
    }
  });
};
const putRow = (idCurrent, name, age) => {
  let id = Array.from(refs.listUsers.querySelectorAll('.td-id'));
  id.map(item => {
     if(item.textContent === idCurrent.toLowerCase()){
       item.closest('tr').innerHTML  = `
       <td class = "td td-id" width = "30%">${idCurrent}</td>
       <td class = "td td-name" width = "30%">${name}</td>
       <td class = "td td-age" width = "30%">${age}</td>
     `;
     }
   });
 };


const addDssabled = () => {
  refs.allButtons.forEach(item => item.setAttribute('disabled', 'disabled'));
}

const removeDssabled = () => {
  refs.allButtons.forEach(item => item.removeAttribute('disabled'));
}

  refs.popUpClose.addEventListener('click', popUpClose);
  refs.allUsers.addEventListener('click', showAllUsers);
  refs.searchUser.addEventListener('click', getUserById);
  refs.deleteUser.addEventListener('click', deleteUserById);

  refs.addUser.addEventListener('click', sendData);
  refs.addNewUser.addEventListener('click', addUser);

  refs.putUser.addEventListener('click', sendDataForPut);
  refs.putNewUser.addEventListener('click', putUserById);
