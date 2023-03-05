import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AproposPageComponent } from './components/apropos-page/apropos-page.component';
import { BasketballPageComponent } from './components/basketball-page/basketball-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { EventsPageComponent } from './components/events-page/events-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';
import { TennisPageComponent } from './components/tennis-page/tennis-page.component';

const routes: Routes = [
  {path : "acceuil" , component:HomePageComponent},
  {path : "login" , component:LoginPageComponent},
  {path : "signup" , component:SignUpPageComponent},
  {path : "tennis" , component:TennisPageComponent},
  {path : "contact" , component:ContactPageComponent},
  {path : "Apropos" , component:AproposPageComponent},
  {path : "events" , component:EventsPageComponent},
  {path : "basketball" , component:BasketballPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
