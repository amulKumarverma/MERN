import express from "express";
import { login } from "./login.js";
import { submit } from "./submit.js";
import { gotohome } from "./gotohome.js";


const app = express();

app.get("/", (req, res) => {
    res.send(`<h1>This is home page..</h1><a href='login'>go to login</a>`);
});

app.get("/login", (req, res) => {
    res.send(login());
});


app.post("/submit", (req, res) => {
    res.send(submit(),gotohome());
});

app.get("/submit", (req, res) => {
    res.send(gotohome());
});


app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});