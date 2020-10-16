const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(/* members */) {
    if(Array.isArray(members)) {
    let nameTeam = members.map(function (item) {
      if (typeof item == 'string') {
        return item.trim().charAt(0);
        
      }
    });
      return nameTeam.sort().join('').toUpperCase();
  }
  else   return false;
};
