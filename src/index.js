module.exports = function reverse(number) {
  const isNegative = number < 0;
  let numberAsString = number + '';
  let reversedNumber = '';

  if (isNegative) {
    numberAsString = numberAsString.slice(1); 
  }

  for (const char of numberAsString) {
    reversedNumber = char + reversedNumber;
  }

  return +reversedNumber;
}
