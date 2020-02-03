import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// import { patients } from './patients';
import {Patient, IdentificationType} from './patient'
import {PatientService} from '../patient.service'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patients: Patient[];
  identification = function (type:IdentificationType) {
    return IdentificationType[type]
  };

  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPatients();
  }

  getPatients(): void {
    this.patientService.getPatients()
    .subscribe(patients => this.patients = patients);
  }

  delete(patient: Patient): void {
    this.patients = this.patients.filter(h => h !== patient);
    this.patientService.deletePatient(patient).subscribe();
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
