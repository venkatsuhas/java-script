export class forms{
changeDetails=function(req,res){
    res.end(`<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        </head>
        <body>
        <center>
        <form action="/" method="PUT">
        <label for="">Enter id</label>
        <input type="text" name="id" id="id" placeholder="Enter id"><br>
        <label for="">Enter Title</label>
        <input type="text" name="title" id="title" placeholder="Enter Title"><br>
        <label for="">Enter author</label>
        <input type="text" name="author" id="author" placeholder="Enter author"><br>
        <label for="">Enter rating</label>
        <input type="text" name="rating" id="rating" placeholder="Enter rating"><br>
        <label for="">Enter price</label>
        <input type="text" name="price" id="price" placeholder="Enter price"><br>
        <button type="submit">Modify Book</button>
        </form>
        </center>
        </body>
        </html>`);
}
addForm=function(req,res){
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>
    <body>
    <center>
    <form action="/" method="POST">
    <label for="">Enter Id</label>
    <input type="text" name="id" id="id" placeholder="Enter id"><br>
    <label for="">Enter Title</label>
    <input type="text" name="title" id="title" placeholder="Enter Title"><br>
    <label for="">Enter author</label>
    <input type="text" name="author" id="author" placeholder="Enter author"><br>
    <label for="">Enter rating</label>
    <input type="text" name="rating" id="rating" placeholder="Enter rating"><br>
    <label for="">Enter price</label>
    <input type="text" name="price" id="price" placeholder="Enter price"><br>
    <button type="submit">Add Book</button>
    </form>
    </center>
    </body>
    </html>`);
}
}
// // module.exports={
//     addForm,
//     changeDetails
// }