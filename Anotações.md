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



### Inserindo CSS com o express

- **Para inserir CSS nas páginas e arquivos estáticos, temos de criar um middleware;**
  - **O `express.static`;**
- **Teremos também de criar um diretório base;**
  - **Normalmente, é o diretório de nome `public`;**
  - **E a partir desta pasta, criamos os arquivos estáticos;**
  - **E no HTML, podemos acessar o caminho relativo após a pasta definida;**



### Página 404

- **Para criar uma página 404 (quando o usuário acessa uma página que não existe), temos de criar um middleware abaixo de todas as rotas, que responde a este status e enviar um arquivo de template referente a esta página;**



### Template Engine

- **Forma de deixar o HTML dinâmico, inserindo variáveis do back-end no front-end;**
  - **Também podemos criar _layouts_ que serão reaproveitáveis;**
- **Essencial para projetos que usam banco de dados que não são estáticos;**
- **Existem diversas opções: `EJS`, `Pug` e `Handlebars`, por exemplo (todos atingem o mesmo objetivos, mas possuem algumas diferenças de setup e de funcionalidades);**



#### Handlebars

- **Uma das templates engines mais utilizadas;**
  - **Conhecida pela sua sintaxe limpa no front e nos força a não executar lógica no HTML;**
  - **Nome do pacote: `express-handlebars`;**
- **Colocamos os dados dinâmicos no HTML entre `{{ }}`, para serem "impressos";**
- **Podemos criar condicionais e loops, no template;**
- **Para trabalhar com o `Handlebars`, precisaremos, além do pacotes que já utilizamos como o `Express` e o `Nodemon`, precisaremos instalar o pacote do `Handlebars` e no arquivo `index.js`, importamos os pacotes instalados, adicionamos ao `Express`, a `engine` do `Handlebars`, criamos uma `view` no diretório de _views_, com a extensão `.handlebars` e utilizamos o método `render`, para enviar esta view a requisição;**
- **Comando utilizado para a instalação: `npm i express-handlebars`;**



##### Layouts

- **Podemos criar _layouts_ para reaproveitar código entre páginas (vamos criar uma pasta chamada layouts em views e nela iremos criar o template que será repetido);**
  - **Utilizaremos a tag `{{{ body }}}`, para que nesse local, o "corpo" do site seja inserido (agora em todas as nossas views, o layout será repetido);**



##### Passando dados para a view

- **Os dados são passados por meio do método `render` (enviamos um objeto com chaves e valores e isso nos possibilita o acesso destes dados, no template);**

- **Sintaxe:**

  **`{{ dado }}`**



##### Condicionais

- **Podemos utilizar o `if` no Handlebars. Sintaxe:**

  ```handlebars
  {{#if condição}} conteúdo... {{ /if }}
  ```

  **Se a condição for verdadeira, o conteúdo será "impresso" (precisaremos encaminhar o dado a ser validade, pelo back-end);**

- **Ainda temos o `else` (complemento do `if`), que é utilizado para exibir a outra parte do layout, caso a condição seja falsa. Sintaxe:**

  ```handlebars
  {{#if condição}} conteúdo do if... {{else}} conteúdo do else... {{ /if }}
  ```

  

##### Estrutura de repetição

- **Realizadas através do operador `each`;**

  - **Sintaxe:**

    ```handlebars
    {{#each}} ...{{/each}}
    ```

- **Em um array (uma lista com itens), podemos chamar os itens como: `{{this}}`  (elemento atual da lista);**
  - **Então, cada um dos itens é acessado na view;**



##### with

- **Nos permite abstrair um objeto (podemos acessar propriedades sem nos referenciarmos sempre, ao objeto antes);**

  - **Sintaxe:**

    ```handlebars
    {{#with objeto}} ...{{/with}}
    ```



##### partials

- **Sâo como "mini templates", que precisam ser repetidos em diversos locais da nossa aplicação (é necessário realizarmos algumas modificações na implementação do Handlebars);**

  - **Geralmente ficam em `views/partials` e utilizamos a sintaxe (para chamá-lo no projeto):**

    ```handlebars
    {{>partial}}
    ```

    

##### CSS com Handlebars

- **Semelhante a inclusão de CSS, feita com o express;**
  - **Precisaremos definir a pasta dos arquivos estáticos;**
  - **E vamos linkar o CSS com o nosso layout, em comum para todas as páginas;**
