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

// // через слайс гарно якщо отримуєш тільки прогнозований один символ попереду
// function extractCurrencyValue(str) {
//   return +str.slice(1);
// }

// // через регулярний вираз отримуєш число без значення де стоїть знак чи слово
// function extractCurrencyValue(str) {
//   return str.replace(/[^.\d]+/g, "").replace(/^([^\.]*\.)|\./g, "$1");
// }

// console.log(extractCurrencyValue("$120"));
// console.log(extractCurrencyValue("$120.0834"));
// console.log(extractCurrencyValue("uah120"));
// console.log(extractCurrencyValue("uah120.0834"));
// console.log(extractCurrencyValue("120.0834lat"));

// ---------------------------------Завдання No10. Сума введених чисел
// Напишіть функцію sumInput( ), яка:
// • Просить користувача ввести значення, використовуючи prompt та зберігає їх у масив.
// • Закінчує запитувати значення, коли користувач введе не числове значення,
// порожній рядок або натисне «Скасувати».
// • Підраховує та повертає суму елементів масиву.
// PS Нуль 0 – вважається числом, не зупиняйте введення значень під час введення «0».

// без масиву код коротче, а результат той же
// function sumInput() {
//   let sum = 0;

//   while ((c = parseFloat(prompt("Введіть число:")))) {
//     sum += c;
//   }
//   alert("Сума = " + sum);
//   return console.log(sum);
// }

// function sumInput() {
// let numbers = [];

// while (true) {
//   let value = prompt("Введіть число", 0);

//   if (value === "" || value === null || !isFinite(value)) break;

//   numbers.push(+value);
// }

// let sum = 0;
// for (let number of numbers) {
//   sum += number;
// }
// return sum;
// }

// console.log(sumInput());

// --------------------------------Завдання No11. Чи обов'язковий "else"?
// Наступна функція повертає true якщо параметр age більше 18.
// В іншому випадку вона запитує підтвердження через confirm і повертає його результат:
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     // ...
//     return confirm(" Батьки дозволили ?");
//   }
// }
// Чи буде ця функція працювати якось інакше, якщо прибрати else ?

// результат той самий. Так само як я робила рефакторинг в завданні 8

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   // ...
//   return confirm(" Батьки дозволили ?");
// }

// console.log(checkAge(21));

// -----------------------------------Завдання No12. Перепишіть функцію за допомогою оператора '?' або '||'

// Наступна функція повертає true якщо параметр age більше 18.
// В іншому випадку вона ставить питання confirm і повертає його результат.
// function checkAge (age) {
// if (age > 18) {
// return true;
// } else {
// return confirm( ' Батьки дозволили ?');
// }
// }
// Перепишіть функцію, щоб вона робила те саме, але без if , в один рядок.
// Зробіть два варіанти функції checkAge:
// Використовуючи оператор?
// Використовуючи оператор ||

// function checkAge(age) {
//   return age > 18 ? true : " Батьки дозволили ?";
// }

// function checkAge(age) {
//   return age > 18 || " Батьки дозволили ?";
// }

// console.log(checkAge(21));
// console.log(checkAge(6));

// -----------------------------------Завдання No13. Функція min ( a, b)
// Напишіть функцію min(a,b), яка повертає менше чисел a і b.
// Приклад викликів:
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1
// **НЕ МОЖНА ВИКОРИСТОВУВАТИ СТАНДАРТНІ ФУНКЦІЇ ВИЗНАЧЕННЯ
// МАКСИМАЛЬНОГО ТА МІНІМАЛЬНОГО ЗНАЧЕНЬ

// const min = (a, b) => {
//   if (a < b) {
//     return a;
//   }
//   return b;
// };
// const min = (a, b) => {
//   return a < b ? a : b;
// };
// console.log(min(2, 5));

// ----------------------------Завдання No14. Функція pow( x, n )
// Напишіть функцію pow(x,n ), яка повертає x до ступеня n. Інакше кажучи, множить x на
// себе n разів і повертає результат.
// pow ( 3, 2) = 3 * 3 = 9
// pow ( 3, 3) = 3 * 3 * 3 = 27
// pow ( 1, 100) = 1 * 1 * ... * 1 = 1

// Створіть сторінку, яка запитує x та n, а потім виводить результат pow(x,n ).
// PS У цьому функція має підтримувати лише натуральні значення n, тобто. цілі від 1 та вище.
// **НЕ МОЖНА ВИКОРИСТОВУВАТИ СТАНДАРТНУ ФУНКЦІЮ ПРИВЕДЕННЯ ДО СТУПЕНЮ ТА ВІДПОВІДНИЙ ОПЕРАТОР

// const pow = (x, n) => {
//   let result = x;

//   for (let i = 1; i < n; i++) {
//     result *= x;
//   }
//   return result;
// };

// let x = prompt("x?", "");
// let n = prompt("n?", "");

// n < 1
//   ? alert(`Степень ${n} не поддерживается, используйте натуральное число`)
//   : alert(pow(x, n));

// Завдання No15. ------------------------Перепишіть за допомогою функції-стрілки
// Замініть код Function Expression стрілочною функцією:
// function ask(question, yes, no) {
// if (confirm(question)) yes( )
// else no( );
// }
// ask (
// "Ви згодні?",
// function ( ) { alert ("Ви погодилися."); },
// function ( ) { alert ("Ви скасували виконання."); }
// );

// const ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };
// ask(
//   "Ви згодні?",
//   function () {
//     alert("Ви погодилися.");
//   },
//   function () {
//     alert("Ви скасували виконання.");
//   }
// );

// -------------------------------Завдання No16. Робінзон Крузо
// Ваш місячний дохід - 3333 папуг. Ви хочете купити у мавп пальму за 8000 папуг.
// Обчисліть, за який проміжок часу ви назбираєте на пальму, за умови, що ваші щомісячні
// витрати становлять 1750 папуг.

// function money(salary, price, monthCosts) {
//   let goal;
//   return Math.ceil((goal = price / (salary - monthCosts))) + " місяців";
// }
// console.log(money(3333, 8000, 1750));

// ----------------------------Завдання No17. Запитання користувачеві
// 1. Запитати користувача 10 чисел
// 2. Якщо число
// - Позитивне -> нічого не робити
// - негативна -> отримати їх суму
// 3. Вивести суму негативних чисел, які запровадив користувач
// ВАЖЛИВО: за умовами завдання у вашому коді має бути лише 1 prompt та тільки 1 цикл for

// function getResult() {
//   let numbers = [];

//   while (true) {
//     let value = prompt("Введіть число", 0);

//     if (value === "" || value === null || !isFinite(value)) break;

//     numbers.push(+value);
//   }

//   let sum = 0;
//   for (let number of numbers) {
//     if (number < 0) {
//       sum += number;
//     }
//   }
//   console.log(sum);
//   return sum;
// }

// getResult();
