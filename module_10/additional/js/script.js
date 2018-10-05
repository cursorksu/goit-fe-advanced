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

//apixu  Key: cbc4ee74bd2c40e0b68200614180410
const pixabayKey = '10309973-2f82c3ec543675a93880c06ef';
// ?key=cbc4ee74bd2c40e0b68200614180410
// http://api.apixu.com/v1/current.json?key=cbc4ee74bd2c40e0b68200614180410&q=Kiev
// https://pixabay.com/api?key=10309973-2f82c3ec543675a93880c06ef&q=coffee
const refs = {
  page: document.querySelector("body"),
  form : document.querySelector(".serch-form"),
  searchUser : document.querySelector(".js-search"),
  deleteUser : document.querySelector(".js-delete"),
  putUser : document.querySelector(".js-put"),
  addUser : document.querySelector(".js-add"),
  allUsers :  document.querySelector(".js-all"),
  listUsers : document.querySelector(".js-list tbody"),
  idUser : document.querySelector(".js-id"),
  nameUser : document.querySelector(".js-name"),
  ageUser : document.querySelector(".js-age"),
}
//=================================================================


const query = function(e) {
  e.preventDefault();
  let query = refs.idUser.value;
  refs.page.classList.add('show-loader');
  getPictures(query).then(data => {
    return data.hits;
  }).then(items => {
    refs.page.classList.remove('show-loader');
    const murkup = createTable(items);
    refs.listUsers.innerHTML = murkup; 
  });
  refs.form.reset();
}
refs.form.addEventListener('submit', query);
// picture
function getPictures (query){
  const url = `https://pixabay.com/api/?key=${pixabayKey}&q=${query}&image_type=photo`
  return fetch(url)
  .then(response => {
    if(response.ok) return response.json();

    throw new Error(`Ошибочка вышла: ${response.statusText}`);
  })
  .catch(error => {
    console.log(`Ошибочка вышла : ${error}`);
  });
}

// picture

// weather
  fetch("http://api.apixu.com/v1/current.json?key=cbc4ee74bd2c40e0b68200614180410&q=Kiev", {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
})
  .then(response => {
    if(response.ok) return response.json();

    throw new Error(`Ошибочка вышла: ${response.statusText}`);
  })
  .then(data => {
    log(data);
  
  })
  .catch(error => {
    console.log(`Ошибочка вышла : ${error}`);
  });
// weather

const getAllUsers = () => 
  fetch("https://test-users-api.herokuapp.com/users/", {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
})
  .then(response => {
    if(response.ok) return response.json();

    throw new Error(`Ошибочка вышла: ${response.statusText}`);
  })
  .then(data => {
    data.data.forEach(user => log(user))
  })
  .catch(error => {
    console.log(`Ошибочка вышла : ${error}`);
  });

  function log(x){
    console.log(x);
  }
  const onClick = () => {
    getAllUsers().then(usersList =>{
      murkup(usersList)
    })
  }
  const createTable = (items) => {
    log(items)
    return items.reduce((murkup,item) => murkup + `<tr>
      <td class = "td td-id" width = "30%">${item.id}</td>
      <td class = "td td-name" width = "30%">${item.name}</td>
      <td class = "td td-age" width = "30%">${item.age}</td>
    </tr>`, '');
  }
  const murkup = usresList => {
    
  }
  //refs.allUsers.addEventListener('click', updateView(refs.listUsers));