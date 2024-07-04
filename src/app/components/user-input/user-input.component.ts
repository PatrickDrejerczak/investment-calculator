import { Component, output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentResultsComponent } from '../investment-results/investment-results.component';
import {
  InvestmentModel,
  InvestmentResultModel,
} from '../../models/investment.model';
import { InvestmentResultService } from '../../services/investment-result.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule, InvestmentResultsComponent],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  calculate = output<void>();
  investmentValues: InvestmentModel = {};
  investmentData: InvestmentResultModel[] = [];
  initialInvestment = 0;
  annualInvestment = 0;
  expectedReturn = 0;
  duration = 0;

  private investmentService = inject(InvestmentResultService);

  onSubmit() {
    this.investmentValues = {
      initialInvestment: this.initialInvestment,
      annualInvestment: this.annualInvestment,
      expectedReturn: this.expectedReturn,
      years: this.duration,
    };

    console.log(this.investmentValues);

    this.calculateInvestmentData();
  }

  calculateInvestmentData() {
    console.log('I AM HERE');
    this.investmentData = this.investmentService.calculateInvestmentResults(
      this.investmentValues
    );

    console.log(this.investmentData);
  }
}
