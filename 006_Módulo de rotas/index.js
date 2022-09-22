import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

import users from "./users/index.js";

const app = express();

const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basePath = path.join(__dirname, "templates");

app.use(
    express.urlencoded({
        extended: true,
    }), 
);
app.use(express.json());

/*
    - Como acabamos criando a inicialização das rotas "aqui", o "/users",
    no arquivo que contẽm as rotas, devemos tirar o "/users", se não
    acabaria ficando "/users/users/alguma_coisa";
*/
app.use("/users", users);

app.get("/", (req, res) => {

    res.sendFile(`${basePath}/index.html`);

});

app.listen(port, console.log(`App rodando na porta ${port}!`));