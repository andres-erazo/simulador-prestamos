import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { LoanListModuleRouting } from './loan-list.module.routing';
import { LoansListComponent } from './pages/loans-list/loans-list.component';



@NgModule({
  declarations: [
    LoansListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    LoanListModuleRouting
  ]
})
export class LoansListModule { }
