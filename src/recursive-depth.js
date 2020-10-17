const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
 if (arr.length === 0) return 1;
  if (Array.isArray(arr)) return 1 + Math.max(...arr.map(d => this.calculateDepth(d)));
  else return 0;
  }
   
};
