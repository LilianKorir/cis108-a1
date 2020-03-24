/**
 * Return the largest number in the given array. You can
 * assume the input array is not empty.
 *
 * @param {number[]} array - A non-empty array of numbers
 * @returns {number} The largest number
 */
function max(array) {
  let maxSoFar = array[0];

  for (let element of array) {
    if (element > maxSoFar) {
      maxSoFar = element;
    }
  }
  return maxSoFar;
  // This is your job. :)
  // Don't use the built-in Math.max
}

if (require.main === module) {
  console.log('Running sanity checks for max:');
  // Add your own sanity checks here.
  console.log(max([1, 30, -89, 0]));
  console.log(max([1 * 78, 468, -999, 300]));
  console.log(max([89, 678, 889, -8946]));
  console.log(max([875, 9747, -9467, 0]));

  // How else will you be sure your code does what you think it does?
  console.log(max([-45, -90, -23, 'hi']));


}

module.exports = max;
