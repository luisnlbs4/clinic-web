import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultsService } from 'src/app/services/consults.service';
import { PatientsService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.scss']
})
export class ListPatientsComponent implements OnInit {


  listPatients: any = []
  displayedColumns = ['name', 'lastName', 'birthDay', 'address'];
  constructor(
    private patientsService: PatientsService,
    private consultsService: ConsultsService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  ngOnInit(): void {

    this.route.params.subscribe(params => {
      if (params.doctorId) {
        this.consultsService.getAllPatientsByDoctorId(params.doctorId).subscribe(result => {
          console.log("result", result);
          this.listPatients = result;
        }, error => {
          console.log(error);
          return false;
        });
      } else {
        this.patientsService.getAllPatients().subscribe(result => {
          console.log("result", result);
          this.listPatients = result;
        }, error => {
          console.log(error);
          return false;
        });
      }
    })
  }


  goConsults(id) {
    console.log("Patient Id", id)
    this.router.navigate(['/consult/list/', id], { relativeTo: this.route, replaceUrl: false }).then(() => {
    });
  }
}
