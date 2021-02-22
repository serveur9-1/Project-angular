/* tslint:disable */
import { Evenement } from './evenement';
import { Groupes } from './groupes';
import { Jury } from './jury';
export interface Comment_groupe {
  commentaire?: string;
  commentaireGroupeId?: number;
  evenement?: Evenement;
  groupes?: Groupes;
  jury?: Jury;
}
