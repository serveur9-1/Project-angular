/* tslint:disable */
import { Candidats } from './candidats';
import { Criteres } from './criteres';
import { Evenement } from './evenement';
import { Jury } from './jury';
export interface Vote_candidats {
  candidat?: Candidats;
  critere?: Criteres;
  evenement?: Evenement;
  jury?: Jury;
  note?: number;
  voteCandidatId?: number;
}
