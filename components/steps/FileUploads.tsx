
import React from 'react';
import { Upload, Calendar, FileType, Image as ImageIcon } from 'lucide-react';
import { FormData } from '../../types';

interface Props {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const FileUploads: React.FC<Props> = ({ formData, updateFormData }) => {
  return (
    <div className="space-y-8">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-900">8. Raio-X e Arquivos</h2>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
            <Calendar size={18} className="text-blue-600" />
            Informe a data do RX *
          </label>
          <input
            type="date"
            value={formData.rxDate}
            onChange={(e) => updateFormData({ rxDate: e.target.value })}
            className="w-full max-w-xs p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Imagem do RX *</label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer relative">
               <input 
                 type="file" 
                 accept="image/*" 
                 className="absolute inset-0 opacity-0 cursor-pointer" 
                 onChange={(e) => updateFormData({ rxImage: e.target.files?.[0] || null })}
               />
               <Upload className="text-gray-400 mb-2" size={32} />
               <p className="text-sm text-gray-600">
                 {formData.rxImage ? <span className="text-blue-600 font-bold">{formData.rxImage.name}</span> : 'Para anexar, solte ou procure os arquivos'}
               </p>
               <p className="text-xs text-gray-400 mt-1">Formatos aceitos: JPEG, PNG</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Arquivo 3D *</label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer relative">
               <input 
                 type="file" 
                 className="absolute inset-0 opacity-0 cursor-pointer"
                 onChange={(e) => updateFormData({ file3d: e.target.files?.[0] || null })}
               />
               <FileType className="text-gray-400 mb-2" size={32} />
               <p className="text-sm text-gray-600">
                 {formData.file3d ? <span className="text-blue-600 font-bold">{formData.file3d.name}</span> : 'Insira aqui o escaneamento no formato STL ou OBJ'}
               </p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Fotos *</label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer relative">
               <input 
                 type="file" 
                 multiple 
                 accept="image/*" 
                 className="absolute inset-0 opacity-0 cursor-pointer"
                 onChange={(e) => updateFormData({ patientPhotos: e.target.files })}
               />
               <ImageIcon className="text-gray-400 mb-2" size={32} />
               <p className="text-sm text-gray-600 text-center">
                 {formData.patientPhotos && formData.patientPhotos.length > 0 
                   ? <span className="text-blue-600 font-bold">{formData.patientPhotos.length} fotos selecionadas</span> 
                   : 'Adicione fotos do Paciente (Frontal, Posterior, Lateral, Adams)'}
               </p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
          <p className="text-xs text-yellow-800 font-medium">
            <span className="font-bold">Recomendação de Proteção de Imagem - LGPD:</span> Recomendamos que o rosto e quaisquer partes íntimas eventualmente expostas de crianças/adolescentes sejam devidamente cobertos ou desfocados através de edição de fotos antes do envio.
          </p>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Observações</label>
          <p className="text-xs text-gray-400 mb-2">Descreva qualquer necessidade ou observação especial</p>
          <textarea
            value={formData.observations}
            onChange={(e) => updateFormData({ observations: e.target.value })}
            className="w-full p-4 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-blue-500"
            placeholder="Digite aqui..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default FileUploads;
