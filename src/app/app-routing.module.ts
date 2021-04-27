import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'patient',
    loadChildren: () => import('./patient/patient.module').then(module => module.PatientModule)
  },
  {
    path: 'consult',
    loadChildren: () => import('./consult/consult.module').then(module => module.ConsultModule)
  },
  {
    path: 'doctor',
    loadChildren: () => import('./doctor/doctor.module').then(module => module.DoctorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
