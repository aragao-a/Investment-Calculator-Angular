import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ResultTableComponent } from './result-table/result-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, CalculatorComponent, ResultTableComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {

  

}
