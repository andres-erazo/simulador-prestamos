import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoansComponent } from './pages/loans/loans.component';
import  {MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoansComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSliderModule
  ],
  exports: [
    LoansComponent
  ]
})
export class LoansModule { }
