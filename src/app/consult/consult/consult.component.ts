import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultsService } from 'src/app/services/consults.service';
import { DoctorsService } from 'src/app/services/doctors.service';
import { LoadingService } from 'src/app/services/loading.service';
import { PatientsService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.scss']
})
export class ConsultComponent implements OnInit {


  consultForm = new FormGroup({
    description: new FormControl('', Validators.required),
    prescription: new FormControl('', Validators.required),
    doctorId: new FormControl('', Validators.required),
  });

  patientInformation: any = {}
  doctorsInformation: any = []

  constructor(
    private route: ActivatedRoute,
    private doctorsService: DoctorsService,
    private consultService: ConsultsService,
    private patientsService: PatientsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.doctorsService.getAllDoctors().subscribe(resultDoctors => {
          console.log("resultDoctor", resultDoctors);
          this.doctorsInformation = resultDoctors;
        }, error => {
          console.log(error);
        });

        this.patientsService.getPatientById(params.id).subscribe(resultPatient => {
          console.log("resultPatient", resultPatient);
          this.patientInformation = resultPatient;
        }, error => {
          console.log(error);
        });
      }
    });
  }

  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear(),
      hours = '' + d.getHours(),
      minutes = '' + d.getMinutes(),
      seconds = '' + d.getSeconds();


    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    if (hours.length < 2) hours = '0' + hours;
    if (minutes.length < 2) minutes = '0' + minutes;
    if (seconds.length < 2) seconds = '0' + seconds;

    return [day, month, year].join('-') + " " + [hours, minutes, seconds].join(':');
  }

  saveConsult() {
    if (this.consultForm.valid) {
      this.consultForm.disable();
      let inputData = {
        'doctorId': this.consultForm.value.doctorId,
        'patientId': this.patientInformation.id,
        'description': this.consultForm.value.description,
        'prescription': this.consultForm.value.prescription,
        'date': this.formatDate(new Date()),
      }
      this.consultService.registerConsult(inputData).subscribe(result => {
        this.router.navigate(['../consult/list/', this.patientInformation.id], { replaceUrl: true }).then(() => {
        });
      }, error => {
      });
      console.log("sdgfsdgfgsd")
    }
  }


}
