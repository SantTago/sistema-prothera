
import React from 'react';
import { LayoutDashboard, FilePlus, LogOut, UserCircle } from 'lucide-react';

interface Props {
  viewMode: 'form' | 'admin';
  setViewMode: (mode: 'form' | 'admin') => void;
  onLogout: () => void;
  isAuthenticated: boolean;
}

const Header: React.FC<Props> = ({ viewMode, setViewMode, onLogout, isAuthenticated }) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-blue-600 p-2 rounded-lg cursor-pointer transition-transform hover:scale-105" onClick={() => setViewMode('form')}>
             <span className="text-white font-black text-2xl tracking-tighter">DILEPÉ</span>
          </div>
          <div className="hidden sm:block border-l pl-4 border-gray-100">
            <p className="text-gray-800 font-bold text-lg leading-tight">SmartBrace 3D</p>
            <h1 className="text-gray-400 text-xs font-medium uppercase tracking-widest">
              {viewMode === 'admin' ? 'Painel de Controle' : 'Nova Solicitação'}
            </h1>
          </div>
        </div>

        <nav className="flex items-center bg-gray-50 p-1 rounded-xl border border-gray-100">
          <button 
            onClick={() => setViewMode('form')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${viewMode === 'form' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
          >
            <FilePlus size={18} />
            <span className="hidden sm:inline">Solicitação</span>
          </button>
          <button 
            onClick={() => setViewMode('admin')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${viewMode === 'admin' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
          >
            <LayoutDashboard size={18} />
            <span className="hidden sm:inline">Painel Admin</span>
          </button>
        </nav>

        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <div className="hidden lg:flex flex-col items-end">
                <p className="text-sm font-bold text-gray-900 leading-none">Prothera Admin</p>
                <p className="text-[10px] text-green-600 font-bold uppercase">Conectado</p>
              </div>
              <button 
                onClick={onLogout}
                className="p-2.5 text-red-500 hover:bg-red-50 rounded-xl transition-colors flex items-center gap-2"
                title="Sair"
              >
                <LogOut size={20} />
                <span className="hidden lg:inline text-xs font-bold uppercase">Sair</span>
              </button>
            </div>
          ) : (
             <div className="flex items-center gap-2 text-gray-400 px-3 py-1.5 bg-gray-50 rounded-lg">
                <UserCircle size={20} />
                <span className="text-[10px] font-bold uppercase tracking-widest hidden sm:block">Acesso Público</span>
             </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
