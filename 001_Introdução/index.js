// Importando o express
import express from "express";

// Executando express
const app = express();

// Definindo porta
const port = 3000; // Variável ambiente

// Criando primeira rota
app.get("/", (req, res) => {

    res.send("Hello World!");

});

// Executando o método listen na porta especificada
app.listen(port, console.log(`App rodando na porta ${port}!`));