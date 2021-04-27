import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorsService } from 'src/app/services/doctors.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  doctorForm = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    birthDay: new FormControl('', Validators.required),
    specialty: new FormControl('', Validators.required),
  });

  editing: boolean = false;
  userId: String = "";
  maxDate = new Date();

  constructor(
    private loadingService: LoadingService,
    private route: ActivatedRoute,
    private patientsService: DoctorsService,
    private router: Router
  ) { }

  ngOnInit(): void {
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

  saveDoctor() {
    if (this.doctorForm.valid) {
      this.loadingService.setLoadingState(true);
      this.doctorForm.disable();
      let inputData = {
        'name': this.doctorForm.value.name,
        'lastName': this.doctorForm.value.lastName,
        'birthDay': this.formatDate(this.doctorForm.value.birthDay),
        'address': this.doctorForm.value.address,
        'specialty': this.doctorForm.value.specialty
      }
      this.patientsService.registerDoctor(inputData).subscribe(result => {
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
