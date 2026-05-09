import '/src/App.css';
import FormAdd from './forms/FormAdd';
import FormEdit from './forms/FormEdit';
import detalha from './assets/detalhes.png';
import marcar from './assets/marcar.png';

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
                    <button><img src={detalha} alt="Editar" /></button>
                    <button><img src={marcar} alt="Marcar" /></button>
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

const Body = () => (
    <section>
    <BodyTabela />
    <BodyBotons />
    <FormAdd />
    <FormEdit />
    </section>
)

export default Body;