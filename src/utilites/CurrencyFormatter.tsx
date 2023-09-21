const CURRENCYFORMATTER = new Intl.NumberFormat(undefined, {currency:"INR", style:"currency"})

export function formatCurrency(number:number){
  return CURRENCYFORMATTER.format(number)
}

