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

    res.render("dashboard", { user: user });

});

app.get("/", (req, res) => {

    const auth = true;

    res.render("home", { auth });

});

app.listen(3000, console.log("App funcionando!"));