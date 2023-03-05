import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AproposPageComponent } from './components/apropos-page/apropos-page.component';
import { AproposSectionComponent } from './components/apropos-section/apropos-section.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { DisciplinesSectionComponent } from './components/disciplines-section/disciplines-section.component';
import { EventsSectionComponent } from './components/events-section/events-section.component';
import { EventsPageComponent } from './components/events-page/events-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBar1Component } from './components/nav-bar1/nav-bar1.component';
import { NavBar2Component } from './components/nav-bar2/nav-bar2.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { IntroSectionComponent } from './components/intro-section/intro-section.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';
import { TeamSectionComponent } from './components/team-section/team-section.component';
import { TennisPageComponent } from './components/tennis-page/tennis-page.component';
import { BasketballPageComponent } from './components/basketball-page/basketball-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AproposPageComponent,
    AproposSectionComponent,
    ContactPageComponent,
    ContactSectionComponent,
    DisciplinesSectionComponent,
    EventsSectionComponent,
    EventsPageComponent,
    FooterComponent,
    HeaderComponent,
    NavBar1Component,
    NavBar2Component,
    HomePageComponent,
    IntroSectionComponent,
    LoginPageComponent,
    SignUpPageComponent,
    TeamSectionComponent,
    TennisPageComponent,
    BasketballPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
