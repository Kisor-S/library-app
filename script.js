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
    myLibrary.push({name: book.name, author: book.author, pages: book.pages, status: book.status});
}

addBookToLibrary.prototype = book;

const theBook = new book('Building a Second Brain', 'Tiago Forte', '272', true);
const aBook = new book('The Mountain is You', 'Brianna Wiest', '248', false);

console.log(myLibrary);

const newBookDialog = document.querySelector("dialog");
const newBookButton = document.querySelector("#new-book-button");
const cancelButton = document.querySelector("dialog button");


const addNewBookDialog = document.getElementById("new-book-dialog")
const confirmButton = addNewBookDialog.querySelector("#confirm-button");


newBookButton.addEventListener("click", () => {
    newBookDialog.showModal();
    document.querySelector("#new-book-form").reset();
});

confirmButton.addEventListener("click", () => {

    new book(document.getElementById("title").value, document.getElementById("author").value, 
            document.getElementById("pages").value, document.getElementById("read").checked );
    displayMyLibrary();
    newBookDialog.close();
});

cancelButton.addEventListener("click",() => {
    newBookDialog.close();
});

function displayMyLibrary() {

    const bookList = document.getElementById('book-list');
    bookList.textContent = '';

    myLibrary.forEach((book, index) => {

        let bookCard = document.createElement("div");
        bookCard.dataset.index = index;
        bookCard.classList.add('book-card')
        
        let showName = document.createElement("h2");
        showName.innerHTML = book.name;
        bookCard.appendChild(showName);

        let showAuthor = document.createElement("p");
        showAuthor.innerHTML = ("Author: " + book.author);
        bookCard.appendChild(showAuthor);

        let showPages = document.createElement("p");
        showPages.innerHTML = ("Pages : " + book.pages);
        bookCard.appendChild(showPages);

        let showStatus = document.createElement("p");
        if(book.status == true) {
            showStatus.innerHTML = ("Read : Yes");
            bookCard.appendChild(showStatus);
        }
        else {
            showStatus.innerHTML = ("Read : No");
            bookCard.appendChild(showStatus);
        }

        let toggleButton = document.createElement("button");
        if(book.status == true) {
            toggleButton.innerHTML = "Mark Unread";
        }
        else {
            toggleButton.innerHTML = "Mark Read";
        }
        bookCard.appendChild(toggleButton);

        toggleButton.addEventListener("click", () => {
            if(book.status == true) {
                book.status = false;
                showStatus.innerHTML = ("Read : No");
                toggleButton.innerHTML = "Mark Read";
            }
            else {
                book.status = true;
                showStatus.innerHTML = ("Read : Yes");
                toggleButton.innerHTML = "Mark Unread";
            }
        });

        let removeButton = document.createElement("button");
        removeButton.innerHTML = "Remove";
        bookCard.appendChild(removeButton);

        removeButton.addEventListener("click", () => {
            myLibrary.splice(index, 1);
            displayMyLibrary();
        });

        bookList.appendChild(bookCard);

    })
}

displayMyLibrary();
