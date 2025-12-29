
import React from 'react';
import { CheckCircle2, Download, Home, PlusCircle } from 'lucide-react';

interface Props {
  onReset: () => void;
}

const FinishStep: React.FC<Props> = ({ onReset }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center animate-in zoom-in duration-300">
      <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-green-100">
        <CheckCircle2 size={64} />
      </div>
      <h2 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">Solicitação Concluída!</h2>
      <p className="text-lg text-gray-500 mb-8">Seu pedido foi enviado para nossa central técnica.</p>
      
      <div className="bg-gray-50 border border-gray-200 p-8 rounded-2xl w-full max-w-md mb-8 shadow-sm">
        <div className="mb-6">
          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Código do Pedido</p>
          <p className="text-2xl font-black text-blue-600">#DL-3D-2024-0892</p>
        </div>
        <div className="flex flex-col gap-3">
          <button className="flex items-center justify-center gap-2 w-full py-4 bg-white border border-gray-200 rounded-xl font-bold text-gray-700 hover:bg-gray-100 transition-all shadow-sm">
            <Download size={20} />
            Baixar Comprovante (PDF)
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          onClick={onReset}
          className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all transform active:scale-95"
        >
          <PlusCircle size={20} />
          Nova Solicitação
        </button>
        <button 
          onClick={() => window.location.reload()}
          className="flex items-center justify-center gap-2 text-gray-500 font-bold hover:text-gray-700 px-8 py-4 transition-colors"
        >
          <Home size={20} />
          Página Inicial
        </button>
      </div>
    </div>
  );
};

export default FinishStep;
