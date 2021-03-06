import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

import { Patient, IdentificationType } from "../patients/patient"
import { PatientService } from "../patient.service"

@Component({
  selector: 'app-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: [ './add-patient.component.css' ]
})
export class PatientAddComponent implements OnInit {
  @Input() patient: Patient;
  @Input() identifications: { value: any; title: string; }[];

  constructor(
    private patientService: PatientService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.patient = new Patient();
    this.identifications = Object.keys(IdentificationType).map(key => ({ value: IdentificationType[key], title: key }));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.patientService.addPatient(this.patient)
      .subscribe(() => this.goBack());
  }

}
