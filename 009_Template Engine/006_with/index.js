import express from "express";
import exphbs from "express-handlebars";

const app = express();


app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/dashboard", (req, res) => {

    const user = {

        name: "Alex",
        surname: "Arruda"

    };

    const items = ["Item A", "Item B", "Item C"];

    res.render("dashboard", { user: user, items: items });

});

app.get("/post", (req, res) => {

    const post = {

        title: "Aprenda Node.js",
        category: "JavaScript",
        body: "Aprenda Node.js, do básico ao avançado, de uma forma simples...",
        coments: 22

    };

    res.render("blogpost", { post });

});

app.get("/", (req, res) => {

    const auth = true;

    res.render("home", { auth });

});

app.listen(3000, console.log("App funcionando!"));