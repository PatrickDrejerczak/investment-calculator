import { Component, inject, computed } from '@angular/core';
import { InvestmentResultService } from '../../services/investment-result.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentResultService);

  results = computed(() => this.investmentService.resultData());

  // results = this.investmentService.resultData.asReadonly();
}
