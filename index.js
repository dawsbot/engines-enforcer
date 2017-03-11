'use strict';
var fs = require('fs');
var semver = require('semver');
module.exports = function enginesEnforcer(packagePath) {
  var packageContent;
  try {
    packageContent = fs.readFileSync(packagePath);
  } catch (err) {
    throw new Error('Invalid package path: "' + packagePath + '"');
  }

  var engines = JSON.parse(packageContent).engines;
  var nodeVersion = engines.node;
  if (!semver.satisfies(process.version, nodeVersion)) {
    console.error('Invalid node version. This package requires "' + nodeVersion +
    '". You are using "' + process.version + '"');
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  }
};
