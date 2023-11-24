const CURRENCYFORMATTER = new Intl.NumberFormat(undefined, {currency:"INR", style:"currency"})

export function formatCurrency(number:number){
  const USDToINR = 82
  return CURRENCYFORMATTER.format(number*USDToINR)
}

