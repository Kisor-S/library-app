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
    newBook.close();
});

  