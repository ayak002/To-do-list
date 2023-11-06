const button = document.querySelector(".button-task");
const hiddentext = document.querySelector(".hidden-text");
const textArea = document.querySelector(".task-description");
const board = document.querySelector(".board");
const square = document.createElement("div");

button.addEventListener("click", function () {
  hiddentext.style.display = "block";
  textArea.focus();
});

hiddentext.addEventListener("keydown", async function (event) {
  if (event.key === "Enter") {
    var texts = textArea.value; //copier le texte de la zone de texte

    textArea.style.display = "none"; //enlever l'affichage de la zone de texte lorsque la touche entrée est pressée (tout en gardant ce qui avait écrit)

    const post_response = await fetch("/createtask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: texts }),
    });
    const task = await post_response.json();
    console.log(task);
    console.log(task.content);

    document.addEventListener("DOMContentLoaded", async function () {
    const get_response = await fetch("/showtask", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    const tasks = await get_response.json();
    console.log(tasks);
  });²

    square.className = "square-task";
    square.textContent = task.content;   
    board.appendChild(square);
  }
});