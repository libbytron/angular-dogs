// Essentials
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { AppComponent } from './app.component';
import { DogComponent } from './dog/dog.component';
import { DogDetailComponent } from './dog/dog-detail/dog-detail.component';

// Material
//import { trigger, state, style, transition, animate, AUTO_STYLE } from '@angular/animations'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DogComponent,
    DogDetailComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    //NoopAnimationsModule,
    MdButtonModule,
    MdCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
