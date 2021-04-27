import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListConsultsComponent } from './list-consults/list-consults.component';

import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table'

import { ReactiveFormsModule } from '@angular/forms';
import { ConsultComponent } from './consult/consult.component'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: 'list/:patientId',
    component: ListConsultsComponent
  },
  {
    path: 'register/:id',
    component: ConsultComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  }
];

@NgModule({
  declarations: [
    ListConsultsComponent,
    ConsultComponent,
    DetailComponent
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
    MatSelectModule,
    MatButtonModule,
    RouterModule.forChild(routes),
  ]
})


export class ConsultModule { }
