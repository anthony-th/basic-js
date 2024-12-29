const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(directMode = true) {
    this.directMode = directMode;
    this.baseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  transform(text, keyword, mode) {
    if (!text || !keyword) {
      throw new Error('Incorrect arguments!');
    }
    const formattedText = text.toUpperCase();
    const formattedKey = keyword.toUpperCase();
    const keySize = formattedKey.length;
    let keyPointer = 0;
    const transformed = Array.from(formattedText).map((symbol) => {
      const textCharIndex = this.baseAlphabet.indexOf(symbol);
      if (textCharIndex === -1) {
        return symbol;
      }
      const keyCharIndex = this.baseAlphabet.indexOf(formattedKey[keyPointer % keySize]);
      keyPointer++;
      const newIndex = mode === 'encrypt' ? (textCharIndex + keyCharIndex) % 26 : (textCharIndex - keyCharIndex + 26) % 26;
      return this.baseAlphabet[newIndex];
    });
    const finalResult = transformed.join('');
    return this.directMode ? finalResult : finalResult.split('').reverse().join('');
  }
  encrypt(plainText, keyPhrase) {
    return this.transform(plainText, keyPhrase, 'encrypt');
  }
  decrypt(cipherText, keyPhrase) {
    return this.transform(cipherText, keyPhrase, 'decrypt');
  }
}

module.exports = {
  VigenereCipheringMachine
};
