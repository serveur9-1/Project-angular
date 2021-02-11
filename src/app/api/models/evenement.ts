/* tslint:disable */
import { Candidats } from './candidats';
export interface Evenement {
  candidatList?: Array<Candidats>;
  evenementDateDebut?: string;
  evenementDateFin?: string;
  evenementId?: number;
  evenementNom?: string;
  evenementPhoto?: string;
  evenementType?: string;
}
