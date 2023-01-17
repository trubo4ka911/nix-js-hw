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
