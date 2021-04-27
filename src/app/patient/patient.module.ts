import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPatientsComponent } from './list-patients/list-patients.component';
import { PatientComponent } from './patient/patient.component';


import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table'  
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'; 

import { ReactiveFormsModule } from '@angular/forms'



const routes: Routes = [
  {
    path: '',
    component: ListPatientsComponent
  },
  {
    path: 'listDoctor/:doctorId',
    component: ListPatientsComponent
  },
  {
    path: ':patientId',
    component: PatientComponent
  }
];

@NgModule({
  declarations: [
    ListPatientsComponent,
    PatientComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forChild(routes),
  ]
})
export class PatientModule { }
