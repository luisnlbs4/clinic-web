import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';
import { PatientsService } from 'src/app/services/patients.service';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  patientForm = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    birthDay: new FormControl('', Validators.required),
  });

  editing: boolean = false;
  userId: String = "";
  maxDate = new Date();

  constructor(
    private loadingService: LoadingService,
    private route: ActivatedRoute,
    private patientsService: PatientsService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.patientId === 'new') {
        this.editing = false;
      } else {
        this.userId = params.userId;
        this.editing = true;
      }
    })
  }

  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [day, month, year].join('-');
  }

  savePatient() {
    if (this.patientForm.valid) {
      this.loadingService.setLoadingState(true);
      this.patientForm.disable();
      let inputData = {
        'name': this.patientForm.value.name,
        'lastName': this.patientForm.value.lastName,
        'birthDay': this.formatDate(this.patientForm.value.birthDay),
        'address': this.patientForm.value.address
      }
      this.patientsService.registerPatient(inputData).subscribe(result => {
        this.loadingService.setLoadingState(false);
        this.router.navigate(['../patient'], { replaceUrl: true }).then(() => {
          this.loadingService.setLoadingState(false);
        });
      }, error => {
        this.loadingService.setLoadingState(false);
      });
    }
  }
}
