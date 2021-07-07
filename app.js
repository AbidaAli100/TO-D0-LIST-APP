let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputFeild = document.getElementById("inputField");

addToDoButton.addEventListener("click", function() {
    let paragraph = document.createElement("p");
    paragraph.innerText = inputFeild.value
    toDoContainer.appendChild(paragraph);
})