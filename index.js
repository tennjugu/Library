let myLibrary = []
retrieveLocalStore()
displayBook()

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function toggle(position){
  myLibrary[position].toggle()
  displayBook()
 }

function removeBook(position){
    myLibrary.splice(position, 1)
    displayBook()
}

function bookItem(book){
    let eachBook = document.querySelector(".rightside")
    eachBook.innerHTML = ""

    const eachBookDiv = document.createElement("div")
    eachBookDiv.classList.add("eachBookDiv")

    const bookDetails = document.createElement("div")
    bookDetails.classList.add("book-details")
    

    const bookTitle = document.createElement("h3")
    bookTitle.classList.add("book-title")
    bookTitle.textContent = `${book.title}`
    bookDetails.appendChild(bookTitle)

    const bookAuthor = document.createElement("h5")
    bookAuthor.classList.add("book-author")
    bookAuthor.textContent = `${book.author}`
    bookDetails.appendChild(bookAuthor)

    const bookPages = document.createElement("h6")
    bookPages.classList.add("book-pages")
    bookPages.textContent = `${book.pages} page(s)`
    bookDetails.appendChild(bookPages)


    const readStatus = document.createElement("h6")
    readStatus.classList.add("read-status")
    readStatus.textContent = book.read ? "Read" : "Not Read"


    const bookBtns = document.createElement("div")
    bookBtns.classList.add = "book-btns"
   

    const removeButton = document.createElement("button")
    removeButton.classList.add("remove-button")
    removeButton.textContent = "Remove Book"
    removeButton.addEventListener("click", function() {
        removeBook(bookDetails)
    })
    bookBtns.appendChild(removeButton)


    const toggleButton = document.createElement("button")
    toggleButton.classList.add("toggle-button")
    toggleButton.textContent = "Toggle Status"
    toggleButton.addEventListener("click", function() {
        toggle(bookDetails)
    })
    bookBtns.appendChild(toggleButton)

    bookDetails.appendChild(bookBtns)
    eachBookDiv.appendChild(bookDetails)

    eachBook.appendChild(eachBookDiv)
}


function displayBook(){
    
    for (let i = 0; i < myLibrary.length; i++){
    const book = myLibrary[i]
    bookItem(book)
    
    }
}

function addBookToLibrary() {
    let title = document.querySelector("#title").value
    let author = document.querySelector("#author").value
    let pages = document.querySelector("#pages").value
    let read = document.querySelector("#read").checked

    let newEntry = new Book(title, author, pages, read)
    myLibrary.push(newEntry)
    createLocalStore()
    displayBook()
}


let form = document.querySelector(".book-form")
form.addEventListener("submit", function(event){
    event.preventDefault()
    addBookToLibrary()  
    form.reset()
})


function createLocalStore() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary))
}

function retrieveLocalStore() {
    myLibrary = JSON.parse(localStorage.getItem('myLibrary')) || []
}
