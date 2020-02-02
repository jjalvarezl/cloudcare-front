import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

import { Patient } from "../patients/patient"
import { PatientService } from "../patient.service"

@Component({
  selector: 'app-patient-detail',
  templateUrl: './add-patient.component.html',
  styleUrls: [ './add-patient.component.css' ]
})
export class PatientAddComponent {
  @Input() patient: Patient;

  constructor(
    private patientService: PatientService,
    private location: Location
  ) {
    this.patient = new Patient ();
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.patientService.addPatient(this.patient)
      .subscribe(() => this.goBack());
  }

}
