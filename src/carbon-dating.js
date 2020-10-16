const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(/* sampleActivity */) {
  if (sampleActivity === NaN) {
    return false;
  }
 let age = Math.log(15/MODERN_ACTIVITY) / 0.000122;
 return age;
};
