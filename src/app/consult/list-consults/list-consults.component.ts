import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConsultsService } from 'src/app/services/consults.service';

@Component({
  selector: 'app-list-consults',
  templateUrl: './list-consults.component.html',
  styleUrls: ['./list-consults.component.scss']
})
export class ListConsultsComponent implements OnInit {

  listConsult: any = []
  displayedColumns = ["description", "date", "prescription"]
  textSearch: any;
  patientId = "";

  constructor(
    private consultService: ConsultsService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.patientId) {
        this.patientId = params.patientId;
        this.consultService.getAllConsultsPatient(params.patientId).subscribe(result => {
          console.log("result", result);
          this.listConsult = result;
        }, error => {
          console.log(error);
          return false;
        });
      }
    });
  }

  viewDetail(id) {
    this.router.navigate(['/consult/detail/', id], { relativeTo: this.route, replaceUrl: false }).then(() => {
    });
  }

  goRegisterConsult(){
    this.router.navigate(['/consult/register/', this.patientId], { relativeTo: this.route, replaceUrl: false }).then(() => {
    });
  }
}
