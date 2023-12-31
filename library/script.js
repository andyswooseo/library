let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function render() {
  let libraryEl = document.querySelector("#library");
  libraryEl.innerHTML = "";
  for(let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.setAttribute("class", "book-card");
    bookEl.innerHTML = `
    <div class="card-header">
      <h3 class="title">${book.title}</h3>
      <h5 class="author">by ${book.author}</h5>
    </div>
    <div class="card-body">
      <p>${book.pages} pages</p>
      <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
    </div>
    `;
    libraryEl.appendChild(bookEl);
  }
}

function addBookToLibrary() {
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('#read').checked;

  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  console.log(myLibrary);
  render();
}

let newBookBtn = document.querySelector('#new-book-btn');
newBookBtn.addEventListener('click', function() {
  let newBookForm = document.querySelector('#new-book-form');
  newBookForm.style.display = 'block';
})

document.querySelector("#new-book-form").addEventListener('submit', function(event) {
  event.preventDefault();
  addBookToLibrary();
})