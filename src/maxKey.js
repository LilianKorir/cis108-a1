/**
 * Given an object whose entries have numbers as values,
 * return the key with the largest value.
 *
 * @example
 * maxKey({a: 10, b: -4, c: 20}); // => 'c'
 *
 * @param {object} array - A non-empty array of numbers
 * @returns {number} The key with the largest value
 */
function maxKey(obj) {
  let values = Object.values(obj);
  let maxValue = 0;
  for (let i = 0; i < values.length; i++){
    if(maxValue < values[i]){
      maxValue = values[i]
      maximumKey = Object.keys(obj)[i]
    }
  }
  return maximumKey;

   // This is your job. :)
};


if (require.main === module) {
  console.log('Running sanity checks for maxKey:');
  console.log(maxKey({a: 10, b: -4, c: 20})[0]); // => 'c'
  console.log(maxKey({a: 50, b: -49, c: 33})[0]); // => 'a'
  console.log(maxKey({a: -190, b: 4887, c: 788, d:-67777})[0]); // => 'b'

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = maxKey;
