import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

const app = express();

const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basePath = path.join(__dirname, "templates");

// Nova rota
app.get("/users/:id", (req, res) => {

    // Pegando o valor do parâmetro id
    const id = req.params.id;

    // Lendo a tabela users e resgatando um usuário do banco, por meio do id
    console.log(`Estamos buscando, pelo usuário de id: ${id}!`);

    res.sendFile(`${basePath}/users.html`);

});

app.get("/", (req, res) => {

    res.sendFile(`${basePath}/index.html`);

});

app.listen(port, console.log(`App rodando na porta ${port}!`));