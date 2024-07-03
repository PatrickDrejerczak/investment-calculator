import { Component, Input, Output, inject } from '@angular/core';
import {
  InvestmentModel,
  InvestmentResultModel,
} from '../../models/investment.model';
import { InvestmentResultService } from '../../services/investment-result.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentResultService);
  @Input() investmentValues!: InvestmentModel;

  investmentData: InvestmentResultModel[] = [];

  calculateInvestmentData() {
    this.investmentData = this.investmentService.calculateInvestmentResults(
      this.investmentValues
    );
  }
}
