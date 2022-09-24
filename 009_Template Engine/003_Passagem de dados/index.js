import express from "express";
import exphbs from "express-handlebars";

const app = express();


app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {

    // Transferindo dados
    const user = {

        name: "Alex",
        surname: "Arruda"

    };

    res.render("home", {user: user});

});

app.listen(3000, console.log("App funcionando!"));