import { Component } from 'react';
import '/src/App.css'

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

/*Adicionar*/
const FormAdd = () => (
    <form>
        <label htmlFor="atividade">Atividade:</label>
        <input type="text" id="atividade" name="atividade" />

        <label htmlFor="prioridade">Prioridade:</label>
        <select id="prioridade" name="prioridade">
            <option value="alta">Alta</option>
            <option value="media">Média</option>
            <option value="baixa">Baixa</option>
        </select>

        <button type="submit">Adicionar</button>
        <button>Voltar</button>
    </form>
)

/*editar*/
const FormEdit = () => (
    <form>
        <p>Id: parara</p>

        <label htmlFor="atividade">Atividade:</label>
        <input type="text" id="atividade" name="atividade" />
        
        <label htmlFor="prioridade">Prioridade:</label>
        <select id="prioridade" name="prioridade">
            <option value="alta">Alta</option>
            <option value="media">Média</option>
            <option value="baixa">Baixa</option>
        </select>

        <button type="submit">Salvar</button>
        <button>Voltar</button>
    </form>
)

export {BodyMain, FormAdd, FormEdit};