const FormAluno = ({ nome, setNome, idade, setIdade, curso, setCurso, handleSubmit, isEditing }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="number"
        placeholder="Idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
      />
      <input
        type="text"
        placeholder="Curso"
        value={curso}
        onChange={(e) => setCurso(e.target.value)}
      />
      <button type="submit">{isEditing ? 'Atualizar' : 'Adicionar'}</button>
    </form>
  );
};

export default FormAluno;
