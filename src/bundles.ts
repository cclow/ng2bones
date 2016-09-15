// Import polyfills
import 'core-js/es6';
import 'reflect-metadata';
require('zone.js/dist/zone');
if (process.env.ENV === 'production') {
  // Production
} else {
  // Development
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}

// Import vendor modules
// Angular 2 and RxJS used by the app are already bundled by Webpack,
// so don't import them here
// Other vendors for example jQuery, Lodash or Bootstrap
// You can import js, ts, css, sass, ...
var $ =  require('jquery');
require('bootstrap-loader/loader.js');

// load assets
require('./favicon.ico');
