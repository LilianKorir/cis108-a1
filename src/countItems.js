/**
 * Given an array of strings, returns an object whose keys
 * are the individual strings in the input array and the
 * values are the number of times that string appears.
 *
 * @example
 * // returns { 'apple': 2, 'goat': 1, 'potato': 1 }
 * countItems(['apple', 'goat', 'apple', 'potato']);
 *
 * @param {string[]} array - An array of strings
 * @returns {object} An object containing the count of each
 *  string in the input array
 */
function countItems(array) {
  let count = {};
  for(element of array){
  let item = element.toUpperCase(); // making it case insensitive

    if (count.hasOwnProperty(item)){
      count[item] +=1;
    }
    else{
      count[item] = 1; // appears once
    }
  }

  return count;
  // This is your job. :)
}

if (require.main === module) {
  console.log('Running sanity checks for countItems:');
  console.log(countItems(['bonus', 'apple', 'bonus', 'bonus', 'goat', 'apple', 'potato']));
  console.log(countItems(['my', 'name', 'is', 'my', 'dear', 'name', 'yes', 'that', 'is', 'it']));
  console.log(countItems(['today', 'is', 'a', 'very', 'good', 'today', 'sunny', 'windy', 'windy']));
console.log(countItems(['toString', 'toString', 'Apple', 'apple', 'potato']));
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = countItems;
