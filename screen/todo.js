const button = document.querySelector(".button-task");
const hiddentext = document.querySelector(".hidden-text");
const textArea = document.querySelector(".task-description");
const board = document.querySelector(".board");
const square = document.createElement("div");

button.addEventListener("click", function() {
    hiddentext.style.display = "block";
});

hiddentext.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {

        var text = textArea.value //copier le texte de la zone de texte
        textArea.style.display = "none"; //enlever l'affichage de la zone de texte lorsque la touche entrée est pressée (tout en gardant ce qui avait écrit)
  
        square.className = "square-task";
        square.textContent = text;
        board.appendChild(square); // Insérer le carré dans le DOM
    }
});