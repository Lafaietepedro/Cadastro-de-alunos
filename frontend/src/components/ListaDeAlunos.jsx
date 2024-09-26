import Aluno from './Aluno';

const ListaAlunos = ({ alunos, onDelete, onEdit }) => {
  return (
    <ul>
      {alunos.map((aluno) => (
        <li key={aluno.id}>
          <Aluno aluno={aluno}>
            {/* Aqui usamos children para passar os botões de ação */}
            <button onClick={() => onEdit(aluno)}>Editar</button>
            <button onClick={() => onDelete(aluno.id)}>Excluir</button>
          </Aluno>
        </li>
      ))}
    </ul>
  );
};

export default ListaAlunos;
