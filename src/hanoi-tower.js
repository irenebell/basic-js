const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
  let i = 2 ** disksNumber - 1;
  let timeOneStep = turnsSpeed / 3600;
  let seconds = Math.floor(i / timeOneStep);
  return { turns:  i,
  seconds: seconds }
};
