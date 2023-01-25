// Завдання No1. Створіть календар у вигляді таблиці
// Напишіть функцію createCalendar(elem, year, month).

function createCalendar(elem, year, month) {
  let mon = month - 1;
  let d = new Date(year, mon);

  let table =
    "<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>";

  for (let i = 0; i < getDay(d); i++) {
    table += "<td></td>";
  }
  while (d.getMonth() == mon) {
    table += "<td>" + d.getDate() + "</td>";
    if (getDay(d) % 7 == 6) {
      table += "</tr><tr>";
    }
    d.setDate(d.getDate() + 1);
  }
  if (getDay(d) != 0) {
    for (let i = getDay(d); i < 7; i++) {
      table += "<td></td>";
    }
  }
  table += "</tr></table>";
  elem.innerHTML = table;
  //   console.log(table);
}

function getDay(date) {
  let day = date.getDay();
  if (day == 0) day = 7;
  return day - 1;
}
createCalendar(calendar, 2012, 07);

// Завдання No2. Створити повідомлення
// Напишіть функцію showNotification(options) , яка створює повідомлення: <div class="notification"> із заданим вмістом. Повідомлення має автоматично зникнути через 1,5 секунди.

function showNotification({ top = 0, right = 0, className, html }) {
  /* your code */
  document.body.insertAdjacentHTML(
    "afterbegin",
    `<div id="js" 
    class="notification ${className}" 
    style="top: ${top}px; right: ${right}px ">${html}</div>`
  );
  setTimeout(() => document.getElementById("js").remove(), 1500);
}

// test it
let i = 1;
setInterval(() => {
  showNotification({
    top: 10,
    right: 10,
    html: "Hello " + i++,
    className: "welcome",
  });
}, 2000);

// Завдання No3-6 в папках

// Завдання No7. Який обробник запуститься?

// У змінній button знаходиться кнопка. Спочатку на ній немає обробників.
// Який із обробників запуститься? Що буде виведено під час кліку після виконання коду?

const button = document.querySelector(".hi");

button.addEventListener("click", () => alert("1")); //спрацює
button.removeEventListener("click", () => alert("1")); //Чи не спрацює,т.к. в removeEventListener передається нова, інша функція. Так як функція це об'єкт, то нам треба зберегти і передати на неї посилання.
button.onclick = () => alert(2); //спрацює незалежно від addEventListener

console.log(button);

// Завдання No 9. Створити меню, що розкривається.
// Створити меню, яке натискання відкривається або закривається.
// P. S. HTML / CSS вихідного документа можна і потрібно міняти.

let menu = document.getElementById("sweet-list");
let title = menu.querySelector(".title");

title.onclick = function () {
  menu.classList.toggle("open");
};

// Завдання No11. Додайте пункт до списку, що випадає

// Є <select>:

// <select id="genres">
// <option value="rock">Рок</option>
// <option value="blues" selected>Блюз</option>
// </select>

// Використовуючи JavaScript:
// 1. Виведіть значення та текст вибраного пункту.
let selectedOption = genres.options[genres.selectedIndex];
// 2. Додайте пункт: <option value="classic">Класика</option>.
let newOption = new Option("Классика", "classic");
genres.append(newOption);
// 3. Зробіть його вибраним.
newOption.selected = true;
