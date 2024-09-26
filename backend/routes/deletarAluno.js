const express = require('express');
const router = express.Router();
const db = require('../db');

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM alunos WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            console.error('Erro ao deletar aluno:', err);
            res.status(500).send('Erro ao deletar aluno');
        } else {
            res.send('Aluno deletado com sucesso');
        }
    });
});

module.exports = router;
