import { Component, OnInit, Pipe } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DoctorsService } from 'src/app/services/doctors.service';
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'app-list-doctors',
  templateUrl: './list-doctors.component.html',
  styleUrls: ['./list-doctors.component.scss']
})

export class ListDoctorsComponent implements OnInit {

  listDoctors: any = []
  displayedColumns = ['name', 'lastName', 'birthDay', 'specialty', 'address'];


  constructor(
    private DoctorsService: DoctorsService,
    private router: Router,
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.DoctorsService.getAllDoctors().subscribe(result => {
      console.log("result", result);
      this.listDoctors = result;
    }, error => {
      console.log(error);
      return false;
    });
  }

  goPatients(id) {
    console.log("Patient Id", id)
    this.router.navigate(['/patient/listDoctor/', id], { relativeTo: this.route, replaceUrl: false }).then(() => {
    });
  }
}
