import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { isGeneratorFunction } from "util/types";

const app = express();

const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basePath = path.join(__dirname, "templates");

const checkAuth = function(req, res, next) {

    req.authStatus = true;

    if(req.authStatus) {

        console.log("Está logado, pode continuar!");

        // - Indo para a próxima etapa;
        // - Utilizado para prosseguir a aplicação;
        next();

    } else {

        console.log("Não está logado, faça o login para continuar!");

    }

};

app.use(checkAuth);

app.get("/", (req, res) => {

    res.sendFile(`${basePath}/index.html`);

});

app.listen(port, console.log(`App rodando na porta ${port}!`));