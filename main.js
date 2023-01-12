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
