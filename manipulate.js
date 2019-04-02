
function manipulate(n, callback) {
  return callback(n);
}

function repeater(n, callback){
  for(let i = 0; i < n; i++) {
    callback();
  }
}

module.exports = {
  manipulate,
  repeater
};