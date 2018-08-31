import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { AppAuthService } from '../app-auth.service';



@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    ButtonsModule,
    DialogModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule

  ],
  declarations: [LoginComponent],
  providers: [AppAuthService]
})
export class LoginModule { }
