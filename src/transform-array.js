const CustomError = require('../extensions/custom-error');

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('Wrong type');
  if (arr.length === 0) return [];
  let transformedArray = [];
  let isCommand = false;

  for (let i = 0; i < arr.length; i++)
    switch (arr[i]) {
      case '--discard-next':
        i++;
        isCommand = true;
        break;
      case '--discard-prev':
        if (transformedArray.length > 0 && !isCommand) transformedArray.pop();
        isCommand = true;
        break;
      case '--double-prev':
        if (i !== 0) {
          if (isCommand) {
            isCommand = true;
            break;
          }
          transformedArray.push(arr[i - 1]);
        }
        break;
      case '--double-next':
        if (arr.length > i + 1) transformedArray.push(arr[i + 1]);
        isCommand = true;

        break;
      default:
        isCommand = false;
        transformedArray.push(arr[i]);
    }
  if (transformedArray.length === 0) return arr;
  return transformedArray;
};
