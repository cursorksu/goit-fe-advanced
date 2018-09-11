"use strict";
const articleElm = document.querySelector('article');
const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-1.com'
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-2.com'
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text: "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-3.com'
  }
];


const createCardImg = (imgLink) => {
  const img = document.createElement('img');
  img.classList.add('post__image');
  img.setAttribute('src', imgLink);
  img.setAttribute('alt','post image');
  return img
}
const createPostTitle = (name) => {
  const title = document.createElement('h2');
  title.classList.add('post__title');
  title.textContent = name;
  return title
}
const createPostText = (textCont) => {
  const text = document.createElement('p');
  text.classList.add('post__text');
  text.textContent = textCont;
  return text
}
const createPostButton = (link) => {
  const button = document.createElement('a');
  button.classList.add('button');
  button.setAttribute('href',link);
  button.textContent = 'Read more';
  return button
}
const createPostCard = ({img, title, text, link}) => {
  const postCard = document.createElement('div');
  postCard.classList.add('post');
  postCard.append(createCardImg(img), createPostTitle(title), createPostText(text), createPostButton(link));
 
  return postCard
}
//Патерн использования базы данных для создания набора карточек
//1) Создаем функцию, принимающую список коллекцию объектов и 
//возвращаюшую на каждом объекте результат вызова функции, создающей карточку
const createPostArr = posts => {
  const postBlock = posts.map(post => createPostCard(post));
  console.log(postBlock)
  return postBlock;
}
//2) Присваиваем переменной результат вызова функции, создающей коллекцию
const postsArr = createPostArr(posts);
//3) Вешаем на выбранный элемент коллекцию, распыляя ее 

articleElm.append(... postsArr);
/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/
