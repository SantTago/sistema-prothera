
import React from 'react';
import { FormData } from '../../types';

interface Props {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const PatientData: React.FC<Props> = ({ formData, updateFormData }) => {
  return (
    <div className="space-y-8">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-900">3. Dados do Paciente</h2>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">
            Nome Completo do Paciente *
          </label>
          <input
            type="text"
            value={formData.patientName}
            onChange={(e) => updateFormData({ patientName: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Ex: João da Silva"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-3">Sexo *</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                name="sex"
                checked={formData.sex === 'Feminino'}
                onChange={() => updateFormData({ sex: 'Feminino' })}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-gray-700 group-hover:text-blue-600 transition-colors">Feminino</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                name="sex"
                checked={formData.sex === 'Masculino'}
                onChange={() => updateFormData({ sex: 'Masculino' })}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-gray-700 group-hover:text-blue-600 transition-colors">Masculino</span>
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Peso *</label>
            <p className="text-xs text-gray-400 mb-1">Informe o peso em KG</p>
            <input
              type="number"
              value={formData.weight}
              onChange={(e) => updateFormData({ weight: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Altura *</label>
            <p className="text-xs text-gray-400 mb-1">Informe altura em CM</p>
            <input
              type="number"
              value={formData.height}
              onChange={(e) => updateFormData({ height: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Idade *</label>
            <p className="text-xs text-gray-400 mb-1">Informar idade em anos</p>
            <input
              type="number"
              value={formData.age}
              onChange={(e) => updateFormData({ age: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientData;
