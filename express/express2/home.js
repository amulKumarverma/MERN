import express from "express";
import about, { contact } from "./about.js";

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>This is home page..</h1>");
});

app.get("/about", (req, res) => {
    res.send(about());
});

app.get("/contact", (req, res) => {
    res.send(contact());
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});