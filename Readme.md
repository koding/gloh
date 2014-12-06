# gloh

unglob a list of files/globs.

This is [cojs/unglob](https://github.com/cojs/unglob) in its [bluebird](https://github.com/petkaantonov/bluebird) form; api is different and adds a `uniq` option.

# example

```js
gloh(['**/*.js', 'foo.bar'], {
  opts.cwd: somedir,
  opts.uniq: true
}, function (err, res) {
  // and do the harlem shake
});
```

# api

## gloh(list, opts, cb)

`opts.cwd` is the directory, defaults to `process.cwd()` if not specified.

`opts.uniq` should be set to remove duplicates.

# license

MIT