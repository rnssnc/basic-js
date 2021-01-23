const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, options) {
  if (!options.separator) options.separator = '+';
  if (!options.additionSeparator) options.additionSeparator = '|';
  let repeat = str;
  if (typeof options.addition !== 'undefined')
    repeat +=
      options.addition +
      (options.additionSeparator + options.addition).repeat(
        options.additionRepeatTimes - 1
      );
  return repeat.concat(
    options.separator.concat(repeat).repeat(options.repeatTimes - 1)
  );
};
