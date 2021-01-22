const CustomError = require('../extensions/custom-error');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LN2 = 0.693;
module.exports = function dateSample(sampleActivity) {
  return (
    isValid(sampleActivity) &&
    Math.ceil(
      Math.log(MODERN_ACTIVITY / sampleActivity) / (LN2 / HALF_LIFE_PERIOD)
    )
  );

  function isValid(sampleActivity) {
    if (
      typeof sampleActivity == 'string' &&
      sampleActivity.trim().length > 0 &&
      !isNaN(sampleActivity) &&
      0 < sampleActivity &&
      sampleActivity <= MODERN_ACTIVITY
    )
      return true;
    return false;
  }
};
