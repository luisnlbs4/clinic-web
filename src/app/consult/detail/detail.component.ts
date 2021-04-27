import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultsService } from 'src/app/services/consults.service';
import { DoctorsService } from 'src/app/services/doctors.service';
import { PatientsService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  doctorInformation : any = {}
  patientInformation :any = {}
  consultInformation :any = {}

  constructor(
    private route: ActivatedRoute,
    private consultsService : ConsultsService,
    private doctorsService: DoctorsService,
    private patientsService: PatientsService
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      if (params.id) {
        this.consultsService.getConsultById(params.id).subscribe((result:any) => {
          console.log("result", result);
          this.consultInformation = result;

          this.doctorsService.getDoctorById(result.doctorId).subscribe(resultDoctor => {
            console.log("resultDoctor", resultDoctor);
            this.doctorInformation = resultDoctor;
          }, error => {
            console.log(error);
            return false;
          });

          this.patientsService.getPatientById(result.patientId).subscribe(resultPatient => {
            console.log("resultPatient", resultPatient);
            this.patientInformation = resultPatient;
          }, error => {
            console.log(error);
            return false;
          });


        }, error => {
          console.log(error);
          return false;
        });
      }else{

      }
    })

  }

}
