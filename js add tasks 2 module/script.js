/*
  + Напиши функцию-конструктор Account, которая добавляет будущему объекту поля login, email. 
  
  В prototype функции-конструктора добавь метод getInfo(), который выводит в консоль значения полей login и email. 
  
  Обрати внимание, метод всего один, в поле prototype функции-конструктора, а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывесди их в консоль.
*/

const Account = function(login, email) {
  this.login = login;
  this.email = email;
};

Account.prototype.getInfo = function() {
  console.log(`Login: ${this.login}, Email: ${this.email}`);
};
const account = new Account('Mangozedog', 'mango@dog.woof');
console.log(account);

const mango = new Account('blabla', 'bla@bla');
console.log(mango);

console.log(Account.prototype.getInfo); // function
account.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
mango.getInfo();
_______________________________________________________

// module 2 task 2

/*
* Есть массив имен пользователей users
*
* Напиши цикл, который для каждого пользователя будет выводить в консоль
* сообщение в формате [номер элемента] - [значение элемента]. 
* 
* Нумерация должна начинаться с 1. К примеру для первого элемента массива
* с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'
*
* Цикл должен выводить сообщения до тех пор, пока не закончатся элементы массива
*/

const users = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
let i = 0;
let counter = 0;

while (i < users.length) {
  console.log(`${counter += 1} - ${users[i]}`);
  i += 1;
}
________________________________________________________


// module 2 task 3

/*
* Напиши скрипт по автоматизации оплаты процесса гравировки украшений.
* Гравировка одного слова стоит 10 кредитов.
*/

// В переменной message хранится произвольная строка
const message = "Proin sociis natoque et magnis parturient montes mus";
let price = 0;

// Разбить строку в массив, разделитель - пробел, и записать в переменную words
const words = message.split(' ');
console.log(words);

// Выведи в консоли длину массива words
console.log(words.length); // 8

// Вычисли сколько будет стоить гравировка и запиши результат в переменную price
price = words.length * 10;
console.log(price); // 80
_________________________________________________


// module 2 task 4

/*
  Напиши цикл, который просит, через prompt, ввести число больше 100. 
  Если посетитель нажал Cancel - завершить цикл.
  Если посетитель ввёл другое число – попросить ввести ещё раз,  и так далее, пока не введет число больше 100.
  Предполагается, что посетитель вводит только числа,  обрабатывать невалидный ввод вроде строк 'qwerty' не нужно.
*/

let input;
let message = 'enter one more time';

while (true) {
  input = prompt(
    'Введите число больше 100',
  );

  if (input === null) {
    break;
  }

  input = Number(input);
  const isValid = input >= 100;

  if (isValid) {
    break;
  }else{alert(message);}
}

console.log(input);

______________________________________________________________


// module 2 task 5

/*
  Напиши скрипт, который выбирает из массива numbers все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив matched.
  В результате в массиве matched будут все подходяшие числа.
  PS: используй цикл for или for...of и оператор ветвления if
*/

const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
const num = 10;
const matched = [];

for(let key of numbers){
  if(key > num){
    matched.push(key);
  }
  
}
console.log(matched); // [17, 14, 14, 34, 18, 26]
______________________________________________________________



// module 2 task 6


/*
  Напиши скрипт, который проверяет произвольную строку в переменной message и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

const message = "May the force be with you";
let longestWord;

const words = message.split(' ');
longestWord = words[0];
for (let i = 1; i < words.length; i += 1) {
  if(words[i].length > longestWord.length){
    longestWord = words[i]
    ;
  }
}

console.log(longestWord); // 'force'

______________________________________________________



'use strict'
// module 2 task 7
/*
  Создай игру угадай число.
  Есть массив чисел numbers, содержащий "верные" числа.
  Числа в массиве всегда идут по возрастанию, 1-5, 20-40, 2-100 и т.п.
  
  Просим пользователя ввести цифру от самого маленького, до самого большого элемента массива. Эти значения необходимо
  сохранить в переменные min и max. Учтите что массив произвольный, но элементы всегда идут по возрастанию.
  
  Пусть prompt говорит "Введите цифру между x и y", где x и y соотвественно самый маленький и самый большой элемент массива.
  
  Предполагаем что пользователь вводит только числа, проверки на невалидный ввод не делать. 
  Проверить содержит ли в себе массив numbers введенное число.
  
    - Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
    - Есл не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.
*/

const numbers = [12, 15, 25, 37, 41, 62, 74, 83];

let min = numbers[0];
let max = numbers[numbers.length - 1];

let input = Number(prompt(`Enter number from ${min} till ${max}`));

if(numbers.includes(input)){
  alert('Поздравляем, Вы угадали!');
}else(alert('Сожалеем, Вы не угадали!'))



