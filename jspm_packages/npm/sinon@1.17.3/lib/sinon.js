/* */ 
"format cjs";
var sinon = (function() {
  "use strict";
  var sinonModule;
  var isNode = typeof module !== "undefined" && module.exports && typeof require === "function";
  var isAMD = typeof define === "function" && typeof define.amd === "object" && define.amd;
  function loadDependencies(require, exports, module) {
    sinonModule = module.exports = require('./sinon/util/core');
    require('./sinon/extend');
    require('./sinon/walk');
    require('./sinon/typeOf');
    require('./sinon/times_in_words');
    require('./sinon/spy');
    require('./sinon/call');
    require('./sinon/behavior');
    require('./sinon/stub');
    require('./sinon/mock');
    require('./sinon/collection');
    require('./sinon/assert');
    require('./sinon/sandbox');
    require('./sinon/test');
    require('./sinon/test_case');
    require('./sinon/match');
    require('./sinon/format');
    require('./sinon/log_error');
  }
  if (isAMD) {
    define(loadDependencies);
  } else if (isNode) {
    loadDependencies(require, module.exports, module);
    sinonModule = module.exports;
  } else {
    sinonModule = {};
  }
  return sinonModule;
}());
