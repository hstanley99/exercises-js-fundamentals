/**
 * Returns true if the given number is positive (greater than 0) and false otherwise.
 *
 * @param {number} num The input number
 * @returns {boolean} True if num is positive and false otherwise
 */
function isPositive(num) {
  if(num < 0){
        return false;}
    else{
        return true;}
}

if (require.main === module) {
  console.log('Running sanity checks for isPositive:');

  console.log(isPositive(0) === false);
  console.log(isPositive(1) === true);
  console.log(isPositive(-1) === false);
  console.log(isPositive(-100.201) === false);
}

module.exports = isPositive;
