const CustomError = require('../extensions/custom-error');

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('Wrong type');

  let transformedArray = [];
  let isCommand = false;

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        i++;
        isCommand = true;
        break;
      case '--discard-prev':
        if (!isCommand && transformedArray.length > 0) transformedArray.pop();
        isCommand = true;
        break;
      case '--double-next':
        isCommand = true;
        if (i + 1 < arr.length) transformedArray.push(arr[i + 1]);
        break;
      case '--double-prev':
        if (i !== 0 && !isCommand) transformedArray.push(arr[i - 1]);
        isCommand = true;
        break;
      default:
        isCommand = false;
        transformedArray.push(arr[i]);
    }
  }

  return transformedArray;
};
