const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', (req, res) => {
    const { nome, idade, curso } = req.body;
    const query = 'INSERT INTO alunos (nome, idade, curso) VALUES (?, ?, ?)';
    db.query(query, [nome, idade, curso], (err, result) => {
        if (err) {
            console.error('Erro ao inserir aluno:', err);
            res.status(500).send('Erro ao inserir aluno');
        } else {
            res.status(201).send('Aluno cadastrado com sucesso');
        }
    });
});

module.exports = router;