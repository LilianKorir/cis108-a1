/**
 * Returns the sum of the numbers in the input array. If
 * the array is empty the function returns 0.
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The sum
 */
function sum(array) {
  let sumtotal = 0;
  for (let num of array) {
    sumtotal += num;
  }
  return sumtotal;
  // This is your job. :)
}

if (require.main === module) {
  console.log('Running sanity checks for sum:');
  console.log(sum([23, 67, 78])) //168
  console.log(sum([-697, 687, 178])) //168
  console.log(sum([1, 6, 89])) //96
  console.log(sum([1, -1, 0])) //0
  console.log(sum([])) //0


  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = sum;
