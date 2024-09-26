const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    const query = 'SELECT * FROM alunos';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Erro ao buscar alunos:', err);
            res.status(500).send('Erro ao buscar alunos');
        } else {
            res.status(200).json(results);
        }
    });
});

module.exports = router;