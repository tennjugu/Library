const myLibrary = [];




function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}
Book.prototype.toggle = function(){
    this.read = !this.read
}

function toggle(position){
    myLibrary[position].toggle()
    displayBook()
}

function displayBook(){
    let eachBook = document.querySelector(".rightside")
    eachBook.innerHTML = ""
    for (let i = 0; i < myLibrary.length; i++){
    let book = myLibrary[i]
    let eachBookDiv = document.createElement("div")
    eachBookDiv.classList.add = "eachBookDiv"
    localStorage.setItem("title", book.title)
    localStorage.setItem("author", book.author)
    localStorage.setItem("pages", book.pages)
    localStorage.setItem("read", book.read)
    eachBookDiv.innerHTML = `
        <div class= "book-details"> 
            <h3 class= "book-title">${book.title}</h3>
            <h5 class= "book-author">by: ${book.author}</h5>
            <h6 class = "book-pages">${book.pages} page(s)</h6>
            <h6 class= "read-status">status:  ${book.read ? "Read" : "Not Read"}</h6>
            <div class="book-btns"> 
                <button class="remove-button" onclick="removeBook(${i})">Remove Book</button>
                <button class="toggle-button" onclick="toggle(${i})">Toggle Read</button>
            </div>
        </div>`
    eachBook.appendChild(eachBookDiv)
    }
}


function removeBook(position){
    myLibrary.splice(position, 1)
    console.log(position)
    displayBook()
}

function addBookToLibrary() {
    let title = document.querySelector("#title").value
    let author = document.querySelector("#author").value
    let pages = document.querySelector("#pages").value
    let read = document.querySelector("#read").checked
    let newEntry = new Book(title, author, pages, read)
    myLibrary.push(newEntry)
    // console.log(myLibrary)
    displayBook()
}


let form = document.querySelector(".book-form")
form.addEventListener("submit", function(event){
    event.preventDefault()
    addBookToLibrary()  
    form.reset()
})


function createLocalStore() {
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

function retrieveLocalStore() {
    myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
    displayBook();
}
retrieveLocalStore()