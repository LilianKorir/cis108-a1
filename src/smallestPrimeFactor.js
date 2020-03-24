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

  function isPrime(num) {
    if ( num === 1){
       return false;}

       if ( num === 2){return true;}

     for ( let n = 2; n < num; n++){
     if (num % n === 0){
      return false;
     }
     return true;
   }
  }

  function smallestPrimeFactors(num) {
    let array = [];
    let i = 2; // i-quotient
    for (i=2; i<= num; i++){
  if (num % i === 0){
    if (isPrime(i) === true)
      array.push(i);
      }
  }
  return Math.min(array[0]);
  // This is your job. :)
}

if (require.main === module) {
  console.log('Running sanity checks for smallestPrimeFactor:');
  console.log(smallestPrimeFactors(2)); // => [2]
  console.log(smallestPrimeFactors(255)); // => [2]
  console.log(smallestPrimeFactors(13*17*29)); // => [2, 2]
  console.log(smallestPrimeFactors(2 * 2 * 3)); // => [2, 2, 3]
  console.log(smallestPrimeFactors(917329)); // => [2, 2, 3, 17, 197]
  console.log(smallestPrimeFactors(125)); // => [7, 7, 97, 193]
  console.log(smallestPrimeFactors(21)); // => [7, 7, 97, 193]

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = smallestPrimeFactors;

//module.exports = smallestPrimeFactor;
