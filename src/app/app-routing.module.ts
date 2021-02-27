import { ResultatComponent } from './resultat/resultat.component';
import { AddGroupe1Component } from './add-groupe1/add-groupe1.component';
import { AddCandidat1Component } from './add-candidat1/add-candidat1.component';
import { CritereAdd1Component } from './critere-add1/critere-add1.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { VoteComponent } from './vote/vote.component';
import { LoginComponent } from './login/login.component';
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
import { AddJury1Component } from './add-jury1/add-jury1.component';

const routes: Routes = [
  { path: 'events', component: EvenementComponent },
  { path: '', component: HomeComponent },
  { path: 'addCandidat/:id', component: AddCandidat1Component }, 
  { path: 'editCandidat/:id', component: AddCandidatComponent },
  { path: 'addEvent', component: AddEventComponent },
  { path: 'addEvent/:id', component: AddEventComponent },
  { path: 'addGroup/:id', component: AddGroupe1Component },
  { path: 'editGroup/:id', component: AddGroupComponent },
  { path: 'addCritere', component: AddCritereComponent },
  { path: 'editJury/:id', component: AddJuryComponent },
  { path: 'editCritere/:id', component: AddCritereComponent },
  { path: 'detailGrp/:id/:id2', component: DetailGroupeComponent },
  { path: 'login', component : LoginComponent },
  { path: 'vote/:id', component : VoteComponent },
  { path: 'detailEvent/:id', component : EventDetailComponent },
  { path: 'addJury/:id', component: AddJury1Component },
  { path: 'addCritere/:id', component: CritereAdd1Component },
  { path: 'resultat', component : ResultatComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
