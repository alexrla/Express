import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basePath = path.join(__dirname, "../templates");

router.get("/input", (req, res) => {

    res.sendFile(`${basePath}/contact.html`);

});

router.post("/output", (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const telephone = req.body.telephone;
    const message = req.body.message;

    console.log(req.body);
    console.log(name);
    console.log(email)
    console.log(telephone);
    console.log(message);

    res.send("Mensagem enviada com sucesso!");
});

export default router;