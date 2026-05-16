const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100 py-6 text-center shadow-sm">
      <h1 className="text-3xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-tight">
        To-do List
      </h1>
      <p className="text-xs text-gray-400 mt-1 font-mono uppercase tracking-widest">Sua lista de tarefas inteligente</p>
    </header>
  );
};

export default Header;