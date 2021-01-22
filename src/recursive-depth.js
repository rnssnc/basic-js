const CustomError = require('../extensions/custom-error');

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (arr.length == 0) return 1;
    return (
      1 +
      Math.max(
        ...arr.map((element) => {
          if (Array.isArray(element)) return +this.calculateDepth(element);
          return 0;
        })
      )
    );
  }
};
