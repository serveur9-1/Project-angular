import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
