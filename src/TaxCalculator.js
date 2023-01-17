export const taxCalculator = (income) => {
    let gross_income = 0;
    let tax = 0;
    let weekly_income = 0;
    let weekly_gross_income = 0;
    let weekly_tax = 0;
    let monthly_income = 0;
    let monthly_gross_income = 0;
    let monthly_tax = 0;
    let fortnightly_income = 0;
    let fortnightly_gross_income = 0;
    let fortnightly_tax = 0;

    const TAX_20_PERCENT = 0.20;
    
  
    if (income <= 10_000) {
        return { gross_income: 0, tax: 0, income: 0, weekly_income:0, weekly_gross_income:0, weekly_tax:0, monthly_income:0, monthly_gross_income:0, monthly_tax:0, fortnightly_income:0, fortnightly_gross_income:0, fortnightly_tax:0 };
    } else if (income > 10_000) {
      console.log('Taxed at 20%');
      tax = (income * TAX_20_PERCENT).toFixed(2);
      gross_income = (income * (1 - TAX_20_PERCENT)).toFixed(2);
      weekly_income= (income / 52).toFixed(2);
      weekly_tax = (tax / 52).toFixed(2);
      weekly_gross_income = (gross_income / 52).toFixed(2);
      fortnightly_income= (income / 26).toFixed(2);
      fortnightly_tax = (tax / 26).toFixed(2);
      fortnightly_gross_income = (gross_income / 26).toFixed(2);
      monthly_income= (income / 12).toFixed(2);
      monthly_tax = (tax / 12).toFixed(2);
      monthly_gross_income = (gross_income / 12).toFixed(2);
        return { gross_income, tax, income, weekly_gross_income, weekly_income, weekly_tax, fortnightly_gross_income, fortnightly_income, fortnightly_tax, monthly_gross_income, monthly_income, monthly_tax };
    } 
  };