const CustomError = require('../extensions/custom-error');

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  console.log(date.class);
  if ({}.toString.call(date) != '[object Date]') throw new Error();
  let month = date.getMonth();
  if (month >= 2 && month <= 4) return 'spring';
  else if (month >= 5 && month <= 7) return 'summer';
  else if (month >= 8 && month <= 10) return 'fall';
  else if ((month >= 0 && month <= 1) || month == 11) return 'winter';
};
