const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const dotenv = require('dotenv');
const router = express.Router();

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const adicionarAlunoRoutes = require("./routes/adicionarAluno");
const atualizarAlunoRoutes = require("./routes/atualizarAluno");
const deletarAlunoRoutes = require("./routes/deletarAluno");
const listarAlunosRoutes = require("./routes/listarAlunos");

// Inicialização do servidor

app.use('/alunos', adicionarAlunoRoutes);
app.use('/alunos', listarAlunosRoutes);
app.use('/alunos', atualizarAlunoRoutes);
app.use('/alunos', deletarAlunoRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});