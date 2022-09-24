import express from "express";
import exphbs from "express-handlebars";

const app = express();

const hbs = exphbs.create({

    partialsDir: ["views/partials"]

});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Definindo o diretório dos arquivos estáticos
app.use(express.static("public"));

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

app.get("/blog", (req, res) => {

    const posts = [

        {
            title: "Aprenda Node.js",
            category: "JavaScript",
            body: "Aprenda Node.js, do básico ao avançado, de uma forma simples...",
            coments: 22
        },
        {
            title: "Aprenda React.js",
            category: "JavaScript",
            body: "Aprenda React.js, do básico ao avançado, de uma forma simples...",
            coments: 30
        },
        {
            title: "Programação assíncrona - Async/Await",
            category: "JavaScript",
            body: "Entenda os conceitos do Async/Await, de forma definitiva e sem enrolações...",
            coments: 15
        }

    ];

    res.render("blog", { posts });

});

app.get("/", (req, res) => {

    const auth = true;

    res.render("home", { auth });

});

app.listen(3000, console.log("App funcionando!"));