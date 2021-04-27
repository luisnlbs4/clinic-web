import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }


  goDoctors() {
    this.router.navigate(['/doctor/'], { relativeTo: this.route, replaceUrl: false }).then(() => {
    });
  }
  goPatients() {
    this.router.navigate(['/patient/'], { relativeTo: this.route, replaceUrl: false }).then(() => {
    });

  }

}
