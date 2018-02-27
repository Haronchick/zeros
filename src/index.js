module.exports = function getZerosCount(number) {
  // your implementation
  let check = 0;
  while (number >= 5) {
      number = Math.floor(number/5);
      check = check + number;
  }
  return check;
}
