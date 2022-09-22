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

app.use("/users", users);

// Arquivos estáticos
app.use(express.static("public"));

app.get("/", (req, res) => {

    res.sendFile(`${basePath}/index.html`);

});

app.listen(port, console.log(`App rodando na porta ${port}!`));