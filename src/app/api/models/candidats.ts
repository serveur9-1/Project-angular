/* tslint:disable */
import { Evenement } from './evenement';
export interface Candidats {
  candidatCode?: string;
  candidatEmail?: string;
  candidatId?: number;
  candidatNom?: string;
  candidatPhoto?: ArrayBuffer;
  candidatPrenoms?: string;
  candidatTelephone?: string;
  evenement?: Evenement;
}
