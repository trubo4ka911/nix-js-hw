// Завдання No1. Дочірні елементи в DOM
const firstChild = document.body.firstElementChild;
const children = document.body.children[1];
const secondChild = document.body.lastElementChild.lastElementChild;

console.log(firstChild);
console.log(children);
console.log(secondChild);

// Завдання No2. Сусіди
// Якщо elem – довільний вузол DOM-елемента.
// • Правда, що elem.lastChild.nextSibling завжди дорівнює null ? -Так. Правильно. Елемент elem.lastChild завжди останній і дорівнє null
// • Правда, що elem.children[0].previousSibling завжди дорівнює null? - ні, він повертає вузол попередній вказаному в батьківському елементі childNodes, або null, якщо зазначений вузол перший у своєму батькові.

// Завдання No3. Виділіть ячейки по діагоналі
// Напишіть код, який виділить червоним кольором усі ячейки у таблиці по діагоналі.
// Нумерацію в середині таблиці реалізувати через JS.
// Вам потрібно отримати з таблиці <table> усі діагональні <td> та виділити їх,
// використовуючи код:
// // у змінній td знаходиться DOM-елемент для тега < td >
// td.style.backgroundColor = 'red';

let table = document.querySelector("table");

for (let i = 0; i < table.rows.length; i++) {
  let row = table.rows[i];
  row.cells[i].style.backgroundColor = "red";
}

// Завдання No3. Пошук елементів
// Ось документ із таблицею та формою. Як знайти...
// • Таблицю з id="age-table".
// • Всі елементи label всередині цієї таблиці (їх три).
// • Перший td у цій таблиці (зі словом "Age ").
// • Форму form з ім'ям name = "search".
// • Перший input у цій формі.
// • Останній input у цій формі.

const ageTable = document.querySelector("#age-table");
const ageTableLable = document.querySelectorAll("#age-table label");
const age = table.getElementsByTagName("td")[0];
const form = document.querySelector("form[name='search']");
const input = form.querySelector("input");
const inputs = form.querySelectorAll("input");
const lastInput = inputs[inputs.length - 1];

console.log(ageTable);
console.log(ageTableLable);
console.log(age);
console.log(form);
console.log(input);
console.log(lastInput);

// Завдання No4. Підрахунок нащадків
// Є дерево, структуроване як вкладені списки ul/li.
// Напишіть код, який виведе кожен елемент списку <li>:
// 1. Який у ньому текст (без піддерева)?
// 2. Яка кількість нащадків – всіх вкладених (включаючи глибоко вкладені)?

for (let li of document.querySelectorAll("li")) {
  let title = li.firstChild.data; // отримаєм текстовий вміст списку

  let count = li.getElementsByTagName("li").length; // рахуємо кількість нащадків

  console.log(title + ": " + count);
}

// Завдання No5. Властивість nodeType
// Що виведе код? Та чому?

console.log(document.body.lastChild.nodeType); // 1

// Під час виконання <script> останнім DOM-вузлом є <script>, тому що браузер ще не обробив решту сторінки.

// Завдання No6. Тег у коментарі

// Що виведе код?
// <script>
// let body = document.body;
// body.innerHTML = "<!--" + body.tagName + "-->";
// alert( body.firstChild.data ); //?
// </script>

// let body = document.body;
// body.innerHTML = "<!--" + body.tagName + "-->";
// console.log(body.firstChild.data); // BODY, тому що body.tagName == "BODY"

// Завдання No7 . Де у DOM- ієрархії "document"?
// Дайте відповіді на запитання:
// 1. Об'єктом якого класу є document? - об'єкт класу HTMLDocument
// 2. Яке місце він посідає у DOM-ієрархії? - Якщо подивитися в ланцюжку прототипів за посиланням __proto__ видно, що методи класу знаходяться в prototype конструктора. HTMLDocument.prototype є методи для об'єктів типу document.
// 3. Чи успадковує він від Node чи від Element, чи може від HTMLElement? - від HTMLDocument.prototype

console.log(document.constructor.name); // HTMLDocument
console.log(HTMLDocument.prototype.constructor.name); // HTMLDocument
console.log(HTMLDocument.prototype.__proto__.constructor.name); // Document
console.log(HTMLDocument.prototype.__proto__.__proto__.constructor.name); // Node
console.dir(document);

// Завдання No8. Очистіть елемент
// Створіть функцію clear(elem), яка видаляє весь вміст із elem.
// <ol id="elem">
// <li>Привет</li>
// <li>Мир</li>
// </ol>
const list = document.querySelector("#elem");
function clear() {
  list.innerHTML = "";
  /* ваш код */
}
// clear(); // Очищає список
console.log(list);

// Завдання No9. Чому залишається "aaa"?
// Запустіть цей приклад. Чому виклик remove не видалив текст "aaa"?
// <table id="table">
// aaa
// <tr> <td>Тест</td> </tr>
// </table>
// <script>
// alert(table); // таблиця, як і має бути
// table.remove(); // Чому в документі залишився текст "ааа"?

// </script>

// Всередині <table> не може бути тексту, можуть бути лише табличні теги. Тому браузер показує "aaa" до <table>. Тому, видаляючи таблицю, текст залишається.

// Завдання No10. Створіть список
// Напишіть інтерфейс, щоб створити список.
// Для кожного пункту:
// 1. Запитуйте вміст у користувача за допомогою prompt.
// 2. Створюйте елемент <li> і додайте його до <ul>.
// 3. Процес припиняється, коли користувач натискає Esc або вводить порожній рядок.
// Усі елементи мають створюватися динамічно.
// Якщо користувач вводить HTML-теги – нехай у списку вони показуються як звичайний
// текст.

// let elem = document.createElement("h2");
// let elemText = document.createTextNode("Список");
// elem.appendChild(elemText);
// document.body.appendChild(elem);

// let ul = document.createElement("ul");
// document.body.append(ul);

// while (true) {
//   let data = prompt("Введите текст для элемента списка", "");

//   if (!data) {
//     break;
//   }

//   let li = document.createElement("li");
//   li.textContent = data;
//   ul.append(li);
// }

// Завдання No11. Вставте HTML у список
// Напишіть код для вставки <li>2</li><li>3</li> між двома <li>:
// <ul id="ul">
// <li id="one">1</li>
// <li id="two">4</li>
// </ul>

let target = document.querySelector("#one");

target.insertAdjacentHTML("afterend", "<li>2</li><li>3</li>");
