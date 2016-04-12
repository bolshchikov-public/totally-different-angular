/// <reference path="../../../reference.ts" />
'use strict';

angular
  .module('totallyDifferentAngularAppInternal')
  .component('thumbnailImage', {
    templateUrl: 'views/thumbnail-image.html',
    bindings: {
      item: '=',
      onRemove: '&'
    }
  });
