import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent implements OnInit {
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 1000;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;
  tickInterval = 1;


//   disabled = false;
//   max= 100;
//   min = 0;
//   step= 5
//  thumbLabel = "hola";
//  // [tickInterval]="getSliderTickInterval()"
//  value = "ss"


  constructor() { }

  ngOnInit(): void {
  }

}
