import { Injectable, signal } from '@angular/core';
import {
  InvestmentModel,
  InvestmentResultModel,
} from '../models/investment.model';

@Injectable({ providedIn: 'root' })
export class InvestmentResultService {
  constructor() {}
  resultData = signal<InvestmentResultModel[] | []>([]);

  calculateInvestmentResults(investmentValues: InvestmentModel) {
    const annualData = [];
    let investmentValue = investmentValues.initialInvestment;

    for (let i = 0; i < investmentValues.years!; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue! * (investmentValues.expectedReturn! / 100);
      investmentValue! +=
        interestEarnedInYear + investmentValues.annualInvestment!;
      const totalInterest =
        investmentValue! -
        investmentValues.annualInvestment! * year -
        investmentValues.initialInvestment!;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: investmentValues.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested:
          investmentValues.initialInvestment! +
          investmentValues.annualInvestment! * year,
      });
    }

    this.resultData.set(annualData);
  }
}
