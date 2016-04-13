/// <reference path="../../../reference.ts" />
'use strict';

angular
  .module('totallyDifferentAngularAppInternal')
  .component('previewImage', {
    templateUrl: 'views/preview-image.html',
    bindings: {
      item: '=',
      onNext: '&',
      onPrev: '&'
    }
  });
