# Express

- **Framework para Node.js (utilizado para criarmos aplicações web: podemos criar rotas, renderizar HTML, conectar banco de dados, entre outras tarefas);**

  - **Bem mais simples de se utilizar do que os Core Modules;**

- **Comando utilizado para a instalação do `express` (ele é um pacote externo):**

  ```shell
  npm install express
  
  OU
  
  npm i express
  ```



### Rotas

- **Basicamente, são as URL's que acessamos;**
  - **Por exemplo, se criarmos a rota `/nome_da_rota`, poderemos acessá-la através da URL: `www.nossosite/nome_da_rota`;**
- **Quando o usuário acessa um rota, podemos aplicar várias lógicas, para que, por exemplo, haja o carregamento de todos os produtos de um banco de dados (uma rota acaba sendo uma ponte entre o usuário e a lógica da aplicação);**



### Criando uma rota com o verbo GET

```javascript
app.get("/nome_da_rota", (request, response) => {
   ... 
});
```

- **O `request` serve para pegar aquilo que o usuário envia;**
- **O `response` corresponde aquilo que enviamos ao usuário;**



### Renderizando HTML com express

- **Para enviar HTML como resposta, utilizamos o método `sendFile` (isso faz com que o arquivo seja renderizado no navegador, o arquivo é enviado como resposta);**
  - **Precisaremos acessar o arquivo por meio do diretório base (isso requer o uso do módulo `path`);**



### Nodemon

- **Sempre que atualizamos o nosso projeto, é necessário reiniciarmos o nosso servidor;**

- **Porém, podemos utilizar o pacote `Nodemon`, que a cada vez que atualizamos e salvamos o nosso projeto, ele reinicia o nosso servidor de forma automática;**

  - **Devemos salvar esse pacote como uma dependência de desenvolvimento (utilizamos: `--save-dev` ou `-D`);**

    ```shell
    npm i nodemon --save-dev 
    
    Ou
    
    npm i nodemon -D
    ```

- **No arquivo `package.json`, podemos criar o seguinte script:**

  ```javascript
  "scripts": {
      "start": "nodemon index.js"
  }
  
  // O arquivo index.js deve estar no mesmo nível que o arquivo package.json
  ```



### Middlewares

- **Códigos que podem ser executados no meio/entre (middle), alguma ação e outra;**
- **O método que nos dá acesso a utilização de middlewares, é o método `use`, do `express`;**



### Parâmetros

- **Podemos resgatar os parâmetros que vêm da URL, através do `req`;**
  - **Acessamos: `req.params.nome_do_parâmetro`;**
  - **O nome do parâmetro é definido  na URL do express, por exemplo: `/users/:id` (o nome da rota é _users_ e o nome do parâmetro é _id_ , que é precedido por dois-pontos) ;**



### POST

- **Para enviar dados, devemos criar uma rota com o verbo POST (ela que receberá os dados enviados);**
  - **No express, precisaremos colocar alguns middlewares como o `express.json`, para ler os dados do body;**



### Módulo de rotas

- **Podemos unir  várias rotas em um módulo (o que deixa o nosso código mais organizado);**
- **Normalmente, é criado uma pasta ou arquivo, contendo essas rotas (que representam uma entidade comum, como por exemplo, `users`);**
- **Nessa situação iremos utilizar um objeto chamado `Router`, e as rotas serão colocadas nele;**
  - **Em seguida, exportamos e importamos no arquivo principal;**