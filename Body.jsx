import '/src/App.css';
import FormAdd from './forms/FormAdd';
import FormEdit from './forms/FormEdit';

/* 
    ideia !
    1 - parte principal (tabela e botões)
    2 - form de adicionar
    3 - form de editar
*/

/*principal*/
const BodyTabela = () => (
        <table>
            <tr>
                <th>ID</th>
                <th>Atividade</th>
                <th>Prioridade</th>
                <th></th>
            </tr>
            <tr>
                <td>1</td>
                <td>Teste</td>
                <td>Alta</td>
                <td>
                    <button>Editar</button>
                    <button>Marcar</button>
                </td>
            </tr>
        </table>
)

const BodyBotons = () => (
    <table>
        <tr><button>Adicionar</button>
        <button>Resetar</button></tr>
    </table>
)

const BodyMain = () => (
    <section>
        <BodyTabela />
        <BodyBotons />
    </section>
)

const Body = () => (
    <>
    <BodyTabela />
    <BodyBotons />
    <FormAdd />
    <FormEdit />
    </>
)

export default Body;