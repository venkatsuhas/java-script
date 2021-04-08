let addBook=document.getElementById("addBtn");
addBook.addEventListener("click",getForm);
function getForm(){
    URL="addBooks.html";
    fetch(URL).then(Response=>Response.text())
    .then(data=>document.getElementById("addingBooks").innerHTML=data);
}

async function addBooks(){
    let id=document.getElementById("Id").value;
    // id.toString();
    let author =document.getElementById("Author").value;
    let price =document.getElementById("Price").value;
    let rating =document.getElementById("Rating").value;
    let title =document.getElementById("Title").value;
    let book = {
        // _id:id,
        // id:id,
        title:title,
        author:author,
        rating:rating,
        price:price,
    };
    let response=await fetch("http://localhost:3000/books",{
        method:"POST",
        mode:"cors",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(book),
    });
    // console.log(id);
    getList();
}
let bookList = document.getElementById("blBtn");
bookList.addEventListener("click",getList);
 async function getList(){
    URL="bookList.html";
    fetch(URL).then(Response=>Response.text())
    .then(data=>document.getElementById("addingBooks").innerHTML=data);
    let books=[];
    fetch(" http://localhost:3000/books").then(Response=>Response.json())
    .then(data=>{
        books=data;
        let tableBody=document.getElementById("tbody");
        let row="";
        for(let i=0;i<books.length;i++){
            row +=`<tr>
            <td>${books[i].id}</td>
            <td>${books[i].title}</td>
            <td>${books[i].author}</td>
            <td>${books[i].price}</td>
            <td>${books[i].rating}</td>
            <td><span ><a href="#" style="text-decoration:none;margin-left:20px;><i onclick="DeleteBook();" id="${books[i].id}" class="fa fa-trash"></i></a></span></td>
            </tr>`;
        }
        tableBody.innerHTML=row;
    });
}
 function DeleteBook(){
    let bookId=event.target.id;
 fetch(`http://localhost:3000/books/${bookId}`,{
        method:"DELETE",
        mode:"cors",
    });
    getList();
}

