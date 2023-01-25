/**
* Позиціонує елемент elem щодо елемента anchor відповідно до
значення position.
*
* @param {Node} anchor елемент, біля якого позиціонується інший
елемент
* @param {string} position одне з: top/right/bottom
* @param {Node} elem елемент, який позиціонується
*
* Обидва елементи elem і anchor повинні бути присутніми у
документі

----------TASK 4-------------
// */
// function positionAt(anchor, position, elem) {
//   let anchorCoords = anchor.getBoundingClientRect();
//   if (position === "top") {
//     elem.style.left = anchorCoords.left + "px";
//     elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
//   } else if (position === "right") {
//     elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
//     elem.style.top = anchorCoords.top + "px";
//   } else if (position === "bottom") {
//     elem.style.left = anchorCoords.left + "px";
//     elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
//   }
// }

// TASK 5
function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset,
  };
}

function positionAt(anchor, position, elem) {
  let anchorCoords = getCoords(anchor);

  switch (position) {
    case "top":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
      break;

    case "right":
      elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
      elem.style.top = anchorCoords.top + "px";
      break;

    case "bottom":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
      break;
  }
}
/**
 * Показує нотатку із заданим вмістом на заданій позиції
 * Щодо елемента anchor. */
function showNote(anchor, position, html) {
  let note = document.createElement("div");
  note.className = "note";
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}

// test it
let blockquote = document.querySelector("blockquote");

showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below");
