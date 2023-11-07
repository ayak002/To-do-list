import TodoService from "./model.mjs";

const button = document.querySelector(".button-task");
const hiddentext = document.querySelector(".hidden-text");
const textArea = document.querySelector(".task-description");
const unorderedList = document.querySelector(".board ul");

const todoService = new TodoService();

button.addEventListener("click", function () {
  hiddentext.style.display = "block";
  textArea.focus();
});

hiddentext.addEventListener("keydown", async function (event) {
  if (event.key === "Enter") {
    textArea.style.display = "none";
    await todoService.addTodo(textArea.value);

    renderTodos(await todoService.getTodos());
  }
});

document.addEventListener(
  "DOMContentLoaded",
  async function DOMContentLoaded() {
    renderTodos(await todoService.getTodos());
  }
);

function renderTodos(todos) {
  unorderedList.innerHTML = "";

  todos.forEach((todo) => {
    const listItem = document.createElement("li");
    listItem.className = "square-task";
    listItem.textContent = todo.content;
    unorderedList.appendChild(listItem);
  });
}