import { Component, OnInit } from '@angular/core';

// import { patients } from './patients';
import {Patient} from './patient'
import {PatientService} from '../patient.service'

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patients: Patient[];

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.getPatients();
  }

  getPatients(): void {
    this.patientService.getPatients()
    .subscribe(patients => this.patients = patients);
  }

  // add(firstNames: string): void {
  //   firstNames = firstNames.trim();
  //   if (!firstNames) { return; }
  //   this.patientService.addPatient({ firstNames } as Patient)
  //     .subscribe(hero => {
  //       this.patients.push(hero);
  //     });
  // }

  delete(patient: Patient): void {
    this.patients = this.patients.filter(h => h !== patient);
    this.patientService.deletePatient(patient).subscribe();
  }

  // share() {
  //   window.alert('The product has been shared!');
  // }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
