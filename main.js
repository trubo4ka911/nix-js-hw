// // ------------------------------Завдання No1. Перевірка на пустоту
// // Напишіть функцію isEmpty(obj) , яка повертає true , якщо об'єкт не має властивостей, інакше false .
// // const order = {};
// // const emptyOrder = !Object.keys(order).length;

// // через метод Object.keys()

// function isEmpty(value) {
//   const emptyValue = !Object.keys(value).length;
//   return emptyValue;
// }
// // або
// function isEmpty(value) {
//   const emptyValue = Object.keys(value).length === 0;
//   return emptyValue;
// }
// //  через порівняння строк
// function isEmpty(value) {
//   const emptyValue = JSON.stringify(value) === "{}";
//   return emptyValue;
// }

// // через for in
// function isEmpty(value) {
//   for (let key in value) {
//     if (value.hasOwnProperty(key)) {
//       return false;
//     }
//   }
//   return true;
// }

// // TEST
// const order = { name: "Nick", age: 18 };
// const order2 = {};
// console.log(isEmpty(order));
// console.log(isEmpty(order2));

// //----------------------------------Завдання No2. Помножуємо всі числові властивості на 2
// Створіть функцію multiplyNumeric(obj) , яка збільшує всі числові властивості об'єкта obj на 2 .
// Зверніть увагу, що multiplyNumeric не потрібно нічого повертати. Слід безпосередньо змінювати об'єкт.
// PS Використовуйте typeof, щоб перевірити, чи значення властивості числове.

// let trip = {
//   country: "Spain",
//   people: 2,
//   price: 100,
// };
// console.log(trip);

// // варінт 1 через typeof порівняння

// const multiplyNumeric = (obj) => {
//   for (let key in obj) {
//     if (typeof obj[key] == "number") {
//       obj[key] *= 2;
//     }
//   }
// };

// // варіант 2 через фільтрування значень

// const multiplyNumeric = (obj) => {
//   Object.keys(obj)
//     .filter((i) => typeof obj[i] == "number")
//     .map((i) => (obj[i] *= 2));
// };

// // варіант 3 через перевірку на NaN

// const multiplyNumeric = (obj) => {
//   for (let key in obj) {
//     if (!isNaN(obj[key])) {
//       obj[key] *= 2;
//     }
//   }
// };

// // TEST
// multiplyNumeric(trip);
// console.log(trip);
// multiplyNumeric(trip);
// console.log(trip);

//  ---------------------------- Завдання No3. Введення числового значення
// Створіть функцію readNumber, яка вимагатиме введення числового значення до тих пір,
// поки відвідувач його не введе.
// Також треба дозволити користувачеві зупинити процес введення, відправивши порожній
// рядок або натиснувши "Скасувати". У цьому випадку функція повинна повернути null.

// function getConfirm() {
//   check = true;

//   while (check) {
//     check = false;
//     num = prompt("numbers", "");
//     if (num == null || num == "") {
//       return null;
//     } else if (!isNaN(num)) {
//       return +num;
//     } else {
//       check = true;
//     }
//   }
// }

// console.log(getConfirm());

// // -----------------------------Завдання No4. Випадкове число від min до max
// // Вбудований метод Math.random() повертає випадкове число від 0 (включно) до 1 (але не включаючи 1)
// // Напишіть функцію random(min , max), яка генерує випадкове число з плаваючою точкою
// // від min до max (але не включаючи max).

// function getRandom(min, max) {
//   return Math.random() * (max - min) + min;
// }
// console.log(getRandom(1, 5));

// // -----------------------------Завдання No5. Випадкове ціле число від min до max
// // Напишіть функцію randomInteger( min , max), яка генерує випадкове ціле число від min до max (включно).
// // Будь-яке число з інтервалу min..max має з'являтися з однаковою ймовірністю .
// function getRandomInteger(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(getRandomInteger(1, 5));

// // ------------------------------Завдання No6. Зробити перший символ великим
// // Напишіть функцію ucFirst( str ), яка повертає рядок str із великим першим символом.

// function ucFirst(text) {
//   const letters = text.split("");
//   letters[0] = letters[0].toUpperCase();
//   return letters.join("");
// }

// console.log(ucFirst("вася"));

// // ------------------------Завдання No7. Перевірка на спам
// // Напишіть функцію checkSpam ( str ), яка повертає true, якщо str містить 'viagra ' або 'XXX', а інакше false .
// // Функція повинна бути нечутлива до регістру

// через розбивання на символи та приведення в строку
// function checkSpam(text) {
//   let result;
//   result =
//     text.toLowerCase().includes("viagra") || text.toLowerCase().includes("xxx");
//   return result;
// }

// вбо через регулярний вираз
// const checkSpam = function (text) {
//   return /\b(viagra|xxx)\b/i.test(text);
// };
// // TEST
// console.log(checkSpam("vIagRa"));
// console.log(checkSpam("mail"));
// console.log(checkSpam("see xXx"));

// --------------------------Завдання No8. Усічення рядка
// Створіть функцію truncate(str , maxlength), яка перевіряє довжину рядка str і, якщо вона
// перевершує maxlength, замінює кінець str на "...", так, щоб її довжина дорівнювала maxlength .
// Результатом функції має бути той самий рядок, якщо усічення не потрібно, або, якщо
// необхідно, усічений рядок.

// через slice або substring, один зробила через if else, потім зробила рефакторинг, з substring переписала на тернарний

// function truncate(str, maxLength) {
//   let result;
//   if (str.length <= maxLength) {
//     result = str;
//   } else {
//     result = str.slice(0, maxLength) + "...";
//   }
//   return result;
// }
// function truncate(str, maxLength) {
//   if (str.length > maxLength) {
//     return str.slice(0, maxLength) + "...";
//   }
//   return str;
// }
// function truncate(str, maxLength) {
//   let result;
//   result =
//     str.length <= maxLength
//       ? (result = str)
//       : (result = str.substring(0, maxLength) + "...");
//   return result;
// }
// // TEST
// console.log(truncate( "Ось що мені хотілося б сказати на цю тему:", 20));
// console.log(truncate( "Усім привіт!", 20));

// --------------------------Завдання No9. Виділити число
// Є вартість у вигляді рядка "$120". Тобто спочатку йде знак валюти, а потім число.
// Створіть функцію extractCurrencyValue(str ), яка з такого рядка виділятиме числове
// значення і повертатиме його.
