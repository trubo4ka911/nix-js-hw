// Знайдіть координати точок щодо вікна браузера
// Нижче розташовується код документа із зеленим «полем».
// Використовуйте JavaScript для пошуку координат кутів, позначених стрілками.
// У документі вже реалізована функціональність, коли при натисканні на будь-якому місці показуються відповідні координати.
// Клацніть будь-де для отримання координат у контексті вікна.
// Це для тестування, щоб перевірити результат, який ви отримали за допомогою JavaScript.

let fieldCoords = field.getBoundingClientRect();

let answer = [
  [fieldCoords.left, fieldCoords.top],
  [fieldCoords.right, fieldCoords.bottom],
  [fieldCoords.left + field.clientLeft, fieldCoords.top + field.clientTop],
  [
    fieldCoords.left + field.clientLeft + field.clientWidth,
    fieldCoords.top + field.clientTop + field.clientHeight,
  ],
];

console.log(answer.join("  "));
