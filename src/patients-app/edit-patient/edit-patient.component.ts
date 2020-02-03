import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Patient, IdentificationType } from "../patients/patient"
import { PatientService } from "../patient.service"

@Component({
  selector: 'edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: [ './edit-patient.component.css' ]
})
export class PatientEditComponent implements OnInit {
  @Input() patient: Patient;
  @Input() identifications: { value: any; title: string; }[];

  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPatient();
    this.identifications = Object.keys(IdentificationType).map(key => ({ value: IdentificationType[key], title: key }));
  }

  getPatient(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.patientService.getPatient(id)
      .subscribe(patient => this.patient = patient);
  }

  goBack(): void {
    this.location.back();
  }

  update(): void {
    this.patientService.updatePatient(this.patient)
      .subscribe(() => this.goBack());
  }

}
