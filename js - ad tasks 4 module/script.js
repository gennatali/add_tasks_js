'use strict'

//FIFTH TASK
/*
  Напиши функцию countTotalSalary(salaries).
  Функция получает объект зарплат и считает общую сумму запрплаты работников.
  Возвращает общую сумму зарплаты.
  Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата"
*/
// const countTotalSalary = (salaries) => {
//     const salary = Object.values(salaries);
//     let total = 0;
//     for (let key of salary){
//       total += key;
//     }
//     return total;
//   }
//   // Вызовы функции для проверки
//   console.log(countTotalSalary({})); // 0
//   console.log(
//     countTotalSalary({
//       mango: 100,
//       poly: 150,
//       alfred: 80
//     })
//   ); // 330
//_____________________________________________________________________________________________________________________________

//SIXTH TASK
/*
  Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя ключа. 
  Возвращает массив значений определенного поля prop из каждого объекта в массиве
*/
// const users = [
//   { name: 'Poly', age: 7, mood: 'happy' },
//   { name: 'Mango', age: 4, mood: 'blissful'},
//   { name: 'Ajax', age: 3, mood: 'tired' }
// ];
// const getAllPropValues = (arr, prop) => {
//   let result = [];
//   for(let key of arr)  {
//     if(key[prop] !== undefined){
//       result.push(key[prop]);
//     }
//   }
//   return result;
// }
// // Вызовы функции для проверки
// console.log(getAllPropValues(users, 'name')); // ['Poly', 'Mango', 'Ajax']
// console.log(getAllPropValues(users, 'mood')); // ['happy', 'blissful', 'tired']
// console.log(getAllPropValues(users, 'active')); // []
//_____________________________________________________________________________________________________________________________

//SEVENTH TASK
/*
* Есть два массива names и prices с именами и ценами товаров.
* Напишите функцию combine(names, prices), которая получает эти два массива и возвращает массив объектов со свойствами name и price. 
*/

// const products = (namesArr, pricesArr) => {
//   let productsList = [];
//   let product = {};
//   for (let i = 0; i < namesArr.length; i += 1){
//     product = {name: namesArr[i], price: pricesArr[i]};
//     productsList.push(product);
//   }
//   return productsList;
// }

// const names = ['Радар', 'Сканер', 'Дроид', 'Захват', 'Двигатель', 'Топливный бак'];
// const prices = [1000, 2000, 1500, 2700, 1600, 8000];

// // const products = combine(names, prices);
// console.log(products(names, prices)); // массив объектов со свойствами name и price

