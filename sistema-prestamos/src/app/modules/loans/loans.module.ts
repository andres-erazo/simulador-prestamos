import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoansComponent } from './pages/loans/loans.component';
import  {MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    LoansComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  exports: [
    LoansComponent
  ]
})
export class LoansModule { }
