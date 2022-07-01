import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoansComponent } from './pages/loans/loans.component';
import  {MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { LoanModuleRouting } from './loan-list.module.routing';
import { MatCardModule } from '@angular/material/card';
import { LoansListComponent } from './components/loans-list/loans-list.component';
import { LoansCreateComponent } from './components/loans-create/loans-create.component';



@NgModule({
  declarations: [
    LoansComponent,
    LoansListComponent,
    LoansCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    HttpClientModule,
    MatIconModule,
    LoanModuleRouting
  ],
  exports: [
    LoansCreateComponent
  ]
})
export class LoansModule { }
