
export enum Step {
  IDENTIFICATION = 0,
  PATIENT_DATA = 1,
  VEST_DATA = 2,
  CLINICAL_ANALYSIS = 3,
  MEASUREMENTS = 4,
  FILES = 5,
  FINISH = 6
}

export interface FormData {
  // Identification
  storeName: string;

  // Patient Data
  patientName: string;
  sex: 'Feminino' | 'Masculino' | '';
  weight: string;
  height: string;
  age: string;

  // Vest Data
  transferDesign: string;
  pressureSensor: string;
  moldingMaterial: string;
  materialThickness: string;
  shippingMethod: string;

  // Clinical Analysis
  physiotherapy: string;
  physioMethod: string;
  physioFrequency: string;
  previousTreatment: string;
  previousCenter: string;
  rigoClassification: string;
  dMod: string;

  // Measurements
  cobbAngles: {
    proximal: string;
    thoracic: string;
    thoracolumbar: string;
    lumbar: string;
  };
  sidePreference: {
    proximal: 'D' | 'E' | '';
    thoracic: 'D' | 'E' | '';
    thoracolumbar: 'D' | 'E' | '';
    lumbar: 'D' | 'E' | '';
  };
  scoliometer: {
    proximal: string;
    thoracic: string;
    thoracolumbar: string;
    lumbar: string;
  };

  apice: {
    proximal: string;
    thoracic: string;
    thoracolumbar: string;
    lumbar: string;
  };

  anatomical: {
    axila: { circ: string; ml: string; ap: string; h: string };
    cintura: { circ: string; ml: string; ap: string; h: string };
    trocanter: { circ: string; ml: string; ap: string; h: string };
  };

  // Files
  rxDate: string;
  rxImage: File | null;
  file3d: File | null;
  patientPhotos: FileList | null;
  observations: string;
}
