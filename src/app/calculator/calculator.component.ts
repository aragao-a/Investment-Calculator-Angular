import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

  field1Value = signal('0');
  field2Value = signal('0');
  field3Value = signal('5');
  field4Value = signal('10');

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {

    this.investmentService.calculateInvestmentResults({

      initialInvestment: +this.field1Value(),
      duration: +this.field4Value(), 
      expectedReturn: +this.field3Value(), 
      annualInvestment: +this.field2Value() 
    });

    this.field1Value.set('0');
    this.field2Value.set('0');
    this.field3Value.set('5');
    this.field4Value.set('10');
  }
}
