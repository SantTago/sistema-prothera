
import React from 'react';
import { FormData } from '../../types';

interface Props {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const Measurements: React.FC<Props> = ({ formData, updateFormData }) => {
  const sections = ['proximal', 'thoracic', 'thoracolumbar', 'lumbar'] as const;

  const handleCobbChange = (key: keyof typeof formData.cobbAngles, val: string) => {
    updateFormData({ cobbAngles: { ...formData.cobbAngles, [key]: val } });
  };

  const handleScoliometerChange = (key: keyof typeof formData.scoliometer, val: string) => {
    updateFormData({ scoliometer: { ...formData.scoliometer, [key]: val } });
  };

  const handleSideChange = (key: keyof typeof formData.sidePreference, val: 'D' | 'E') => {
    updateFormData({ sidePreference: { ...formData.sidePreference, [key]: val } });
  };

  const handleApiceChange = (key: keyof typeof formData.apice, val: string) => {
    updateFormData({ apice: { ...formData.apice, [key]: val } });
  };

  const handleAnatomicalChange = (point: 'axila' | 'cintura' | 'trocanter', field: 'circ' | 'ml' | 'ap' | 'h', val: string) => {
    updateFormData({
      anatomical: {
        ...formData.anatomical,
        [point]: { ...formData.anatomical[point], [field]: val }
      }
    });
  };

  return (
    <div className="space-y-8">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-900">7. Ápice e Medidas</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {sections.map(s => (
          <div key={s}>
            <label className="block text-sm font-bold text-gray-700 capitalize mb-1">{s.replace('thoraco', 'toraco')}</label>
            <input
              type="text"
              value={formData.apice[s]}
              onChange={(e) => handleApiceChange(s, e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50 text-xs font-bold text-gray-500 uppercase">
              <th className="p-3 text-left border">Nível</th>
              <th className="p-3 text-left border">Ângulo de COBB</th>
              <th className="p-3 text-left border">Lateral</th>
              <th className="p-3 text-left border">Escoliometro</th>
            </tr>
          </thead>
          <tbody>
            {sections.map(s => (
              <tr key={s}>
                <td className="p-3 border font-bold text-gray-700 bg-gray-50 capitalize">{s.replace('thoraco', 'toraco')}</td>
                <td className="p-3 border">
                   <input 
                     type="text" 
                     value={formData.cobbAngles[s]} 
                     onChange={(e) => handleCobbChange(s, e.target.value)}
                     className="w-full p-2 border rounded" 
                   />
                </td>
                <td className="p-3 border">
                   <div className="flex flex-col gap-1">
                     <label className="flex items-center gap-1 text-xs">
                       <input type="radio" checked={formData.sidePreference[s] === 'D'} onChange={() => handleSideChange(s, 'D')} /> D
                     </label>
                     <label className="flex items-center gap-1 text-xs">
                       <input type="radio" checked={formData.sidePreference[s] === 'E'} onChange={() => handleSideChange(s, 'E')} /> E
                     </label>
                   </div>
                </td>
                <td className="p-3 border">
                   <input 
                     type="text" 
                     value={formData.scoliometer[s]} 
                     onChange={(e) => handleScoliometerChange(s, e.target.value)}
                     className="w-full p-2 border rounded" 
                   />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pt-8 border-t flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1 w-full overflow-x-auto">
          <table className="w-full border-collapse text-center">
            <thead>
              <tr className="bg-blue-50 text-[10px] font-bold text-blue-800 uppercase">
                <th className="p-2 border">Medidas (CM)</th>
                <th className="p-2 border">Circunferência</th>
                <th className="p-2 border">Mediolateral</th>
                <th className="p-2 border">Anteroposterior</th>
                <th className="p-2 border">Altura</th>
              </tr>
            </thead>
            <tbody>
              {(['axila', 'cintura', 'trocanter'] as const).map(point => (
                <tr key={point}>
                  <td className="p-2 border font-bold bg-gray-50 capitalize">{point}</td>
                  <td className="p-2 border">
                    <input type="text" className="w-16 p-1 border rounded text-center" value={formData.anatomical[point].circ} onChange={(e) => handleAnatomicalChange(point, 'circ', e.target.value)} />
                  </td>
                  <td className="p-2 border">
                    <input type="text" className="w-16 p-1 border rounded text-center" value={formData.anatomical[point].ml} onChange={(e) => handleAnatomicalChange(point, 'ml', e.target.value)} />
                  </td>
                  <td className="p-2 border">
                    <input type="text" className="w-16 p-1 border rounded text-center" value={formData.anatomical[point].ap} onChange={(e) => handleAnatomicalChange(point, 'ap', e.target.value)} />
                  </td>
                  <td className="p-2 border">
                    <input type="text" className="w-16 p-1 border rounded text-center" value={formData.anatomical[point].h} onChange={(e) => handleAnatomicalChange(point, 'h', e.target.value)} disabled={point === 'trocanter'} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="w-full md:w-64 flex justify-center">
          <img 
            src="https://picsum.photos/seed/spine/300/400" 
            alt="Anatomy Guide" 
            className="rounded-lg shadow-md border border-gray-200 object-cover w-full h-auto max-w-[200px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Measurements;
