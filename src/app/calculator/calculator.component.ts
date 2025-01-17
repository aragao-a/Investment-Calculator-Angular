import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  
  @Output() calculate = new EventEmitter<{
    initialInvestment: number,
    duration: number, 
    expectedReturn: number, 
    annualInvestment: number 
  }>();

  field1Value = '0';
  field2Value = '0';
  field3Value = '5';
  field4Value = '10';

  onSubmit() {

    this.calculate.emit({

      initialInvestment: +this.field1Value,
      duration: +this.field4Value, 
      expectedReturn: +this.field3Value, 
      annualInvestment: +this.field2Value 
    });
  }
}
