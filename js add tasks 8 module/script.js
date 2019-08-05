
'use strict'

// 1 TASK
/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/


const result = document.querySelector(".categories > li");
console.log('Категория:', result.firstChild.textContent);

const result2 = document.querySelector('.categories > li > ul');
console.log('Количество вложенных li:', result2.childElementCount);

const result3 = document.querySelector(".categories > li");
console.log('Категория:', result3.nextElementSibling.firstChild.textContent);

// const result4 = document.querySelector('.categories > li');
const result4 = result3.nextElementSibling;
console.log('Количество вложенных li:', result4.firstElementChild.childElementCount);

// ------------------------------------------------------------------------------------------------------------------------------
// module-08-task-04

/*
  Напишите скрипт для создания галлереи изображений. 
  
  - На вкладке HTML уже есть ul.gallery.
  - Используйте массив объектов для создания тегов img вложенных в li
  - Оформление по вкусу, можно и не делать, достаточно чтобы каждое 
    изображение было 300px по ширине
  - Добавьте все элементы галлереи в ul.gallery
*/

const galleryItems = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat"
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish"
  },
  {
    url:
      "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Two Brown Hen and One Red Rooster"
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running"
  },
  {
    url:
      "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Macaw Birds"
  },
  {
    url:
      "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "2 Lion on Grass Field during Daytime"
  }
];

const newElem = document.querySelector('.gallery');
const draw = galleryItems.map(elem => (newElem.innerHTML += `<li><img src='${elem.url}'</li>`));

// ---------------------------------------------------------------------------------------------------------------------------------
// module-08-task-05

/*
  Есть список с классом .size-filter из произвольного количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию collectInputData(inputs), которая принимает 1 параметр inputs - массив тех инпутов у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/

const checked = document.querySelectorAll('.size-filter input[checked]');
const inputArr = [...checked];

const collectInputData = (inputs) => inputs.map(el => el.getAttribute('value'));
console.log(collectInputData(inputArr));


// ---------------------------------------------------------------------------------------------------------------------------------
// module-08-task-07
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

const root = document.querySelector('#root');

const createBoxes = (num) => {
  // const container = document.createElement('div');
  let width = 30;
  let height = 30;
  for (let i = 0; i < num; i += 1){
    const element = document.createElement('div');
    element.style.width = `${width}px`;
    element.style.height = `${height}px`;
    const rgb = [];
    for (let i = 0; i < 3; i += 1){
      rgb.push(Math.floor(Math.random() * (255 - 0 + 1)) + 0);
    }
    element.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    width += 10;
    height += 10;
    root.appendChild(element);
    // return container;
  }
};

// root.append(container);
createBoxes(7);



