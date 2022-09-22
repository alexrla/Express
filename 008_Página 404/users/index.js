import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basePath = path.join(__dirname, "../templates");

router.get("/add", (req, res) => {

    res.sendFile(`${basePath}/userform.html`);

});

router.post("/save", (req, res) => {

    const name = req.body.name;
    const age = req.body.age;

    console.log(req.body);
    console.log(name);
    console.log(age)

    res.send(`Oi, eu sou o (a) ${name} e tenho ${age} ano (s) de idade!`)
});

router.get("/:id", (req, res) => {

    const id = req.params.id;

    console.log(`Estamos buscando, pelo usuário de id: ${id}!`);

    res.sendFile(`${basePath}/index.html`);

});

export default router;