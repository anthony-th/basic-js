const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainArr: [],
  getLength() {
    return this.chainArr.length;
  },
  addLink(value) {
    this.chainArr = [...this.chainArr, `( ${value !== undefined ? value : ''} )`];
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || !Number.isInteger(position) || position < 1 || position > this.chainArr.length) {
      this.chainArr = [];
      throw new Error(`You can\'t remove incorrect link!`);
    }
    this.chainArr = this.chainArr.reduce((acc, link, index) => {
      if (index !== position - 1) acc.push(link);
      return acc;
    }, []);
    return this;
  },
  reverseChain() {
    this.chainArr = this.chainArr.reduceRight((acc, link) => {
      acc.push(link);
      return acc;
    }, []);
    return this;
  },
  finishChain() {
    const result = this.chainArr.join('~~');
    this.chainArr = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
