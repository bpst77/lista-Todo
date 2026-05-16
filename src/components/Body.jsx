import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Edit3, CheckCircle2, Circle } from 'lucide-react';
import "../App.css";

const Body = ({ tarefas, remover, alternar, setEditando }) => {
  return (
    <div className="mt-6">
      <ul className="space-y-4">
        <AnimatePresence mode='popLayout'>
          {tarefas.map((tarefa) => (
            <motion.li
              key={tarefa.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, x: 50 }}
              whileHover={{ scale: 1.01 }}
              className={`flex items-center justify-between p-5 rounded-2xl border transition-all ${
                tarefa.status === 'concluido' 
                ? 'bg-gray-100 border-transparent opacity-60' 
                : 'bg-white border-gray-100 shadow-sm shadow-gray-200/50'
              }`}
            >
              <div className="flex items-center gap-4 flex-1 cursor-pointer" onClick={() => alternar(tarefa)}>
                {tarefa.status === 'concluido' 
                  ? <CheckCircle2 className="text-green-500 w-6 h-6" /> 
                  : <Circle className="text-gray-300 w-6 h-6" />
                }
                <span className={`text-lg ${tarefa.status === 'concluido' ? 'line-through text-gray-500' : 'text-gray-800 font-medium'}`}>
                  {tarefa.atividade}
                </span>
              </div>

              <div className="flex gap-2">
                <button 
                  onClick={() => setEditando(tarefa)}
                  className="p-2 hover:bg-blue-50 text-blue-500 rounded-xl transition-colors"
                >
                  <Edit3 size={20} />
                </button>
                <button 
                  onClick={() => remover(tarefa.id)}
                  className="p-2 hover:bg-red-50 text-red-500 rounded-xl transition-colors"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
      
      {tarefas.length === 0 && (
        <p className="text-center text-gray-400 mt-10">Nenhuma tarefa para hoje. Bora descansar?</p>
      )}
    </div>
  );
};

export default Body;