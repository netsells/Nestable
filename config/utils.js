var rollup = require('rollup').rollup,
    pack   = require('../package.json'),
    banner = require('./banner.js'),
    fs     = require('fs'),
    zlib   = require('zlib'),
    uglify = require('uglify-js');

var toUpper = function(_, c) {
  return c ? c.toUpperCase() : '';
};

const classifyRE = /(?:^|[-_\/])(\w)/g;
var classify = function(str) {
  return str.replace(classifyRE, toUpper);
};

var zip = function() {
  return new Promise(function(resolve, reject) {
    fs.readFile('dist/' + pack.name + '.min.js', function(err, buf) {
      if (err) return reject(err);
      zlib.gzip(buf, function(err, buf) {
        if (err) return reject(err);
        write('dist/' + pack.name + '.min.js.gz', buf).then(resolve);
      });
    });
  });
};

var write = function(dest, code) {
  return new Promise(function(resolve, reject) {
    fs.writeFile(dest, code, function(err) {
      if (err) return reject(err);
      resolve();
    });
  });
};

var packageRollup = function(options) {
  return rollup({
    entry: 'jquery.nestable.js'
  })
  .then(function(bundle) {
    return bundle.generate({
      format: options.format,
      banner: banner,
      moduleName: classify(pack.name)
    }).then(function(response) {
        if (options.minify) {
          response.code = uglify.minify(response.code, {
            fromString: true
          }).code;
        }
        return write(options.dest, response.code);
    });
  });
};

module.exports = {
  packageRollup: packageRollup,
  write: write,
  zip: zip,
  classify: classify,
  toUpper: toUpper
};
