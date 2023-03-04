import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AproposPageComponent } from './components/apropos-page/apropos-page.component';
import { AproposSectionComponent } from './components/apropos-section/apropos-section.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { DisciplinesSectionComponent } from './components/disciplines-section/disciplines-section.component';

@NgModule({
  declarations: [
    AppComponent,
    AproposPageComponent,
    AproposSectionComponent,
    ContactPageComponent,
    ContactSectionComponent,
    DisciplinesSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
