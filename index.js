const express = require("express");
const app = express();

const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

app.use("/static", express.static("public"));

app.use(express.urlencoded({extended : true}));

//Connection to DB
mongoose.set("useFindAndModify", false);
mongoose.connect("process.env.DB_CONNECT", {useNewUrlParser:true}, 
    () => {
        console.log("Connected to DB");
        app.listen(3000, () => console.log("Server is Up and Running"));
    });
//View Engine Configuration
app.set("view engine", "ejs");


app.get("/", (req, res) => {
    res.render("todo.ejs");

});
//POST Method
app.post("/", (req,res) => {
    console.log(req.body);

});



