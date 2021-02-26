import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiModule } from './api/api.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EvenementComponent } from './evenement/evenement.component';
import { CandidatComponent } from './candidat/candidat.component';
import { GroupeComponent } from './groupe/groupe.component';
import { JuryComponent } from './jury/jury.component';
import { CritereComponent } from './critere/critere.component';
import { AddCandidatComponent } from './add-candidat/add-candidat.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { AddCritereComponent } from './add-critere/add-critere.component';
import { AddJuryComponent } from './add-jury/add-jury.component';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailGroupeComponent } from './detail-groupe/detail-groupe.component';
import { LoginComponent } from './login/login.component';
import { VoteComponent } from './vote/vote.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { AddJury1Component } from './add-jury1/add-jury1.component';
import { CritereAdd1Component } from './critere-add1/critere-add1.component';
import { AddCandidat1Component } from './add-candidat1/add-candidat1.component';
import { AddGroupe1Component } from './add-groupe1/add-groupe1.component';
import { ResultatComponent } from './resultat/resultat.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    EvenementComponent,
    CandidatComponent,
    GroupeComponent,
    JuryComponent,
    CritereComponent,
    AddCandidatComponent,
    AddEventComponent,
    AddGroupComponent,
    AddCritereComponent,
    AddJuryComponent,
    DetailGroupeComponent,
    LoginComponent,
    VoteComponent,
    EventDetailComponent,
    AddJury1Component,
    CritereAdd1Component,
    AddCandidat1Component,
    AddGroupe1Component,
    ResultatComponent,
  ],
  imports: [
    ApiModule.forRoot({rootUrl: 'http://127.0.0.1:8080'}),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
