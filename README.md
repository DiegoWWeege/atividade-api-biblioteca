# Api-biblioteca

Objetivo: Simular a aplicação de uma biblioteca com livros, usuários e empréstimos.




## Tecnologias utilizadas



**Server:** Node, Express, Cors, mysql2

**Linguagens:** JavaScript




## Banco e requisitos

As configurações do banco de dados e os requsitos do sistema estão alocados juntamente aos outros arquivos e pastas da aplicação caso você tenha dúvidas.





## Instalar

Para a criação do projeto utilizei os seguintes comandos de instalação:

```bash
  npm install express
```

```bash
  npm install cors
```

```bash
  npm install mysql2
```

    
## Como executar

Para executar o projeto basta utilizar os seguintes seguintes comandos no terminal: 

```bash
  cd backend
```

Para entrar na pasta backend.

```bash
  node app.js
```

Para executar o arquivo que contém as rotas da aplicação.

Agora é só testar!





## Rotas da aplicação

### Livros
- GET    /livros

- GET    /livros/:id

- GET    /livros/busca/:titulo

- GET    /livros/ordenados

- POST   /livros

- PUT    /livros/:id

- DELETE /livros/:id

### Usuários

- GET    /usuarios

- GET    /usuarios/:id

- POST   /usuarios

- PUT    /usuarios/:id

- DELETE /usuarios/:id

### Empréstimos

- GET    /emprestimos

- GET    /emprestimos/:id

- POST   /emprestimos

- PUT    /emprestimos/:id

