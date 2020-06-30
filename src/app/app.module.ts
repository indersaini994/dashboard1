import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardDetailComponent } from './dashboard-detail/dashboard-detail.component';
import { DigitalComponent } from './dashboard-detail/digital/digital.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    LoginComponent,
    DashboardDetailComponent,
    DigitalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent]
})
export class AppModule { }
