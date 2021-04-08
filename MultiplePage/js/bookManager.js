let input = window.localStorage.getItem("MyBooks");
var data = JSON.parse("input");
var table = document.getElementById("bookTable");
export class bookManager {
    constructor() {
        //Adding rows
        this.bookList = () => {
            for (let i = 0; i < data.length; i++) {
                var row = `<tr>
        <td>${data[i].id}</td>
        <td>${data[i].title}</td>
        <td>${data[i].author}</td>
        <td>${data[i].rating}</td>
        <td>${data[i].price}</td>
        <td><a href="#" style="text-decoration:none;"><i class="fas fa-trash-alt delete" style="margin-left:40px;"></i></a></td>
        </tr>`;
                table.innerHTML += row;
            }
            let add = document.getElementById("bl");
            add.style.visibility = "hidden";
        };
        //search By ID...
        this.searchById = (searchedBooks) => {
            // e.preventDefault();
            var searchInput = document.getElementById("searchInput").value;
            // var BookOfId: Book[] = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i].id == searchInput) {
                    searchedBooks.push(data[i]);
                }
            }
            return searchedBooks;
        };
        //search By Title...
        this.searchByTitle = (searchedBooks) => {
            // e.preventDefault();
            var searchInput = document.getElementById("searchInput").value;
            // var BookOfId: Book[] = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i].title == searchInput) {
                    searchedBooks.push(data[i]);
                }
            }
            return searchedBooks;
        };
        //search By Author...
        this.searchByAuthor = (searchedBooks) => {
            // e.preventDefault();
            var searchInput = document.getElementById("searchInput").value;
            // var BookOfId: Book[] = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i].author == searchInput) {
                    searchedBooks.push(data[i]);
                }
            }
            return searchedBooks;
        };
        //search By Price...
        this.searchByRating = (searchedBooks) => {
            // e.preventDefault();
            var searchInput = document.getElementById("searchInput").value;
            // var BookOfId: Book[] = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i].rating == searchInput) {
                    searchedBooks.push(data[i]);
                }
            }
            return searchedBooks;
        };
        //search By Rating...
        this.searchByPrice = (searchedBooks) => {
            // e.preventDefault();
            var searchInput = document.getElementById("searchInput").value;
            // var BookOfId: Book[] = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i].price == searchInput) {
                    searchedBooks.push(data[i]);
                }
            }
            return searchedBooks;
        };
        this.deleteBook = (e) => {
            if (!e.target.classList.contains("delete")) {
                return;
            }
            var Delete = e.target;
            Delete.closest("tr").remove();
        };
    }
}
let book = new bookManager();
let add = document.getElementById("bl");
add === null || add === void 0 ? void 0 : add.addEventListener("click", book.bookList);
var tableE1 = document.querySelector("table");
tableE1 === null || tableE1 === void 0 ? void 0 : tableE1.addEventListener("click", book.deleteBook);
//search Results...
// function searchResults(searchedBooks:Book[]){
//     let tablerows = document.querySelectorAll('tbody');
//     for (const row of tablerows) {
//         row.remove();
//     }
//     for (const b of searchedBooks) {
//         var row = `<tr>
//         <td>${b.id}</td>
//         <td>${b.title}</td>
//         <td>${b.author}</td>
//         <td>${b.rating}</td>
//         <td>${b.price}</td>
//        <td><a href="#" style="text-decoration:none;" ></> <i class="fas fa-trash-alt delete" style="margin-left:40px;"></i></a></td>
//         </tr>`
//         table.innerHTML += row;
//     }
// //search By Title
// }
// let searchBtn = document.getElementById("search") as  HTMLButtonElement
// searchBtn.addEventListener('click',function(e){
//     e.preventDefault();
//     let option = document.getElementById("choice") as HTMLSelectElement
//     let optionValue=option.value
//     let search=document.getElementById("searchInput") as HTMLInputElement
//     let searchValue=search.value
//     let searchedBooks:Book[]=[]
//     switch(optionValue)
//     {
//         case "id":
//             if(searchValue!=null)
//             {
//                 searchedBooks=book.searchById(searchedBooks)
//                 searchResults(searchedBooks);
//             }
//         case "title":
//             if(searchValue!=null)
//             {
//                 searchedBooks=book.searchByTitle(searchedBooks)
//                 searchResults(searchedBooks);
//             }
//         case "author":
//             if(searchValue!=null)
//             {
//                 searchedBooks=book.searchByAuthor(searchedBooks)
//                 searchResults(searchedBooks);
//             }
//          case "rating":
//             if(searchValue!=null)
//             {
//                 searchedBooks=book.searchByRating(searchedBooks)
//                 searchResults(searchedBooks);
//             }
//         case "price":
//             if(searchValue!=null)
//             {
//                 searchedBooks=book.searchByPrice(searchedBooks)
//                 searchResults(searchedBooks);
//             }
//     }
// })
