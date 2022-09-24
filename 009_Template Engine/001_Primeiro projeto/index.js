import express from "express";

// Importando o handlebars;
import exphbs from "express-handlebars";

const app = express();

/*
    - Definindo a handlebars como template engine na nossa engine;
    - Invocamos este método engine, antes era opicional, para realizar 
    algumas configurações extras (agora ele é obrigatório para o 
    funcionamento do pacote);
*/
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {

    // Como ainda não temos layout, utilizamos: "layout: false";
    res.render("home", { layout: false });

});

app.listen(3000, console.log("App funcionando!"));