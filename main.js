// --------------------------Завдання No1. Переведіть текст вигляду border-left-width до borderLeftWidth
// Напишіть функцію camelize ( str ), яка перетворює рядки виду " my-short-string " на "myShortString ".
// Тобто дефіси видаляються, а всі слова після них отримують велику букву.

// function camelize(str) {
//   let string;
//   string = str
//     .split("-")
//     .map((el, index) => (index = 0 ? el : el[0].toUpperCase()) + el.slice(1))
//     .join("");
//   return string;
// }

// console.log(camelize("background-color"));

// ----------------------------Завдання No2 . Фільтрування по діапазону
// Напишіть функцію filterRange(arr, a, b), яка приймає масив arr, шукає в ньому елементи
// між a та b і віддає масив цих елементів.
// Функція повинна повертати новий масив та не змінювати вихідний.

// function filterRange(arr, a, b) {
//   return arr.filter((el) => el >= a && el <= b);
// }

// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// console.log(filtered);
// console.log(arr);

// ------------------------Завдання No 3 Фільтрування за діапазоном «на місці»
// Напишіть функцію filterRangeInPlace( arr , a, b), яка приймає масив arr і видаляє з нього
// всі значення крім тих, що знаходяться між a та b. Тобто перевірка має вигляд
// a ≤ arr[i] ≤ b.
// Функція повинна змінювати масив, що приймається, і нічого не повертати.

// function filterRangeInPlace(arr, a, b) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] < a || arr[i] > b) arr.splice(i, 1);
//   }

//   return arr;
// }
// let arr = [5, 3, 8, 1];
// let filtered = filterRangeInPlace(arr, 1, 4); // видалені числа поза діапазоном 1..4
// console.log(filtered);
// console.log(arr);

// ----------------------------------Завдання No 4. Сортувати у порядку за зменшенням

// function sortArr(arr) {
//   return arr.sort((a, b) => b - a);
// }

// let arr = [5, 2, 1, -10, 8];
// console.log(sortArr(arr));

// ----------------------------------Завдання No 5. Скопіювати та відсортувати масив
// Ми маємо масив рядків arr. Потрібно отримати відсортовану копію, але залишити arr незміненим.
// Створіть функцію copySorted(arr), яка повертатиме таку копію.

// function copySorted(arr) {
//   return arr.slice().sort();
// }

// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// console.log(sorted); // CSS, HTML, JavaScript
// console.log(arr); // HTML, JavaScript, CSS (без змін)

// ---------------------------Завдання No 6. Створити калькулятор, що розширюється .
// Створіть функцію Calculator, яка реалізує функціонал калькулятора.

// function count() {
//   const num1 = parseFloat(prompt("Enter the first number: "));
//   const operator = prompt(
//     "Enter operator to perform the calculation ( either +, -, * or / ): "
//   );
//   const num2 = parseFloat(prompt("Enter the second number: "));

//   let result;

//   if (operator == "+") {
//     result = num1 + num2;
//   } else if (operator == "-") {
//     result = num1 - num2;
//   } else if (operator == "*") {
//     result = num1 * num2;
//   } else {
//     result = num1 / num2;
//   }

//   window.alert(" Result is" + result);
// }

// count();

// -------------------------------------Завдання No 7. Трансформувати на масив імен
// Ви маєте масив об'єктів user, і в кожному з них є user.name. Напишіть код, який
// перетворює їх на масив імен.

// console.log(Object.keys(obj)

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let users = [vasya, petya, masha];

// let names = users.map((el) => el.name); /* ... ваш код */

// console.log(names); // Вася, Петя, Маша

// ------------------------Завдання No 8. Відсортувати користувачів за віком
// Напишіть функцію sortByAge(users), яка приймає масив об'єктів із властивістю age та
// сортує їх за ним.

// let vasya = { name: " Вася ", age: 25 };
// let petya = { name: " Петя ", age: 30 };
// let masha = { name: " Маша ", age: 28 };

// let arr = [vasya, petya, masha];

// function sortByAge(arr) {
//   arr.sort((a, b) => a.age - b.age);
// }

// sortByAge(arr);

// // тепер : [ vasya , masha , petya ]
// console.log(arr[0].name); // Вася
// console.log(arr[1].name); // Маша
// console.log(arr[2].name); // Петро

// ----------------------------Завдання No 9. Отримати середній вік
// Напишіть функцію getAverageAge(users), яка приймає масив об'єктів із властивістю age
// та повертає середній вік.

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };
// let arr = [vasya, petya, masha];

// const getAverageAge = (users) => {
//   return users.reduce((total, user) => total + user.age, 0) / users.length;
// };
// console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

// Завдання No 10. Залишити унікальні елементи масиву
// Нехай arr – масив рядків.
// Напишіть функцію unique(arr), яка повертає масив, що містить лише унікальні елементи arr.
// Наприклад:

// const unique = (arr) => {
//     return arr.filter((el, index, array) => array.indexOf(el) === index);
// };
// let strings = [
//   "кришна",
//   "кришна",
//   "харе",
//   "харе",
//   "харе",
//   "харе",
//   "кришна",
//   " кришна ",
//   ":-O",
// ];
// console.log(unique(strings)); // кришна, харе, :-O

// ----------------------------Завдання No 11. Фільтрування унікальних елементів масиву
// Допустимо, у нас є масив arr.
// Створіть функцію unique(arr), яка поверне масив унікальних значень масиву arr, що не повторюються.
// Наприклад:
// function unique(arr) {
//     return Array.from(new Set(arr))
// }

// або через spread
// function unique(arr) {
//   return [...new Set(arr)];
// }
// let values = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];
// console.log(unique(values)); // Hare,Krishna,:-O
// // PS Тут ми використовуємо рядки, але значення може бути будь-якого типу.
// // PPS Використовуйте Set для збереження унікальних значень.

// ------------------------------Завдання No 12. Чи незалежні лічильники?
// Тут ми робимо два лічильники: counter і counter2, використовуючи ту саму функцію makeCounter.
// Вони незалежні? Що покаже другий лічильник? 0,1 чи 2,3 чи щось ще?

// Буде також //0,1 так як в counter різне лексичне оточення і тому різні свої ссилки на функцію, до якої вони ссилаються

// function makeCounter() {
//   let count = 0;
//   return function () {
//     return count++;
//   };
// }
// let counter = makeCounter();
// let counter2 = makeCounter();
// console.log(counter()); // 0
// console.log(counter()); // 1
// console.log(counter2()); //? 0
// console.log(counter2()); //? 1

// ------------------------------Завдання No 13. Об'єкт лічильника
// Тут об'єкт лічильника створено за допомогою функції-конструктора.
// Чи працюватиме він? Що покаже?

// Буде працювати. В обох функціях однакове лексичне оточення. Для кожного виклику make Counter() створюється нове лексичне оточення функції зі своїм власним count

// function Counter() {
//   let count = 0;
//   this.up = function () {
//     return ++count;
//   };
//   this.down = function () {
//     return --count;
//   };
// }
// let counter = new Counter();
// console.log(counter.up()); //? 1
// console.log(counter.up()); //? 2
// console.log(counter.up()); //? 3
// console.log(counter.up()); //? 4
// console.log(counter.down()); //? 3
// console.log(counter.down()); //? 2

// -------------------Завдання No 14. Обчислити факторіал
// Факторіал натурального числа – це число, помножене на себе мінус один, потім на себе
// мінус два, і так далі до 1. Факторіал n позначається як n!
// Визначення факторіалу можна записати як:

// n! = n * (n - 1) * (n - 2) * ... * 1

// Приклади значень для різних n:
// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// Завдання – написати функцію factorial(n), яка повертає n!, використовуючи рекурсію.
// alert( factorial(5) ); // 120
// PS Підказка: n! можна записати як n*(n-1)! Наприклад: 3! = 3 * 2! = 3 * 2 * 1! = 6

// function factorial(n) {
//   let product = 1;
//   while (n > 1) {
//     product *= n;
//     n--;
//   }
//   return product;
// }
// або через цикл
// function factorial(n) {
//   let i,
//     product = 1;
//   for (i = 2; i <= n; i++) product *= i;
//   return product;
// }
// console.log(factorial(5));
