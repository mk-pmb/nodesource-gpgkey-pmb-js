var rfs = require('fs').readFileSync;
module.exports = function readKey(ver) {
  return rfs(__dirname + '/' + (ver || 'latest') + '.txt', 'UTF-8');
};
