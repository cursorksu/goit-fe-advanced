"use strict";
/*
  Создайте компонент галлереи изображений следующего вида.
  

    
    🔔 Превью компонента: https://monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2
      
      
    Реализуйте функционал:
      
      - image-gallery есть изначально в HTML-разметке как контейнер для компонента.
    
      - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
        создается динамически при загрузке страницы.
    
      - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
        он содержит ссылку на большое изображение. preview и его элементы, также создаются 
        динамически, при загрузке страницы.
        
      - При клике в элемент preview, необходимо подменить src тега img внутри fullview
        на url из data-атрибута выбраного элемента.
        
      - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.
        
      - Изображений может быть произвольное количество.
      
      - Используйте делегирование для элементов preview.
      
      - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.
      
      - CSS-оформление и имена классов на свой вкус.
      
      
    🔔 Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании
      размер. Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px.
      Подберите изображения одинаковых пропорций.
*/

/*
  Массив объектов с данными для создания компонента выглядит следующим образом.
  Замените пути на соотвествующие вашим, или назовите изображения аналогично.
*/
const fullview = document.querySelector('.fullview')
const preview = document.querySelector('.preview')
const imgLink = document.querySelector('.preview')
const galleryItems = [
  { 
    preview: 'img/pexels-photo-14105-small.jpeg', 
    fullview: 'img/pexels-photo-14105.jpeg', 
    alt: "alt text 1" },
  { 
    preview: 'img/pexels-photo-207273-small.jpeg', 
    fullview: 'img/pexels-photo-207273.jpeg', 
    alt: "alt text 2" },
  { 
    preview: 'img/pexels-photo-228183-small.jpeg', 
    fullview: 'img/pexels-photo-228183.jpeg', 
    alt: "alt text 3" },
  { 
    preview: 'img/pexels-photo-268364-small.jpeg', 
    fullview: 'img/pexels-photo-268364.jpeg', 
    alt: "alt text 4" },
  { 
    preview: 'img/pexels-photo-414720-small.jpeg', 
    fullview: 'img/pexels-photo-414720.jpeg', 
    alt: "alt text 5" },
  { 
    preview: 'img/pexels-photo-530932-small.jpeg', 
    fullview: 'img/pexels-photo-530932.jpeg', 
    alt: "alt text 6" }
];
preview.addEventListener("click", handlerAddActive);


function handlerAddActive(e){
  if(e.target.nodeName !== "IMG")return;
 
  const getLink = e.target.dataset.fullview ;
  const imgFullview = fullview.querySelector('img');
  imgFullview.setAttribute('src', getLink);

  const GaleryList = Array.from(preview.querySelectorAll('img'));
  GaleryList.map(item => item.closest('li').className = '');
  e.target.closest('li').className = 'active';
}
const createImg = ({preview, fullview, alt}) => {
  const img = document.createElement('img');
  img.setAttribute('src', preview);
  img.setAttribute('data-fullview', fullview);
  img.setAttribute('alt', alt);
  return img
}
const createListImg = (img) => {
  const PrewImg = document.createElement('li');
  PrewImg.append(createImg(img));
  return PrewImg
}
//Патерн использования базы данных для создания набора карточек
//1) Создаем функцию, принимающую список коллекцию объектов и 
//возвращаюшую на каждом объекте результат вызова функции, создающей карточку
const createGalery = galleryItems => {
  const galeryItem = galleryItems.map(item => createListImg(item));
  return galeryItem;
}
//2) Присваиваем переменной результат вызова функции, создающей коллекцию
const previewArr = createGalery(galleryItems);
//3) Вешаем на выбранный элемент коллекцию, распыляя ее 

preview.append(... previewArr);
/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Создайте плагин галлереи используя ES6 класс. Добавьте поля и методы класса так, 
  чтобы можно было создать любое количество галлерей на странице. Функционал плагина 
  аналогичный заданию выше.
  
  При создании экземпляра конструктор получает:
    - items - список элементов для preview
    - parentNode - ссылку на DOM-узел в который будут помещены fullview и preview
    - defaultActiveItem - номер активного элемента preview по умолчанию
    
  Тогда создание экземпляра будет выглядеть следующим образом.
*/
/*
new Gallery({
  items: galleryItems,
  parentNode: document.querySelector('.image-gallery'),
  defaultActiveItem: 1
});
*/
/* Далее плагин работает в автономном режиме */