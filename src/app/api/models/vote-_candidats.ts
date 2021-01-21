/* tslint:disable */
import { Candidats } from './candidats';
import { Evenement } from './evenement';
import { Jury } from './jury';
export interface Vote_candidats {
  candidat?: Candidats;
  commentaire?: string;
  evenement?: Evenement;
  jury?: Jury;
  note?: number;
  voteCandidatId?: number;
}
