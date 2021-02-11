import { DetailGroupeComponent } from './detail-groupe/detail-groupe.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCandidatComponent } from './add-candidat/add-candidat.component';
import { AddCritereComponent } from './add-critere/add-critere.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { AddJuryComponent } from './add-jury/add-jury.component';
import { CandidatComponent } from './candidat/candidat.component';
import { CritereComponent } from './critere/critere.component';
import { EvenementComponent } from './evenement/evenement.component';
import { GroupeComponent } from './groupe/groupe.component';
import { HomeComponent } from './home/home.component';
import { JuryComponent } from './jury/jury.component';

const routes: Routes = [
  { path: 'events', component: EvenementComponent },
  { path: '', component: HomeComponent },
  { path: 'listCandidats', component: CandidatComponent },
  { path: 'criteres', component: CritereComponent },
  { path: 'groupes', component: GroupeComponent },
  { path: 'juries', component: JuryComponent },
  { path: 'addCandidat', component: AddCandidatComponent },
  { path: 'addCandidat/:id', component: AddCandidatComponent },
  { path: 'addEvent', component: AddEventComponent },
  { path: 'addEvent/:id', component: AddEventComponent },
  { path: 'addGroup', component: AddGroupComponent },
  { path: 'addGroup/:id', component: AddGroupComponent },
  { path: 'addCritere', component: AddCritereComponent },
  { path: 'addJury', component: AddJuryComponent },
  { path: 'addJury/:id', component: AddJuryComponent },
  { path: 'addCritere/:id', component: AddCritereComponent },
  { path: 'detailGrp/:id', component: DetailGroupeComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
