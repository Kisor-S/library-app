const myLibrary = [];
let flag = 0;

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

const theBook = new book('Building a Second Brain', 'Tiago Forte', '272', 'yes');
const aBook = new book('The Mountain is You', 'Brianna Wiest', '248', 'no');

// console.log(theBook.info());
console.log(myLibrary);

const newBookDialog = document.querySelector("dialog");
const newBookButton = document.querySelector(".add-book > button");
const cancelButton = document.querySelector("dialog button");

let cardContainer = document.createElement("div");
cardContainer.classList.add("container");
newBookButton.after(cardContainer);


cancelButton.addEventListener("click",() => {
    newBookDialog.close();
});

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

displayMyLibrary();

function displayMyLibrary() {

    if(flag == 0){
        myLibrary.forEach(function(item){

            let defaultCards = document.createElement("div");
            defaultCards.dataset.index = myLibrary.indexOf(item);
            cardContainer.appendChild(defaultCards).id = myLibrary.indexOf(item);
    
            let showName = document.createElement("h2");
            showName.innerHTML = item.name;
            defaultCards.appendChild(showName);
    
            let showAuthor = document.createElement("p");
            showAuthor.innerHTML = ("Author: " + item.author);
            defaultCards.appendChild(showAuthor);
    
            let showPages = document.createElement("p");
            showPages.innerHTML = ("Pages : " + item.pages);
            defaultCards.appendChild(showPages);

            let showStatus = document.createElement("p");
            if(item.status == 'yes') {
                showStatus.innerHTML = ("Read : Yes");
                defaultCards.appendChild(showStatus);
            }
            else {
                showStatus.innerHTML = ("Read : No");
                defaultCards.appendChild(showStatus);
            }

            let removeButton = document.createElement("button");
            removeButton.innerHTML = "Remove";
            removeButton.dataset.index = myLibrary.indexOf(item)
            defaultCards.appendChild(removeButton);

            removeButton.addEventListener("click", () => {
                cardContainer.removeChild(document.getElementById(myLibrary.indexOf(item)));
                myLibrary.splice(myLibrary.indexOf(item), 1);
            });

            let toggleButton = document.createElement("button");
            toggleButton.innerHTML = "Toggle Read";
            defaultCards.appendChild(toggleButton);

            flag = 1;
        })
    }

    else {
        for(let i = myLibrary.length - 1; i < myLibrary.length; i++){

            let card = document.createElement("div");
            card.dataset.index = i;
            cardContainer.appendChild(card).id = i;
    
            let showName = document.createElement("h2");
            showName.innerHTML = myLibrary[i].name;
            card.appendChild(showName);
    
            let showAuthor = document.createElement("p");
            showAuthor.innerHTML = ("Author: " + myLibrary[i].author);
            card.appendChild(showAuthor);
    
            let showPages = document.createElement("p");
            showPages.innerHTML = ("Pages : " + myLibrary[i].pages);
            card.appendChild(showPages);

            let showStatus = document.createElement("p");
            if(myLibrary[i].status == true) {
                showStatus.innerHTML = ("Read : Yes");
                card.appendChild(showStatus);
            }
            else {
                showStatus.innerHTML = ("Read : No");
                card.appendChild(showStatus);
            }

            let removeButton = document.createElement("button");
            removeButton.innerHTML = "Remove";
            card.appendChild(removeButton);

            removeButton.addEventListener("click", () => {
                cardContainer.removeChild(document.getElementById(i));
                myLibrary.splice(i,1);
            })
        }
    }
}
