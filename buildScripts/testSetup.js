//This file is not tanspiled, so must use CommonJS and ES5

//Register babel to transpile before our tests run.
require('babel-register')();

//Disable webpack features that Mocha does not understand e.g. treat as empty function.
require.extensions['.css'] = function() {};
