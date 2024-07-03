export interface InvestmentModel {
  years: number;
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
}

export interface InvestmentResultModel {
  year?: number;
  interest?: number;
  valueEndOfYear?: number;
  annualInvestment?: number;
  totalInterest?: number;
  totalAmountInvested?: number;
}
