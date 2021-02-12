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
  ],
  imports: [
    ApiModule.forRoot({rootUrl: 'http://127.0.0.1:8080'}),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
