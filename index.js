//Потрібно вирішити задачу з використанням reduce:
// Даний масив із числами. Знайдіть суму перших N елементів до першого нуля. Приклад: [1, 2, 3, 0, 4, 5, 6] - підсумовуємо перші 3 елементи, оскільки далі стоїть елемент із числом 0.

// const numbersArray = [0, 1, 2, 3, 0, 4, 5, 6];
// let zeroHappened = false;
// const result = numbersArray.reduce((acc, currentValue) => {
//     if (currentValue === 0) zeroHappened = true;
//     if (zeroHappened) return acc;
//
//     return acc + currentValue;
// }, 0)
// console.log(result)

// Доброго дня! Можна ще раз уточнити, коли потрібно використовувати звичайне оголошення функцій, а коли стрілочне. Що частіше використовують? Як краще? Приклад з лекції. Написано, що стрілочною лаконічніше, але особливої різниці я не бачу

// Звичайне оголошення функції
// function classicAdd(a, b, c) {
//     return a + b + c;
// }
//
// // Те саме стрілочною функцією
// const arrowAdd = (a, b, c) => a + b + c;

// Поясніть детальніше, будь ласка, про замикання в функціях callback (з додаткового матеріалу, лекція Репети модуль 4 заняття 7).

// function makeCounter () {
//     let counter = 0;
//
//     return function () {
//         console.log(test)
//         return ++counter;
//     }
// }
//
// const counter1 = makeCounter();
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log('')
// const counter2 = makeCounter();
// console.log(counter2())
// console.log(counter2())

// Поясніть будьласка що саме робить constructor і що буде якщо записувати змінні поза цю структуру
// class User {
//     constructor(name) {
//         this.name = name;
//     }
// }
//
// const person = new User('Mike');
// console.log(person)

// Поясніть будьласка коли саме необхідно використовувати return, тобто як визначити чи необхідно щоб функція щось повертала, і що мається на увазі що вона щось повертає

// function sayHello (name) {
//     console.log(`Hello. My name is ${name}`)
// }
//
// sayHello('Mike')
// // Функція повертає якесь значення
// const arrowAdd = (a, b, c) => a + b + c;
// const obj = {
//     result: arrowAdd(4, 2, 2)
// }

// const students = [
//     { name: "Манго", courses: ["математика", "фізика"] },
//     // { name: "Полі", courses: ["інформатика", "математика"] },
//     // { name: "Ківі", courses: ["фізика", "біологія"] },
// ];
//
// // console.log(students.map(student => student.courses))
// // [['математика', 'фізика'], ['інформатика', 'математика'], ['фізика', 'біологія']]
//
// console.log(students.flatMap(student => {
//     return student.courses // приховані дії, що забираються елементи з результату, який ми повертаємо
// }))
// // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];

// reduce example
// const hello = 'Hello';
// const splittedHello = hello.split('') // ['H', 'e', 'l', 'l', 'o']
//
// const result = splittedHello.reduce((acc, currentValue) => acc + currentValue, '')

// Більше про колбек функції та використоння this. Дякую)
// function greet(name) {
//     console.log(`Ласкаво просимо ${name}.`);
// }
//
// // Функція вищого порядку
// function registerGuest(name, callback) {
//     console.log(`Реєструємо гостя ${name}.`);
//     callback(name);
// }
//
// registerGuest("Манго", greet);

// const user = {
//     name: 'Andi',
//     sayHello () {
//         console.log(`Hello! My name is ${this.name}`)
//     }
// }
//
// const user2 = {
//     name: 'Anton'
// }
// user2.sayHello = user.sayHello
//
// user2.sayHello()

// function expression and func declaration

// function declaration
// function sayHi () {
//     console.log('Hello!')
// }
//
// /* .... */
//
// const sayHiCopy = sayHi;
// sayHi();
// sayHiCopy();


// function MyFan(param = {}) {
//     // const this = {}
//     console.log(param);
//     const { name, age, country } = param;
//     this.name = name;
//     this.age = age;
//     this.country = country;
//     // return this
// }
// MyFan.prototype.myFanTwo = function(countryValue) {
//     this.country = countryValue;
// }
//
// MyFan.prototype.hello = function () {
//     console.log(`my name is ${this.name}`);
//     console.log(`i have ${this.age}`);
//     console.log(`I am from  ${this.country}`);
// };
//
// let myProfile = new MyFan({
//     name: "Mango",
//     age: 24,
//     country: "Ukraine",
// });
// myProfile.hello()

// class User {
//     #name;
//     isIdentified = false;
//     constructor(name) {
//         this.#name = name;
//     }
//
//     identify () {
//         /* ... */
//         let success = true;
//         if (success) {
//             this.isIdentified = true;
//         }
//     }
// }
//
// const person = new User('Mike');

// Підкажіть, чи правильно я зрозумів вирішення останньої задачі в модулі 5.2?
// // Example 5 - Toggle
// // Напишіть клас Toggle який приймає об'єкт налаштувань {isOpen: boolean} і оголошує одну властивість on - стан вкл/викл (true/false). За замовчуванням значення властивості on повинно бути false.
// //
class Toggle {
  constructor({ isOpen = false } = {}) {
    this.on = isOpen;
  }

  toggle() {
    this.on = !this.on;
  }
}
const firstToggle = new Toggle({ isOpen: true });
console.group('firstToggle');
console.log(firstToggle.on);
firstToggle.toggle();
console.log(firstToggle.on);
console.groupEnd('firstToggle');

const secondToggle = new Toggle();
console.group('secondToggle');
console.log(secondToggle.on);
secondToggle.toggle();
console.log(secondToggle.on);
console.groupEnd('secondToggle');
