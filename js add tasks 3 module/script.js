// module 3 task 1

/*  Напиши функцию checkNumberType(num)
    Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/

let message = 'even';
let message2 = 'odd'

const checkNumberType = function(num){
  if(num % 2 === 0){
    return message;
  } else {
    return message2;
  }
}

// Вызовы функции для проверки
console.log( checkNumberType(2) ); // 'Even'
console.log( checkNumberType(46) ); // 'Even'
console.log( checkNumberType(3) ); // 'Odd'
console.log( checkNumberType(17) ); // 'Odd'
console.log( checkNumberType(34) ); // 'Odd'
________________________________________________


// module 3 task 2

/*  Напиши функцию formatString(str)
  + Функия принимает на вход строку str
  + Если длина строки не превышает 40 символов, функция возвращает ее. 
  - Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец строки троеточие '...', после чего 
    возвращает укороченную версию.
*/

const formatString = function(str){
  if(str.length <= 40){
    return str;
  } else if (str.length > 40){
    const strNew = str.slice(0, 39) + '...'
    return strNew;
  }
}

// Вызовы функции для проверки
console.log(formatString("Curabitur ligula sapien, tincidunt non.")); // вернется оригинальная строка
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")); // вернется форматированная строка
console.log(formatString("Curabitur ligula sapien.")); // вернется оригинальная строка
console.log(formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")); // вернется форматированная строка


________________________________________


// module 3 task 3

/*  Напиши функцию checkForSpam(str)
  Функция принимает 1 параметр str - строку, и проверять ее на содержание слов: spam и sale
  Если нашли зарещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false
  PS: слова могут быть в произвольном регистре
*/

const checkForSpam = function(str){
  let strLower = str.toLowerCase();
    if(~strLower.indexOf('sale') || ~strLower.indexOf('spam')){
    return true;
  }return false;
}

// второй вариант
// const checkForSpam = function(str){
//    let lowerStr = str.toLowerCase();
//     return !!(~lowerStr.indexOf('spam') || ~lowerStr.indexOf('sale'));
// }
// (в return читается - верни !! - true - если найдено, иначе - false !)

// Вызовы функции для проверки
console.log( checkForSpam('Latest technology news') ); // false
console.log( checkForSpam('JavaScript weekly newsletter') ); // false
console.log( checkForSpam('Get best sale offers now!') ); // true
console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true


___________________________________________________


// module 3 task 4

/* Написать функцию, getPx(str) 

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да, 
  возвращать только числовую составляющую, к примеру 10.
    
  Если была передана не строка, функция возвращает null.
*/

const getPx = function(str){
  if(typeof str === 'string'){
    return Number.parseInt(str) && Number.parseFloat(str)
  } else {
    return null;
  }
}

// Вызовы функции для проверки
console.log( getPx("10px") === 10 ); // true
console.log( getPx("10.5") === 10.5 ); // true
console.log( getPx("0") === 0 ); // true
console.log( getPx(-1) ); // null
console.log( getPx(10) ); // null


____________________________________________________



// module 3 task 5

/* Напиши фукнцию findLongestWord(str), которая принимает 
  параметром произвольную строку и возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы, символы букв и цифр!
*/


const findLongestWord = function (str) {
    let strArr = str.split(' ');
    let longestWord = strArr[0];
    for (let i = 1; i < strArr.length; i += 1) {
        if (strArr[i].length > longestWord.length) {
            longestWord = strArr[i];
        }
    }
    return longestWord;
}

// Вызовы функции для проверки
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'
console.log(findLongestWord("Google do a roll")); // 'Google'
console.log(findLongestWord("May the force be with you")); // 'force'

________________________________________________________



// module 3 task 6
/*  
  Напиши функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/

const findLargestNumber = function (numbers) {
    let largestNumber = numbers[0];
    for (let i = 1; i < numbers.length; i += 1) {
        if (numbers[i] > largestNumber) {
            largestNumber = numbers[i];
        }
    }
    return largestNumber;
}
// Вызовы функции для проверки
console.log(findLargestNumber([1, 2, 3])); // 3
console.log(findLargestNumber([27, 12, 18, 5])); // 27
console.log(findLargestNumber([31, 128, 14, 74])); // 128

_____________________________________________________


// module 3 task 7

/*   Есть массив уникальных чисел uniqueNumbers.
  Написать функцию, addUniqueNumbers(...), которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqueNumbers только уникальные, а те которые в массиве уже есть игнорирует.
*/


const uniqueNumbers = [2, 1, 4, 9];

const addUniqueNumbers = function (...args) {
    for (let key of args) {
        if (!uniqueNumbers.includes(key)) {
            uniqueNumbers.push(key);
        }
    }

}

// Вызовы функции для проверки
addUniqueNumbers(1, 2, 3);
console.log( uniqueNumbers); // [2, 1, 4, 9, 3]
addUniqueNumbers(12, 2, 3, 19);
console.log( uniqueNumbers); // [2, 1, 4, 9, 3, 12, 19]
addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
console.log(uniqueNumbers); // [2, 1, 4, 9, 3, 12, 19, 5, 8]
_____________________________________________________


// module 3 task 8

/*  Напиши функцию filterFromArray(arr), которая объявляет 1 параметр, исходный массив arr.
  При вызове функции, первым аргументом всегда будет массив чисел, за которым следуют один или несколько аргументов, тоже чисел. 
  Функция возвращает новый массив, который содержит только те элементы исходного массива, которые не совпадают 
  ни с одним из числовых аргументов.
*/

const filterFromArray = (arr, ...args) => {
    let result = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (!args.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
};

// Вызовы функции для проверки
console.log(filterFromArray([1, 2, 3, 4, 5], 2, 4)); // [1, 3, 5]
console.log(filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)); // [12, 8, 17]

