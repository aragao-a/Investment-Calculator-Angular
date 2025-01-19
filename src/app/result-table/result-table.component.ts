import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-result-table',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './result-table.component.html',
  styleUrl: './result-table.component.css'
})
export class ResultTableComponent {

  private investmentService = inject(InvestmentService);

  results = computed(() => this.investmentService.resultData());
}
