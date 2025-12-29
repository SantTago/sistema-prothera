
import React from 'react';
import { FormData } from '../../types';

interface Props {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const ClinicalAnalysis: React.FC<Props> = ({ formData, updateFormData }) => {
  return (
    <div className="space-y-8">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-900">5. Análise Clínica</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Realiza Fisioterapia?</label>
          <select 
            value={formData.physiotherapy}
            onChange={(e) => updateFormData({ physiotherapy: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg"
          >
            <option value="">Selecionar...</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Método</label>
          <input
            type="text"
            value={formData.physioMethod}
            onChange={(e) => updateFormData({ physioMethod: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Ex: Schroth"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Frequência</label>
          <select 
            value={formData.physioFrequency}
            onChange={(e) => updateFormData({ physioFrequency: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg"
          >
            <option value="">Selecionar...</option>
            <option value="1x na semana">1x na semana</option>
            <option value="2x na semana">2x na semana</option>
            <option value="3x na semana">3x na semana</option>
            <option value="Diário">Diário</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Tratamento anterior?</label>
          <select 
            value={formData.previousTreatment}
            onChange={(e) => updateFormData({ previousTreatment: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg"
          >
            <option value="">Selecionar...</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-bold text-gray-700 mb-1">Em qual centro foi confeccionado o ultimo colete?</label>
          <input
            type="text"
            value={formData.previousCenter}
            onChange={(e) => updateFormData({ previousCenter: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
      </div>

      <div className="border-t pt-6 space-y-6">
        <h3 className="text-xl font-bold text-gray-900">6. Medidas Clínicas</h3>
        
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Classificação de Rigo pelo parceiro</label>
          <p className="text-xs text-gray-400 mb-1 italic">Informe qual sua classificação</p>
          <input
            type="text"
            value={formData.rigoClassification}
            onChange={(e) => updateFormData({ rigoClassification: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">D Mod</label>
          <div className="flex gap-4">
             {['Sim', 'Não'].map(opt => (
                <label key={opt} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    checked={formData.dMod === opt}
                    onChange={() => updateFormData({ dMod: opt })}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span>{opt}</span>
                </label>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicalAnalysis;
