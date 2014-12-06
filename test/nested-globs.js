var test = require('tap').test;
var gloh = require('..');

var ones = [
  ['**/*.1', 'bar/bar.1', 'bar/baz/baz.2'],
  ['qux.1', 'foo/foo.1', 'bar/bar.1', 'bar/baz/baz.1', 'bar/baz/baz.2']
];

test('nested-globs', function (t) {
  t.plan(1);
  gloh(ones[0], {
    cwd: __dirname + '/nested-globs',
    uniq: true
  }, function (err, res) {
    t.deepEqual(res.sort(), ones[1].sort())
  });
});