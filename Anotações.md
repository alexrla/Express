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



