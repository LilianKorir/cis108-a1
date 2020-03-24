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
    return Object.keys(obj).filter(x => {
         return obj[x] == Math.max.apply(null,
         Object.values(obj));
   });
   // This is your job. :)
};


if (require.main === module) {
  console.log('Running sanity checks for maxKey:');
  console.log(maxKey({a: 10, b: -4, c: 20})[0]); // => 'c'
  console.log(maxKey({a: 50, b: -49, c: 33})[0]); // => 'a'
  console.log(maxKey({a: -190, b: 4887, c: 788, d:-67777})[0]); // => 'c'

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = maxKey;
