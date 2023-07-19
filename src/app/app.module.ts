import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionFormComponent } from './section-form/section-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    SectionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AccordionModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
