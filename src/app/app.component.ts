import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LoadingService } from './services/loading.service';
import { PatientsService } from './services/patients.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clinic-web';
  loading = false;
  loadingSubscription;
  constructor(private loadingService: LoadingService, private cdr: ChangeDetectorRef) {
    this.loadingSubscription = this.loadingService.getLoadingState().subscribe(result => {
      this.loading = result;
      this.cdr.detectChanges();
    });
  }
}
