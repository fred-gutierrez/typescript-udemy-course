"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todo-input");
const form = document.querySelector("form");
const list = document.getElementById("todo-list");
form.addEventListener("submit", (e) => {
    const newTodoText = input.value;
    const newLi = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    e.preventDefault();
    newLi.append(newTodoText);
    newLi.append(checkbox);
    list.append(newLi);
    input.value = "";
});
// btn.addEventListener("click", () => {
//   alert(input.value);
//   input.value = "";
// });
