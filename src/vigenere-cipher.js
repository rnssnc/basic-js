const CustomError = require('../extensions/custom-error');

const LETTERS_COUNT = 26;
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  isLetter(code) {
    if (code >= 65 && code <= 90) return true;
    return false;
  }

  validateArguments(message, key) {
    if (!message && !key) throw new Error();
  }

  encrypt(message, key) {
    this.validateArguments(message, key);
    let result = [];
    message = message.toUpperCase();
    key = key.toUpperCase();
    let index = 0;
    for (let i = 0; i < message.length; i++) {
      if (this.isLetter(message.charCodeAt(i))) {
        result.push(
          String.fromCharCode(
            65 +
              ((key.charCodeAt(index) + message.charCodeAt(i)) % LETTERS_COUNT)
          )
        );
        if (index == key.length - 1) index = -1;
        index++;
      } else result.push(message[i]);
    }
    return this.isDirect ? result.join('') : result.reverse().join('');
  }

  decrypt(message, key) {
    this.validateArguments(message, key);

    let result = [];
    message = message.toUpperCase();
    key = key.toUpperCase();
    let index = 0;
    for (let i = 0; i < message.length; i++) {
      if (this.isLetter(message.charCodeAt(i))) {
        result.push(
          String.fromCharCode(
            65 +
              ((LETTERS_COUNT - key.charCodeAt(index) + message.charCodeAt(i)) %
                LETTERS_COUNT)
          )
        );
        if (index == key.length - 1) index = -1;
        index++;
      } else result.push(message[i]);
    }

    return this.isDirect ? result.join('') : result.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
