import { Component } from '@angular/core';
import { CardComponent } from './shared/card/card.component';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

}
