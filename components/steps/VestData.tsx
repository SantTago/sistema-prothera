
import React from 'react';
import { FormData } from '../../types';

interface Props {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const VestData: React.FC<Props> = ({ formData, updateFormData }) => {
  return (
    <div className="space-y-8">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-900">4. Dados do Colete</h2>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Desenho do Transfer</label>
          <p className="text-xs text-gray-400 mb-1 italic">Escolha o desenho e cor que será estampado no colete</p>
          <select 
            value={formData.transferDesign}
            onChange={(e) => updateFormData({ transferDesign: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg"
          >
            <option>Branco (Monocromático)</option>
            <option>Preto (Monocromático)</option>
            <option>Bege (Monocromático)</option>
            <option>Estampado Galáxia</option>
            <option>Estampado Floral</option>
            <option>Camuflado</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Sensor de pressão com APP (EM BREVE)</label>
          <p className="text-xs text-gray-400 mb-1 italic">Deseja adicionar sensor durante a termo-moldagem?</p>
          <select 
            value={formData.pressureSensor}
            onChange={(e) => updateFormData({ pressureSensor: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg"
          >
            <option>Não</option>
            <option>Sim</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Material da termo-moldagem</label>
          <p className="text-xs text-gray-400 mb-1 italic">Escolha a matéria prima (em caso de dúvida, não preencher)</p>
          <select 
            value={formData.moldingMaterial}
            onChange={(e) => updateFormData({ moldingMaterial: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg"
          >
            <option>EURO-COP Copolímero importado</option>
            <option>PP-polipropileno nacional</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Espessura do Material</label>
          <p className="text-xs text-gray-400 mb-3 italic">Em caso de dúvida, deixar em branco para o projetista escolher</p>
          <div className="space-y-2">
            {['2 mm', '3 mm', '4 mm', '5 mm', '6 mm'].map(size => (
              <label key={size} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="thickness"
                  checked={formData.materialThickness === size}
                  onChange={() => updateFormData({ materialThickness: size })}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="text-gray-700">{size}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Método de envio</label>
          <p className="text-xs text-gray-400 mb-1 italic">Favor escolher a transportadora desejada</p>
          <select 
            value={formData.shippingMethod}
            onChange={(e) => updateFormData({ shippingMethod: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg"
          >
            <option>Sedex - Correios</option>
            <option>PAC - Correios</option>
            <option>Jadlog</option>
            <option>Retirada na Unidade</option>
            <option>OUTROS</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default VestData;
