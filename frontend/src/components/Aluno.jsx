const Aluno = ({ aluno, children }) => {
  return (
    <div>
      <h3>{aluno.nome}</h3>
      <p>Idade: {aluno.idade}</p>
      <p>Curso: {aluno.curso}</p>
      {children} {/* Aqui usamos o atributo children */}
    </div>
  );
};

export default Aluno;
