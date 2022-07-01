import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './pages/users/users.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users.module.routing';
import { LoansModule } from '../loans/loans.module';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    UsersRoutingModule,
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    LoansModule,

    MatSliderModule
  ]
})
export class UsersModule { }
