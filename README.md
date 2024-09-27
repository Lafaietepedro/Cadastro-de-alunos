# Cadastro de Alunos

Este é um projeto de **Cadastro de Alunos** desenvolvido utilizando **React** no front-end e **Node.js** com **MySQL** no back-end. O sistema permite cadastrar, listar, atualizar e excluir alunos de um banco de dados, utilizando uma API REST para comunicação entre o front-end e o back-end via **Axios**.

## 🎯 **Objetivo**
O principal objetivo deste projeto é consolidar conhecimentos sobre:
- Criação de componentes reutilizáveis em React.
- Comunicação entre componentes via **props**.
- Uso do atributo **children** em componentes.
- Integração do front-end com uma API RESTful.
- Implementação de operações **CRUD** no back-end com **Node.js** e **MySQL**.

## 🛠️ **Tecnologias Utilizadas**

### **Front-End**
- **React** (com **Vite**)
- **Axios** (para requisições HTTP)
- **CSS** (para estilização responsiva)

### **Back-End**
- **Node.js**
- **Express.js**
- **MySQL**
- **dotenv** (para gerenciamento de variáveis de ambiente)

## ⚙️ **Funcionalidades**
- **Adicionar Alunos**: Cadastra um novo aluno com nome, idade e curso.
- **Listar Alunos**: Exibe a lista de alunos cadastrados.
- **Atualizar Alunos**: Edita as informações de um aluno já cadastrado.
- **Excluir Alunos**: Remove um aluno do banco de dados.

## 🚀 **Como Executar o Projeto**

### **Front-End (React com Vite)**

1. Clone o repositório:
     ```bash
     git clone https://github.com/Lafaietepedro/Cadastro-de-alunos
2. Acesse a pasta do projeto e instale as dependências:
    ```bash
    cd Cadastro-de-alunos
    npm install

3.Inicie o servidor de desenvolvimento:
  ```bash
    npm run dev
  ```
### **Back-End (Node.js com MySQL)**
1. Clone o repositório (caso não tenha feito isso no passo anterior):

    ```bash
    git clone https://github.com/Lafaietepedro/Cadastro-de-alunos
    
2. Acesse a pasta backend/ e instale as dependências:

```bash
cd backend
npm install
```
3. Configure as variáveis de ambiente: Crie um arquivo .env na pasta backend/ com as seguintes informações:

````bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=cadastro_alunos
````
4. Execute as migrações no MySQL:

````sql
CREATE DATABASE cadastro_alunos;
USE cadastro_alunos;

CREATE TABLE alunos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    idade INT NOT NULL,
    curso VARCHAR(255) NOT NULL
);
````
5 .Inicie o servidor:

````bash
npm start
````

### Rotas da API
1. Adicionar Aluno (POST /adicionarAluno)
    - Adiciona um novo aluno no banco de dados.
    
2. Listar Alunos (GET /listarAlunos)
    - Retorna a lista de alunos cadastrados.
    
3. Atualizar Aluno (PUT /atualizarAluno/:id)
    - Atualiza as informações de um aluno específico.
    
4. Deletar Aluno (DELETE /deletarAluno/:id)
    - Remove um aluno do banco de dados.
  
##📋 **Estrutura do Projeto**
````bash
backend/
├── routes/
│   ├── adicionarAluno.js
│   ├── listarAlunos.js
│   ├── atualizarAluno.js
│   └── deletarAluno.js
├── server.js
└── .env

frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── FormularioDeAluno.jsx
│   │   ├── Aluno.jsx
│   │   └── ListaDeAlunos.jsx
│   └── App.jsx
└── App.css
````

## 💡 Como Usar
1. Cadastro de Alunos: Preencha o formulário com nome, idade e curso, e clique em Adicionar Aluno.
2. Edição de Alunos: Clique no botão Editar ao lado do aluno que deseja alterar, edite os campos e clique em Atualizar Aluno.
3. Exclusão de Alunos: Clique no botão Excluir ao lado do aluno que deseja remover.
4. 
## 📂 Licença
Este projeto está licenciado sob os termos da licença MIT. Sinta-se à vontade para usá-lo e modificá-lo.
