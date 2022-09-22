import express from "express";

import path from "path";
import { fileURLToPath } from 'url';

import contact from './contact/index.js';

const app = express();

const port = 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basePath = path.join(__dirname, "templates");

app.use(
    express.urlencoded({
        extended: true,
    }), 
);
app.use(express.json());

app.use("/contact", contact);

app.use(express.static("public"));

app.get("/", (req, res) => {

    res.sendFile(`${basePath}/index.html`);

});

app.listen(port, console.log(`App rodando na porta ${port}!`));