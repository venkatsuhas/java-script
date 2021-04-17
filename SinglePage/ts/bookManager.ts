let list = document.getElementById("bl");
list.onclick=function contents(){
    document.getElementById("content").style.visibility = "visible";
    document.getElementById("add").style.visibility = "hidden";
}
let addBooks = document.getElementById("ad");
addBooks.onclick = function visibilityOfContent() {
    // document.getElementById("content").style.visibility = "visible";
    document.getElementById("add").style.visibility = "visible";
    document.getElementById("content").style.visibility="hidden";
};
class Book{
    id: String;
    title: String;
    author: String;
    rating: String;
    price: String;
    coverPhotoUrl?: String;
    constructor(id: String,title: String,author: String,rating: String,price: String,coverPhotoUrl?: String) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.rating = rating;
        this.price = price;
        this.coverPhotoUrl = coverPhotoUrl;
}
};

let Books: Book[] = [];
// var data = JSON.parse(window.localStorage.getItem("MyBooks"));
var i = 0;
var table = document.getElementById("bookTable");
class bookManager {
     //Adding rows
    bookList = (e:Event) => {
        e.preventDefault();
        let id = (<HTMLInputElement>document.getElementById("Id")).value;
        let title = (<HTMLInputElement>document.getElementById("Title")).value;
        let author = (<HTMLInputElement>document.getElementById("Author")).value;
        let rating = (<HTMLInputElement>document.getElementById("Rating")).value;
        let price = (<HTMLInputElement>document.getElementById("Price")).value;
        Books.push(new Book(id, title, author, rating, price));
        // for (let i = 0; i < data.length;i++)
        {
        var row = `<tr>
        <td>${Books[i].id}</td>
        <td>${Books[i].title}</td>
        <td>${Books[i].author}</td>
        <td>${Books[i].rating}</td>
        <td>${Books[i].price}</td>
        <td><a href="#" style="text-decoration:none;"><i class="fas fa-trash-alt delete" style="margin-left:40px;"></i></a></td>
        </tr>`
            table.innerHTML += row;
        }
        // document.getElementById("content").style.visibility = "visible";
        // document.getElementById("bl").style.visibility = "hidden";
        i++;
    };

    //search By ID...
    searchById = (searchedBooks:Book[]) => {
        // e.preventDefault();
        var searchInput = (<HTMLInputElement>document.getElementById("searchInput")).value;
        // var BookOfId: Book[] = [];
        for (let i = 0; i < Books.length; i++) {
            if (Books[i].id == searchInput) {
                searchedBooks.push(Books[i]);
            }
        }
        return searchedBooks
    }
    //search By Title...
    searchByTitle = (searchedBooks:Book[]) => {
        // e.preventDefault();
        var searchInput = (<HTMLInputElement>document.getElementById("searchInput")).value;
        // var BookOfId: Book[] = [];
        for (let i = 0; i < Books.length; i++) {
            if (Books[i].title == searchInput) {
                searchedBooks.push(Books[i]);
            }
        }
        return searchedBooks
    }
    //search By Author...
    searchByAuthor = (searchedBooks:Book[]) => {
        // e.preventDefault();
        var searchInput = (<HTMLInputElement>document.getElementById("searchInput")).value;
        // var BookOfId: Book[] = [];
        for (let i = 0; i < Books.length; i++) {
            if (Books[i].author == searchInput) {
                searchedBooks.push(Books[i]);
            }
        }
        return searchedBooks
    }
    //search By Price...
    searchByRating = (searchedBooks:Book[]) => {
        // e.preventDefault();
        var searchInput = (<HTMLInputElement>document.getElementById("searchInput")).value;
        // var BookOfId: Book[] = [];
        for (let i = 0; i < Books.length; i++) {
            if (Books[i].rating == searchInput) {
                searchedBooks.push(Books[i]);
            }
        }
        return searchedBooks
    }
    //search By Rating...
    searchByPrice = (searchedBooks:Book[]) => {
        // e.preventDefault();
        var searchInput = (<HTMLInputElement>document.getElementById("searchInput")).value;
        // var BookOfId: Book[] = [];
        for (let i = 0; i < Books.length; i++) {
            if (Books[i].price == searchInput) {
                searchedBooks.push(Books[i]);
            }
        }
        return searchedBooks
    }
    deleteBook = (e) => {
        if (!e.target.classList.contains("delete")) {
          return;
        }
        var Delete = e.target;
        Delete.closest("tr").remove();
      };
  
  
  
 
}

 
let book = new bookManager();
let add = document.getElementById("form");
add.addEventListener("submit", book.bookList);

var tableE1 = document.querySelector("table");
tableE1.addEventListener("click", book.deleteBook);


//search Results...
function searchResults(searchedBooks:Book[]){
    let tablerows = document.querySelectorAll('tbody');
    for (const row of tablerows) {
        row.remove();
    }
    for (const b of searchedBooks) {
        var row = `<tr>
        <td>${b.id}</td>
        <td>${b.title}</td>
        <td>${b.author}</td>
        <td>${b.rating}</td>
        <td>${b.price}</td>
       <td><a href="#" style="text-decoration:none;" ></> <i class="fas fa-trash-alt delete" style="margin-left:40px;"></i></a></td>
        </tr>`
        table.innerHTML += row;
    }
    document.getElementById("content").style.visibility = "visible";
    document.getElementById("add").style.visibility = "hidden";

//search By Title
}
let searchBtn = document.getElementById("search") as  HTMLButtonElement
searchBtn.addEventListener('click',function(e){
    e.preventDefault();
    let option = document.getElementById("choice") as HTMLSelectElement
    let optionValue=option.value
    let search=document.getElementById("searchInput") as HTMLInputElement
    let searchValue=search.value
    let searchedBooks:Book[]=[]
    switch(optionValue)
    {
        case "id":
            if(searchValue!=null)
            {
                searchedBooks=book.searchById(searchedBooks)
                searchResults(searchedBooks);
            }
        case "title":
            if(searchValue!=null)
            {
                searchedBooks=book.searchByTitle(searchedBooks)
                searchResults(searchedBooks);
            }
        case "author":
            if(searchValue!=null)
            {
                searchedBooks=book.searchByAuthor(searchedBooks)
                searchResults(searchedBooks);
            }
         case "rating":
            if(searchValue!=null)
            {
                searchedBooks=book.searchByRating(searchedBooks)
                searchResults(searchedBooks);
            }
        case "price":
            if(searchValue!=null)
            {
                searchedBooks=book.searchByPrice(searchedBooks)
                searchResults(searchedBooks);
            }
    }

})


