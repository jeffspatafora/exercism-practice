// export function totalBirdCount(birdsPerDay) {
//   let totalBirds = 0;
//   for (let i = 0; i < birdsPerDay.length; i++) {
//     totalBirds = totalBirds + birdsPerDay[i];
//   }
//   return totalBirds;
// }

// /**
//  * Calculates the total number of birds seen in a specific week.
//  *
//  * @param {number[]} birdsPerDay
//  * @param {number} week
//  * @returns {number} birds counted in the given week
//  */
function birdsInWeek(birdsPerDay, week) {
  let totalBirdsInWeek = 0;
  for (let i = (7 * week) - 7; i < birdsPerDay.length - ((7 * week) - 7); i++) {
    console.log(i);
    totalBirdsInWeek = totalBirdsInWeek + birdsPerDay[i];
  }
  return console.log(totalBirdsInWeek);
  // let totalBirdsInWeek = 0;
  // for (let i = (7 * week) - 7; i <= 7; i++) {
  //   console.log(i);
  //   totalBirdsInWeek = totalBirdsInWeek + birdsPerDay[i];
  // }
  // return console.log(totalBirdsInWeek);
}

birdsInWeek([4, 7, 3, 2, 1, 1, 2, 0, 2, 3, 2, 7, 1, 3, 0, 6, 5, 3, 7, 2, 3], 2);
// birdsInWeek([3, 0, 5, 1, 0, 4, 1, 0, 3, 4, 3, 0, 8, 0], 1);
// birdsInWeek([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1], 2);

// /**
//  * Fixes the counting mistake by increasing the bird count
//  * by one for every second day.
//  *
//  * @param {number[]} birdsPerDay
//  * @returns {number[]} corrected bird count data
//  */
// export function fixBirdCountLog(birdsPerDay) {
//   throw new Error('Please implement the fixBirdCountLog function');
// }