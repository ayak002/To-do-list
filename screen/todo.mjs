import TodoService from "./modele.mjs";
const button = document.querySelector(".button-task");
const hiddentext = document.querySelector(".hidden-text");
const textArea = document.querySelector(".task-description");
const unorderedList = document.querySelector(".board ul");

<<<<<<< HEAD

=======
>>>>>>> 89f59d3 (import mjs files into html file)
const todoService = new TodoService();

button.addEventListener("click", function () {
  hiddentext.style.display = "block";
<<<<<<< HEAD
  textArea.style.display = "block";
  textArea.value = "";
=======
>>>>>>> 89f59d3 (import mjs files into html file)
  textArea.focus();
});

hiddentext.addEventListener("keydown", async function (event) {
<<<<<<< HEAD
  if (event.key === "Enter") { 
    textArea.style.display = "none";
    await todoService.addTodo(textArea.value);
    renderTodos(await todoService.getTodos());
    textArea.value = "";
  }
});

document.addEventListener("DOMContentLoaded", async function DOMContentLoaded() {
  renderTodos(await todoService.getTodos());
});

unorderedList.addEventListener("click", async function (event) {
  if (event.target.className === "trash-btn") {
  await todoService.deleteTodo(event.target.id);
  renderTodos(await todoService.getTodos());
  }
})

function renderTodos(todos) {
  unorderedList.innerHTML = "";
  
  todos.forEach((todo) => {
    const listItem = document.createElement("li");
    const squareContainer = document.createElement("div");
    const btrash = document.createElement("div");
    btrash.id = todo.id;
    
    squareContainer.className = "square-container";
    listItem.className = "square-task";
    listItem.textContent = todo.content;
    btrash.className = "trash-btn";
   
    unorderedList.appendChild(squareContainer);
    squareContainer.appendChild(listItem);
    listItem.appendChild(btrash);   
=======
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
>>>>>>> 89f59d3 (import mjs files into html file)
  });
}