import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentResultsComponent } from '../investment-results/investment-results.component';
import { InvestmentModel } from '../../models/investment.model';
import { InvestmentResultService } from '../../services/investment-result.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule, InvestmentResultsComponent],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  investmentValues = signal<InvestmentModel | {}>({});
  initialInvestment = signal(0);
  annualInvestment = signal(0);
  expectedReturn = signal(5);
  duration = signal(10);

  private investmentService = inject(InvestmentResultService);

  onSubmit() {
    this.investmentValues.set({
      initialInvestment: this.initialInvestment(),
      annualInvestment: this.annualInvestment(),
      expectedReturn: this.expectedReturn(),
      years: this.duration(),
    });

    this.calculateInvestmentData();

    this.initialInvestment.set(0);
    this.annualInvestment.set(0);
    this.expectedReturn.set(0);
    this.duration.set(0);
  }

  calculateInvestmentData() {
    this.investmentService.calculateInvestmentResults(this.investmentValues());
  }
}
