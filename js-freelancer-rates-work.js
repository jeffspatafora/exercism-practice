// 3. Calculate the discounted rate for large projects
// Often, the freelancer's clients hire them for projects spanning over multiple months. In these cases, the freelancer decides to offer a discount for every full month, and the remaining days are billed at day rate. Every month has 22 billable days. Help them estimate their cost for such projects, given an hourly rate, the number of days the project spans, and a monthly discount rate. The discount is always passed as a number, where 42% becomes 0.42. The result must be rounded up to the nearest whole number.

// priceWithMonthlyDiscount(89, 230, 0.42);
// // => 97972


function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  return Math.ceil(((numDays % 22) * (8 * ratePerHour)) + ((numDays - (numDays % 22)) * ((8 * ratePerHour) - ((8 * ratePerHour) * discount))));
}




// function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
//   let discountedRate = ratePerHour * discount;
//   let noDiscountDays = numDays % 22;
//   let numDiscountedDays = numDays - noDiscountDays;
//   let discountedAmount = numDiscountedDays * discountedRate;
//   let nonDiscountedAmount = noDiscountDays * ratePerHour;
//   return discountedAmount + nonDiscountedAmount;
// }

// console.log(priceWithMonthlyDiscount(89, 230, 0.42));
// => 97972

// console.log(Math.floor(230 / 22));
// console.log(230 % 22);


// console.log(230 / 22);
// console.log(40 % 22);
// console.log(22 * 10 + 10);
// console.log(230 - 230 % 22);
// console.log(10 * .26);
// // * (89 - (89 * .42))) + ((230 % 22) * 89));
// console.log(89 * .5);
// console.log(89 * .42);
// console.log(89 - 37.379999999999995);
// console.log(((Math.floor(230 / 22)) * 22) * ((8 * 89) - ((8 - 89) * .42)));
// console.log(((numDays % 22) * ratePerHour) + ((8 * numDays - (numDays % 22)) * (ratePerHour - (ratePerHour * discount))));

// ((numDays % 22) * ratePerHour) + ((numDays - (numDays % 22)) * ((8 *ratePerHour) - ((8 * ratePerHour) * discount)));