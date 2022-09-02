function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  let discountedRate = ratePerHour * discount;
  let noDiscountDays = numDays % 22;
  let numDiscountedDays = numDays - noDiscountDays;
  let discountedAmount = numDiscountedDays * discountedRate;
  let nonDiscountedAmount = noDiscountDays * ratePerHour;
  return discountedAmount + nonDiscountedAmount;
}

console.log(priceWithMonthlyDiscount(89, 230, 0.42));