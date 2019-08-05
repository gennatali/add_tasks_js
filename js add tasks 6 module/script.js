// module 6 task 2
/*  Напиши ES6 класс StringBuilder.
  
  На вход (в конструкторе) он получает один параметр string - строку, которую записывает в свойство _value.
  
  Добавь классу следующие методы:
    - геттер value - возвращает текущее значение поля _value
    - append(str) - получает парметр str (строку) и добавляет ее в конец _value
    - prepend(str) - получает парметр str (строку) и добавляет ее в начало value
    - pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
*/

class StringBuilder {
    constructor(str){
      this._value = str;
    }
  
    get value(){
      return this._value;
    }
  
    append(str){
      return this._value = this.value + str;
    }
  
    prepend(str){
      return this._value = str + this.value;
    }
  
    pad(str){
      return this._value = str + this.value + str;
    }
  }
  
  const builder = new StringBuilder('.');
  console.log(builder);
  
  
  builder.append('^'); 
  console.log(builder.value); // '.^'
  
  builder.prepend('^'); 
  console.log(builder.value); // '^.^'
  
  builder.pad('='); 
  console.log(builder.value); // '=^.^='
  ----------------------------------------------------------------------
  
  
  'use strict'
  
  // module 6 task 3
  
  /* Напиши класс Car с указанными свойствами и методами*/
  
  class Car {
    constructor({
      maxSpeed = 0,
      speed = 0,
      running = false,
      distance = 0
    }) {
      this.speed = speed;
      this.maxSpeed = maxSpeed;
      this.running = running;
      this.distance = distance;
      /*
        Добавь свойства:
          - speed - для отслеживания текущей скорости, изначально 0.
          - maxSpeed - для хранения максимальной скорости 
          - running - для отслеживания заведен ли автомобиль, возможные значения true или false. Изначально false.
          - distance - содержит общий киллометраж, изначально с 0
      */
    }
  
    turnOn() {
      return this.running = true;
      // Добавь код для того чтобы завести автомобиль
      // Просто записывает в свойство running значание true
    }
  
    turnOff() {
      return this.running = false;
      // Добавь код для того чтобы заглушить автомобиль
      // Просто записывает в свойство running значание false
    }
  
    accelerate(spd) {
      if (spd <= this.maxSpeed) {
        return this.speed = spd;
      } else {
        return null
      }
      // Записывает в поле speed полученное значение, при условии что
      // оно не больше чем значение свойства maxSpeed
    }
  
    decelerate(spd) {
      if (spd <= this.maxSpeed && spd > 0) {
        return this.speed = spd;
      } else {
        return null
      }
      // Записывает в поле speed полученное значение, при условии что
      // оно не больше чем значение свойства maxSpeed и не меньше нуля
    }
  
    drive(hours) {
      if (this.turnOn()) {
        return this.distance = hours * this.speed;
      } else if (this.turnOff()) {
        return null;
      }
      // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
      // но только в том случае если машина заведена!
    }
  }
  
  const car = new Car({
    maxSpeed: 100
  });
  console.log(car.turnOn());
  console.log(car.turnOff());
  console.log(car.accelerate(100));
  console.log(car.accelerate(120));
  console.log(car.decelerate(-1));
  console.log(car.decelerate(20));
  console.log(car.drive(2));
  
  --------------------------------------------------------------
  
  
  // module 6 task 4
  /*
  * Добавь к классу Car из предыдущего задания статический
  * метод getSpecs, который принимает объект-машину как параметр
  * и выводит в консоль значения полей maxSpeed, speed, running и distance.
  */
  class Car {
    constructor({
      maxSpeed = 0,
      speed = 0,
      running = false,
      distance = 0
    }) {
      this.speed = speed;
      this.maxSpeed = maxSpeed;
      this.running = running;
      this.distance = distance;
    }
  
    static getSpecs(car){
      return car;
    }
  
    turnOn() {
      return this.running = true;
    }
  
    turnOff() {
      return this.running = false;
    }
  
    accelerate(spd) {
      if (spd <= this.maxSpeed) {
        return this.speed = spd;
      } else {
        return null
      }
    }
  
    decelerate(spd) {
      if (spd <= this.maxSpeed && spd > 0) {
        return this.speed = spd;
      } else {
        return null;
      }
    }
  
    drive(hours) {
      if (this.turnOn()) {
        return this.distance = hours * this.speed;
      } else if (this.turnOff()) {
        return null;
      }
    }
  }
  
  const car = new Car({ maxSpeed: 100 });
  car.turnOn();
  car.accelerate(50);
  car.drive(2);
  
  console.log(Car.getSpecs(car)); // maxSpeed: 100, speed: 50, running: true, distance: 100
  
  -----------------------------------------------------------
  
  
  'use strict'
  
  // module 6 task 5
  /*
  * Добавь классу Car свойство цены автомобиля, назови его сам.
  * Добавь геттер и сеттер value, который будет работать с свойством цены автомобиля.
  */
  
  class Car {
    constructor({
      maxSpeed = 0,
      speed = 0,
      running = false,
      distance = 0,
      price = 0,
    }) {
      this.speed = speed;
      this.maxSpeed = maxSpeed;
      this.running = running;
      this.distance = distance;
      this._price = price;
    }
  
    get value() {
      return this._price;
    }
  
    set value(value) {
      this._price = value;
    }
  
    static getSpecs(car){
      return car;
    }
  
    turnOn() {
      return this.running = true;
    }
  
    turnOff() {
      return this.running = false;
    }
  
    accelerate(spd) {
      if (spd <= this.maxSpeed) {
        return this.speed = spd;
      } else {
        return null
      }
    }
  
    decelerate(spd) {
      if (spd <= this.maxSpeed && spd > 0) {
        return this.speed = spd;
      } else {
        return null;
      }
    }
  
    drive(hours) {
      if (this.turnOn()) {
        return this.distance = hours * this.speed;
      } else if (this.turnOff()) {
        return null;
      }
    }
  }
  
  
  const car = new Car({ maxSpeed: 50, price: 2000 });
  console.log(car.value); // 2000
  
  car.value = 4000;
  console.log(car.value); // 4000
  
  for (const key in car) { 
    console.log(`${key}: ${car[key]}`);
  }
  
  