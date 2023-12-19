const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem('notes');
}
showNotes();// function used to save created notes when it is refreshed

function updateStorage() {
    localStorage.setItem('notes', notesContainer.innerHTML);
}

createBtn.addEventListener('click', () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = 'delete.jpeg';
    notesContainer.appendChild(inputBox).appendChild(img);
    updateStorage(); //updates the local storage
});

notesContainer.addEventListener('click', function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
});// this function is used for the delete button using the tagName img when it is triggered the whole element linked
//with the image tag will be removed and upadated



// Add an input event listener to notesContainer to update storage when any input occurs
notesContainer.addEventListener('input', function () {
    updateStorage();
});
