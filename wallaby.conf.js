'use strict';

module.exports = function (wallaby) {
  wallaby.defaults.files.instrument = false;
  return {
    files: [
      'app/bower_components/jquery/jquery.js',
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-translate/angular-translate.js',
      'app/bower_components/angular-animate/angular-animate.js',
      'app/bower_components/angular-aria/angular-aria.js',
      'app/bower_components/angular-messages/angular-messages.js',
      'app/bower_components/angular-material/angular-material.js',
      'app/bower_components/angular-drag-and-drop-lists/angular-drag-and-drop-lists.js',
      'app/bower_components/uri.js/src/URI.js',
      'app/bower_components/wix-angular/dist/wix-angular.js',
      'app/bower_components/es5-shim/es5-shim.js',
      'app/bower_components/es6-shim/es6-shim.js',
      'app/bower_components/wix-bi-logger/dist/scripts/bi-logger/wix-bi-angular.js',
      'app/bower_components/wix-angular/dist/test/lib/spec/base-driver.js',
      '.tmp/scripts/locale/messages_en.js',
      '.tmp/views/*.html.js',
      'test/spec/drivers/*.ts',
      {
        pattern: 'app/scripts/**/*.ts',
        instrument: true
      }],

    tests: [
      'test/spec/**/*.spec.ts'
    ],

    testFramework: 'jasmine'
  };
};
