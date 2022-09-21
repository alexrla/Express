import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

const app = express();

const port = 3000;

/*
    - Replicando a funcionalidade __dirname;
        - Isso também replica __filename, que retorna o 
        nome do arquivo do código que é executado;

        - Agora podemos usar o __dirname normalmente;

        - Isso corrige o erro: "__dirname is not defined in ES module scope";
*/
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Acessando o diretório que contém os arquivos HTML
const basePath = path.join(__dirname, "templates");

app.get("/", (req, res) => {

    res.sendFile(`${basePath}/index.html`);

});

app.listen(port, console.log(`App rodando na porta ${port}!`));