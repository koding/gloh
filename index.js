var glob = require('glob');
var Promise = require('bluebird');
var uniq = require('uniq');
var extend = require('util')._extend;

module.exports = gloh;

function gloh (list, opts, cb) {
  opts || (opts={});
  var root = opts.cwd || process.cwd();
  var arr = list.slice();
  Promise.all(list.map(function (f, i) {
    if (!~f.indexOf('*')) return;
    return (new Promise(function (resolve, reject) {
      glob(f, opts, function (err, res) {
        if (err) reject(err);
        else {
          arr[i] = res;
          resolve();
        }
      });
    }));
  }).filter(Boolean))
    .then(function () {
      var res = flatten(arr);
      if (opts.uniq)
        res = uniq(res);
      cb(null, res);
    });
}

function flatten(arr, out) {
  out = out || []
  arr.forEach(function (val) {
    if (Array.isArray(val)) flatten(val, out)
    else out.push(val)
  })
  return out
}