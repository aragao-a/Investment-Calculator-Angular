import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-table',
  standalone: true,
  imports: [],
  templateUrl: './result-table.component.html',
  styleUrl: './result-table.component.css'
})
export class ResultTableComponent {

  @Input() results?: {
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number,
  }[];

}
