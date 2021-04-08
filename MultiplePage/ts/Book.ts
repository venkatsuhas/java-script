import {bookManager} from "./bookManager.js"
// import {table} from "./bookManager.js"
export class Book{
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
var table = document.getElementById("bookTable") as HTMLTableElement;
let book = new bookManager();
function searchResults(searchedBooks:Book[]){
    // console.log(searchedBooks);
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
