import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

const app = express();

const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basePath = path.join(__dirname, "templates");

// Lendo o body (transforma toda requisição em um objeto JavaScript);
app.use(
    express.urlencoded({
        extended: true,
    }), 
);
app.use(express.json());

app.get("/users/add", (req, res) => {

    res.sendFile(`${basePath}/userform.html`);

});

app.post("/users/save", (req, res) => {

    const name = req.body.name;
    const age = req.body.age;

    console.log(req.body);
    console.log(name);
    console.log(age)

    res.send(`Oi, eu sou o (a) ${name} e tenho ${age} ano (s) de idade!`)
});

app.get("/users/:id", (req, res) => {

    const id = req.params.id;

    console.log(`Estamos buscando, pelo usuário de id: ${id}!`);

    res.sendFile(`${basePath}/users.html`);

});

app.get("/", (req, res) => {

    res.sendFile(`${basePath}/index.html`);

});

app.listen(port, console.log(`App rodando na porta ${port}!`));