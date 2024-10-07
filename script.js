const myLibrary = [];

function book(name, author, pages, status) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function() {
        return this.name + " by " + this.author + ", "+ this.pages + "pages, " + this.status;
    }
    addBookToLibrary(this);
}

function addBookToLibrary(book) {
    myLibrary.push(`name: ${book.name}, author: ${book.author}, pages: ${book.pages}, status: ${book.status}`);
}

addBookToLibrary.prototype = book;

const theBook = new book('theBook', 'theAuthor', '100', 'read');
const aBook = new book('aBook', 'theAuthor', '100', 'read');

// console.log(theBook.info());
console.log(myLibrary);

const newBookDialog = document.querySelector("dialog");
const newBookButton = document.querySelector(".add-book > button");
const cancelButton = document.querySelector("dialog button");

newBookButton.addEventListener("click", () => {
    newBookDialog.showModal();
});

cancelButton.addEventListener("click",() => {
    newBookDialog.close();
});

const addNewBookDialog = document.getElementById("new-book-dialog")
let title = document.getElementById("title").value;
let author = document.getElementById("author").value;
let pages = document.getElementById("pages").value;
const confirmButton = addNewBookDialog.querySelector("#confirm-button");

confirmButton.addEventListener("click", () => {
    title = document.getElementById("title").value;
    author = document.getElementById("author").value;
    pages = document.getElementById("pages").value;
    console.log(title, author, pages);

    let cardContainer = document.createElement("div");
    cardContainer.classList.add("container");
    newBookButton.after(cardContainer);

    let card = document.createElement("div");
    cardContainer.appendChild(card).className = "card";

    
    newBookDialog.close();
});

