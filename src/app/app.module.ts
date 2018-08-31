import { LoginModule } from './login/login.module';
import { EditService } from './edit.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogModule, DialogsModule } from '@progress/kendo-angular-dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { GridEditFormComponent } from './edit-form.component';
import { ViewDetailsComponent } from './view.component';
import { HttpModule } from '@angular/http';

import { DropDownListFilterComponent } from './dropdownlist-filter-component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { FormsModule } from '@angular/forms';

import { ErrorComponent } from './error/error.component';
import { FbComponent } from './fb/fb.component';
import { AuthGuardService } from './auth-guard.service';
import { AppAuthService } from './app-auth.service';



const appRoutes: Routes = [
  
  
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'fb', component: FbComponent, canActivate: [AuthGuardService] },
  { path: 'error', component: ErrorComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'fb' }
];

@NgModule({
  declarations: [
    AppComponent,
    GridEditFormComponent,
    ViewDetailsComponent,    
    DropDownListFilterComponent, 
    ErrorComponent, FbComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule,
    BrowserModule,
    ButtonsModule,
    BrowserAnimationsModule,
    GridModule,
    DialogsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    HttpModule,
    DropDownsModule, 
    LoginModule
  ],
  providers: [EditService, AuthGuardService, AppAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
