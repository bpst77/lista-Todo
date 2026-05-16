import { useState, useEffect } from 'react';
import Header from "./components/Header";
import Body from "./components/Body";
import FormAdd from "./forms/FormAdd";
import FormEdit from "./forms/FormEdit";
import Footer from "./components/Footer";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [editando, setEditando] = useState(null); 
  const API_URL = "https://6a08b005e7e3f433d482c367.mockapi.io/:endpoint";

  useEffect(() => {
    const carregarTarefas = async () => {
      const res = await fetch(API_URL);
      const data = await res.json();
      setTarefas(data);
    };
    carregarTarefas();
  }, []);

  const adicionarTarefa = async (texto) => {
    const nova = { atividade: texto, status: "pendente" };
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nova)
    });
    const dadoSalvo = await res.json();
    setTarefas([...tarefas, dadoSalvo]);
  };

  // DELETE - Semana 2
  const removerTarefa = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    setTarefas(tarefas.filter(t => t.id !== id));
  };

  // UPDATE (Status) - Semana 3
  const alternarStatus = async (tarefa) => {
    const novoStatus = tarefa.status === "concluido" ? "pendente" : "concluido";
    const res = await fetch(`${API_URL}/${tarefa.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: novoStatus })
    });
    const atualizada = await res.json();
    setTarefas(tarefas.map(t => t.id === tarefa.id ? atualizada : t));
  };

  // UPDATE (Texto) - Semana 3
  const salvarEdicao = async (id, novoTexto) => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ atividade: novoTexto })
    });
    const atualizada = await res.json();
    setTarefas(tarefas.map(t => t.id === id ? atualizada : t));
    setEditando(null); // Fecha o formulário de edição
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans pb-20">
      <Header />
      
      <main className="max-w-2xl mx-auto px-4 pt-8">
        {editando ? (
          <FormEdit 
            tarefa={editando} 
            aoSalvar={salvarEdicao} 
            aoCancelar={() => setEditando(null)} 
          />
        ) : (
          <FormAdd aoAdicionar={adicionarTarefa} />
        )}

        {/* Coloque isso dentro do return do App.jsx, embaixo dos Formulários */}
<div className="flex justify-between items-center bg-white border border-gray-100 rounded-2xl p-4 mt-6 shadow-sm">
  <div className="text-sm font-medium text-gray-500">
    Total de tarefas: <span className="text-gray-800 font-bold">{tarefas.length}</span>
  </div>
  <div className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
    Concluídas: {tarefas.filter(t => t.status === 'concluido').length} de {tarefas.length}
  </div>
</div>

        <Body 
          tarefas={tarefas} 
          remover={removerTarefa} 
          alternar={alternarStatus}
          setEditando={setEditando}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;