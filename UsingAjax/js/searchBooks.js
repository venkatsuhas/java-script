fetch("http://localhost:3000/books").then(resolve=>resolve.json())
.then(data=>{
    //search By Id
    searchById=(searchBooks)=>{
        console.log("hello");
        var searchInput= document.getElementById("searchInput").value;
        for(let i=0;i<data.length;i++){
            if(data[i].id==searchInput){
                searchBooks.push(data[i]);
            }
        }
        return searchBooks;
    };
    //search By Title
    searchByTitle=(searchBooks)=>{
        var searchInput= document.getElementById("searchInput").value;
        for(let i=0;i<data.length;i++){
            if(data[i].title==searchInput){
                searchBooks.push(data[i]);
            }
        }
        return searchBooks;
    };
    //search By Author
    searchByAuthor=(searchBooks)=>{
        var searchInput= document.getElementById("searchInput").value;
        for(let i=0;i<data.length;i++){
            if(data[i].author==searchInput){
                searchBooks.push(data[i]);
            }
        }
        return searchBooks;
    };
    //search By Rating
    searchByRating=(searchBooks)=>{
        var searchInput= document.getElementById("searchInput").value;
        for(let i=0;i<data.length;i++){
            if(data[i].rating==searchInput){
                searchBooks.push(data[i]);
            }
        }
        return searchBooks;
    };
    //search By Price
    searchByPrice=(searchBooks)=>{
        var searchInput= document.getElementById("searchInput").value;
        for(let i=0;i<data.length;i++){
            if(data[i].price==searchInput){
                searchBooks.push(data[i]);
            }
        }
        return searchBooks;
    };
});

function searchResults(searchBooks){
    let table=document.getElementById("bookTable");
    let tablerow = document.querySelectorAll("tbody")
    for(const row of tablerow){
        row.remove();
    }
    for(const b of searchBooks){
        var row =`<tr>
        <td>${b.id}</td>
        <td>${b.title}</td>
        <td>${b.author}</td>
        <td>${b.rating}</td>
        <td>${b.price}</td>
        <td><a href="#" style="text-decoration:none;margin-left:20px;><i class="fas fa-trash-alt delete"></i><i class="fal fa-grip-lines-vertical"></i><i class="fad fa-info-circle"></i></a></td>
        </tr>`;
        table.innerHTML+=row;
    }
}
// window.onload=function(){
let input = document.getElementById("search");
input.addEventListener("click",searching);
// }
function searching(){
    console.log("hello");
    event.preventDefault();
    let option = document.getElementById("choice");
    let optionValue=option.value;
    let search = document.getElementById("searchInput");
    let searchValue=search.value;
    console.log("hello");
    let searchBooks=[];
    switch(optionValue){
        case "id":
            if(searchValue!=null){
                searchBooks=searchById(searchBooks);
                searchResults(searchBooks);
            }
            break;
        case "title":
            if(searchValue!=null){
                searchBooks=searchByTitle(searchBooks);
                searchResults(searchBooks);
            }
            break;
        case "author":
            if(searchValue!=null){
                searchBooks=searchByAuthor(searchBooks);
                searchResults(searchBooks);
            }
            break;
        case "rating":
            if(searchValue!=null){
                searchBooks=searchByRating(searchBooks);
                searchResults(searchBooks);
            }
            break;
        case "price":
            if(searchValue!=null){
                searchBooks=searchByPrice(searchBooks);
                searchResults(searchBooks);
            }
            break;
        
    }
};