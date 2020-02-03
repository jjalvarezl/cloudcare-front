import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule }     from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PatientComponent } from './patients/patient.component';
import { PatientAddComponent } from './add-patient/add-patient.component';
import { PatientEditComponent } from './edit-patient/edit-patient.component';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    // RouterModule.forRoot([
    //   { path: '', component: PatientComponent },
    // ]),
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    PatientComponent,
    PatientAddComponent,
    PatientEditComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
