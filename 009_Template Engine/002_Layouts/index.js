import express from "express";
import exphbs from "express-handlebars";

const app = express();


app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {

    // Agora temos layout
    res.render("home");

});

app.listen(3000, console.log("App funcionando!"));