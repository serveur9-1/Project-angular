/* tslint:disable */
import { Candidats } from './candidats';
import { Evenement } from './evenement';
import { Jury } from './jury';
export interface Comment_candidat {
  candidats?: Candidats;
  commentaire?: string;
  commentaireCandidatId?: number;
  evenement?: Evenement;
  jury?: Jury;
}
