
import React from 'react';
import { FormData } from '../../types';

interface Props {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const Identification: React.FC<Props> = ({ formData, updateFormData }) => {
  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-900">Colete 3D - SmartBrace</h2>
        <p className="text-gray-500 mt-1">
          Boas-vindas! É possível criar uma solicitação para Colete 3D - SmartBrace usando as opções oferecidas.
        </p>
      </div>

      <div className="space-y-4">
        <label className="block text-sm font-bold text-gray-700">
          Como podemos ajudar você?
        </label>
        <div className="border-2 border-blue-100 bg-blue-50 p-4 rounded-xl flex items-center gap-4">
           <div className="bg-blue-600 p-2 rounded text-white">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
           </div>
           <div>
             <p className="font-bold text-blue-900">Nova Solicitação de Colete 3D</p>
             <p className="text-sm text-blue-700">Faça sua solicitação de confecção de Colete 3D</p>
           </div>
        </div>
      </div>

      <div className="pt-4">
        <label className="block text-sm font-bold text-gray-700 mb-2">
          Compartilhar com *
        </label>
        <select 
          value={formData.storeName}
          onChange={(e) => updateFormData({ storeName: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        >
          <option value="">Selecione sua loja...</option>
          <option value="000000 DILEPÉ TÉCNICA">000000 DILEPÉ TÉCNICA</option>
          <option value="Unidade SP - Matriz">Unidade SP - Matriz</option>
          <option value="Unidade RJ - Filial">Unidade RJ - Filial</option>
        </select>
        <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
          <span className="text-green-600">➔</span> Verifique se aparece o nome da sua loja.
        </p>
      </div>
    </div>
  );
};

export default Identification;
