import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoanService } from '../../shared/loans.service';
import { loanInformation } from '../../shared/models/loan-information.model';

@Component({
  selector: 'app-loans-list',
  templateUrl: './loans-list.component.html',
  styleUrls: ['./loans-list.component.scss']
})
export class LoansListComponent implements OnInit {

  listLoan$!: Observable<loanInformation []>

  listLoan: loanInformation [] = []

  constructor(private loanService: LoanService) {}

  ngOnInit(): void {
    this.listLoan$ = this.loanService.getList();
  }

}
