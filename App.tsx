
import React, { useState } from 'react';
import { 
  ClipboardList, 
  User, 
  Settings, 
  Stethoscope, 
  Ruler, 
  FileUp, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight,
  Send
} from 'lucide-react';
import { Step, FormData as FormDataType } from './types';
import Header from './components/Header';
import PatientData from './components/steps/PatientData';
import VestData from './components/steps/VestData';
import ClinicalAnalysis from './components/steps/ClinicalAnalysis';
import Measurements from './components/steps/Measurements';
import FileUploads from './components/steps/FileUploads';
import FinishStep from './components/steps/FinishStep';
import Identification from './components/steps/Identification';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [viewMode, setViewMode] = useState<'form' | 'admin'>('form');
  const [currentStep, setCurrentStep] = useState<Step>(Step.IDENTIFICATION);
  const [formData, setFormData] = useState<FormDataType>({
    storeName: '',
    patientName: '',
    sex: '',
    weight: '',
    height: '',
    age: '',
    transferDesign: 'Branco (Monocromático)',
    pressureSensor: 'Não',
    moldingMaterial: 'EURO-COP Copolímero importado',
    materialThickness: '',
    shippingMethod: 'Sedex - Correios',
    physiotherapy: '',
    physioMethod: '',
    physioFrequency: '',
    previousTreatment: '',
    previousCenter: '',
    rigoClassification: '',
    dMod: 'Não',
    cobbAngles: { proximal: '', thoracic: '', thoracolumbar: '', lumbar: '' },
    sidePreference: { proximal: '', thoracic: '', thoracolumbar: '', lumbar: '' },
    scoliometer: { proximal: '', thoracic: '', thoracolumbar: '', lumbar: '' },
    apice: { proximal: '', thoracic: '', thoracolumbar: '', lumbar: '' },
    anatomical: {
      axila: { circ: '', ml: '', ap: '', h: '' },
      cintura: { circ: '', ml: '', ap: '', h: '' },
      trocanter: { circ: '', ml: '', ap: '', h: '0' },
    },
    rxDate: '',
    rxImage: null,
    file3d: null,
    patientPhotos: null,
    observations: '',
  });

  const steps = [
    { label: 'Início', icon: ClipboardList },
    { label: 'Paciente', icon: User },
    { label: 'Colete', icon: Settings },
    { label: 'Clínica', icon: Stethoscope },
    { label: 'Medidas', icon: Ruler },
    { label: 'Arquivos', icon: FileUp },
    { label: 'Fim', icon: CheckCircle2 },
  ];

  const updateFormData = (data: Partial<FormDataType>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, Step.FINISH));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, Step.IDENTIFICATION));

  const renderFormContent = () => {
    switch (currentStep) {
      case Step.IDENTIFICATION:
        return <Identification formData={formData} updateFormData={updateFormData} />;
      case Step.PATIENT_DATA:
        return <PatientData formData={formData} updateFormData={updateFormData} />;
      case Step.VEST_DATA:
        return <VestData formData={formData} updateFormData={updateFormData} />;
      case Step.CLINICAL_ANALYSIS:
        return <ClinicalAnalysis formData={formData} updateFormData={updateFormData} />;
      case Step.MEASUREMENTS:
        return <Measurements formData={formData} updateFormData={updateFormData} />;
      case Step.FILES:
        return <FileUploads formData={formData} updateFormData={updateFormData} />;
      case Step.FINISH:
        return <FinishStep onReset={() => setCurrentStep(Step.IDENTIFICATION)} />;
      default:
        return null;
    }
  };

  const isLastStep = currentStep === Step.FILES;
  const isFinalScreen = currentStep === Step.FINISH;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      <Header 
        viewMode={viewMode} 
        setViewMode={setViewMode} 
        onLogout={() => {
          setIsAuthenticated(false);
          setViewMode('form');
        }}
        isAuthenticated={isAuthenticated}
      />

      <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
        {viewMode === 'admin' ? (
          isAuthenticated ? (
            <AdminPanel />
          ) : (
            <Login onLogin={() => setIsAuthenticated(true)} />
          )
        ) : (
          <div className="max-w-4xl mx-auto">
            {/* Stepper Header */}
            {!isFinalScreen && (
              <div className="mb-8 hidden md:block">
                <div className="flex items-center justify-between relative px-2">
                  <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 -z-10" />
                  {steps.map((step, idx) => {
                    const Icon = step.icon;
                    const isActive = currentStep === idx;
                    const isCompleted = currentStep > idx;
                    return (
                      <div key={idx} className="flex flex-col items-center flex-1 bg-gray-50">
                        <div className={`
                          w-10 h-10 rounded-full flex items-center justify-center border-2 
                          transition-all duration-300 z-10
                          ${isActive ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200' : ''}
                          ${isCompleted ? 'bg-green-500 border-green-500 text-white' : ''}
                          ${!isActive && !isCompleted ? 'bg-white border-gray-300 text-gray-400' : ''}
                        `}>
                          {isCompleted ? <CheckCircle2 size={20} /> : <Icon size={20} />}
                        </div>
                        <span className={`text-[10px] mt-2 font-bold uppercase tracking-tighter ${isActive ? 'text-blue-600' : 'text-gray-400'}`}>
                          {step.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Mobile Stepper Info */}
            {!isFinalScreen && (
              <div className="md:hidden mb-4 text-center">
                 <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                   Etapa {currentStep + 1} de {steps.length - 1}: {steps[currentStep].label}
                 </span>
              </div>
            )}

            {/* Content Area */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
              {renderFormContent()}

              {/* Navigation Controls */}
              {!isFinalScreen && (
                <div className="mt-10 pt-6 border-t border-gray-100 flex justify-between items-center">
                  <button
                    onClick={prevStep}
                    disabled={currentStep === Step.IDENTIFICATION}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium transition-colors
                      ${currentStep === Step.IDENTIFICATION 
                        ? 'text-gray-300 cursor-not-allowed' 
                        : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    <ChevronLeft size={20} />
                    Anterior
                  </button>

                  <button
                    onClick={nextStep}
                    className={`flex items-center gap-2 px-8 py-2.5 rounded-lg font-bold text-white transition-all transform active:scale-95
                      ${isLastStep ? 'bg-green-600 hover:bg-green-700 shadow-green-200 shadow-lg' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-200 shadow-lg'}`}
                  >
                    {isLastStep ? (
                      <>
                        <Send size={20} />
                        Enviar Solicitação
                      </>
                    ) : (
                      <>
                        Próximo
                        <ChevronRight size={20} />
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <footer className="py-6 text-center text-gray-400 text-sm border-t border-gray-100 bg-white mt-auto">
        © {new Date().getFullYear()} Dilepé Técnica - Todos os direitos reservados
      </footer>
    </div>
  );
};

export default App;
