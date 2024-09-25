app.put('/alunos/:id', (req, res) => {
    const { id } = req.params;
    const { nome, idade, curso } = req.body;
    const query = 'UPDATE alunos SET nome = ?, idade = ?, curso = ? WHERE id = ?';
    db.query(query, [nome, idade, curso, id], (err, result) => {
        if (err) {
            console.error('Erro ao atualizar aluno:', err);
            res.status(500).send('Erro ao atualizar aluno');
        } else {
            res.send('Aluno atualizado com sucesso');
        }
    });
});
