/**
 * Given a number, return its smallest prime factor. If a
 * number is prime, return that number itself.
 *
 * @example
 * smallestPrimeFactor(2); // => 2
 * smallestPrimeFactor(4); // => 2
 * smallestPrimeFactor(21); // => 3
 * smallestPrimeFactor(91); // => 7
 *
 * @param {number} num - A number
 * @returns {number} The smallest prime factor of num
 */

  function smallestPrimeFactors(num) {
    for (i=2; i<= num; i++){
if (num % i === 0){
  return i;}
}
  }
if (require.main === module) {
  console.log('Running sanity checks for smallestPrimeFactor:');
  console.log(smallestPrimeFactors(2)); // => 2
  console.log(smallestPrimeFactors(255)); // => 3
  console.log(smallestPrimeFactors(13*17*29)); // => 13
  console.log(smallestPrimeFactors(2 * 2 * 3)); // => 2
  console.log(smallestPrimeFactors(917329)); // => 7
  console.log(smallestPrimeFactors(125)); // => 5
  console.log(smallestPrimeFactors(21)); // => 3

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  }
module.exports = smallestPrimeFactors;
