import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputBindingComponent } from "./inputBinding/inputBinding.component";
import { InputChildComponent } from "./inputBinding/inputchild.component";
import { OutputBindingComponent } from "./outputBinding/outputBinding.component";
import { OutputChildComponent } from "./outputBinding/outputchild.component";
import { ReactiveFormsModule } from "@angular/forms";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatButtonModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  declarations: [
    //AppComponent,InputBindingComponent,InputChildComponent
    AppComponent, OutputBindingComponent, OutputChildComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
