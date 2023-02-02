const express = require("express");
const Connect = require("./src/Connection/connect");
const loginroutes = require("./src/Router/Register");
const BooksRoutes = require("./src/Router/Bookslist");
const cors = require('cors');
const port = process.env.PORT || 5055;
const app = express();

app.use(cors())
app.use(express.json());


app.use("/todolist", BooksRoutes);
app.use("/",loginroutes);

app.listen(port, ()=>{
    console.log(`Server is Running at ${port}`);
})