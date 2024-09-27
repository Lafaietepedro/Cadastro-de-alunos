import Aluno from './Aluno';

const ListaAlunos = ({ alunos, onDelete, onEdit }) => {
  return (
    <ul>
      {alunos.map((aluno) => (
        <li key={aluno.id}>
          <Aluno aluno={aluno}>
            <button onClick={() => onEdit(aluno)}>Editar</button>
            <button onClick={() => onDelete(aluno.id)}>Excluir</button>
          </Aluno>
        </li>
      ))}
    </ul>
  );
};

export default ListaAlunos;
