import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReadyComponent } from './ready/ready.component';
import { Mcq1Component } from './mcq1/mcq1.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {environment} from '../environments/environment';

import {SharedService} from '../app/shared.service';
import { ResultComponent } from './result/result.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReadyComponent,
    Mcq1Component,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
