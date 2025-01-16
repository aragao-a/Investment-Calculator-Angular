import { Component, Output, EventEmitter } from '@angular/core';
import { CardComponent } from './shared/card/card.component';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CardComponent, FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

  @Output() tableGeneration = new EventEmitter<boolean>();
  
  initialInvestment = "";
  annualInvestment = "";
  expectedReturn = "";
  duration = "";

  showResults = false;

  onSubmit(initialInvestment?:string , annualInvestment?:string , expectedReturn?:string, duration?:string) {

    const annualData = [];
    let investmentValue = initialInvestment;
    var initialInvestmentNum = parseFloat(initialInvestment || '0');
    var investmentValueNum = initialInvestmentNum;
    var annualInvestmentNum = parseFloat(annualInvestment || '0');
    var expectedReturnNum = parseFloat(expectedReturn || '0');
    var durationNum = parseInt(duration || '0', 10);

    for (let i = 0; i < durationNum; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValueNum * (expectedReturnNum / 100);
      investmentValueNum += interestEarnedInYear + annualInvestmentNum;
      const totalInterest =
        investmentValueNum - annualInvestmentNum * year - initialInvestmentNum;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestmentNum + annualInvestmentNum * year,
      });
    }

    this.showResults = true;
    this.tableGeneration.emit(this.showResults);
  }
}
