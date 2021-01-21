/* tslint:disable */
import { Criteres } from './criteres';
import { Evenement } from './evenement';
import { Groupes } from './groupes';
import { Jury } from './jury';
export interface Vote_groupes {
  commentaire?: string;
  critere?: Criteres;
  evenement?: Evenement;
  groupe?: Groupes;
  jury?: Jury;
  note?: number;
  voteGroupeId?: number;
}
