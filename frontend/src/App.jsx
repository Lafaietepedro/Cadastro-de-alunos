// src/App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import FormAluno from './components/FormularioDeAluno';
import ListaAlunos from './components/ListaDeAlunos';

const App = () => {
  const [alunos, setAlunos] = useState([]);
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [curso, setCurso] = useState('');
  const [idEditar, setIdEditar] = useState(null);

  const fetchAlunos = async () => {
    try {
      const response = await axios.get('http://localhost:3001/alunos');
      setAlunos(response.data);
    } catch (error) {
      console.error('Erro ao buscar alunos:', error);
    }
  };

  const addAluno = async (e) => {
    e.preventDefault();
    try {
      if (idEditar) {
        await axios.put(`http://localhost:3001/alunos/${idEditar}`, { nome, idade, curso });
      } else {
        await axios.post('http://localhost:3001/alunos', { nome, idade, curso });
      }
      setNome('');
      setIdade('');
      setCurso('');
      setIdEditar(null);
      fetchAlunos();
    } catch (error) {
      console.error('Erro ao adicionar/atualizar aluno:', error);
    }
  };

  const deleteAluno = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/alunos/${id}`);
      fetchAlunos();
    } catch (error) {
      console.error('Erro ao excluir aluno:', error);
    }
  };

  const editAluno = (aluno) => {
    setNome(aluno.nome);
    setIdade(aluno.idade);
    setCurso(aluno.curso);
    setIdEditar(aluno.id);
  };

  useEffect(() => {
    fetchAlunos();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <FormAluno
        nome={nome}
        setNome={setNome}
        idade={idade}
        setIdade={setIdade}
        curso={curso}
        setCurso={setCurso}
        handleSubmit={addAluno}
        isEditing={idEditar !== null}
      />
      <ListaAlunos alunos={alunos} onDelete={deleteAluno} onEdit={editAluno} />
    </div>
  );
};

export default App;
