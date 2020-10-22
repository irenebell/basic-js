const CustomError = require("../extensions/custom-error");

module.exports = function transform(/* arr */) {
  if (!Array.isArray(arr)) throw new Error()
  
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === NaN) {
      return arr;
    } 
    switch (arr[i]) {
      case '--discard-prev' :
        result.pop();
        break;
        case "--discard-next" :
          i+= 2;
          break;
          case '--double-prev' :
            if(result[i - 1] !== undefined) {
              result.push(arr[i - 1])              
        }
        break;
        case '--double-next' :
          if (arr[i + 1] !== undefined) {
            result.push(arr[i + 1]);
          }
          break;
          default :
          result.push(arr[i]);
    }
  }
        return result;
};
