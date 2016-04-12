/// <reference path="../../../reference.ts" />
'use strict';

class TotallyDifferentAngularApp {
  /* @ngInject */
  constructor(private images: ImageItem[]) {

  }
}

angular
  .module('totallyDifferentAngularAppInternal')
  .component('totallyDifferentAngularApp', {
    templateUrl: 'views/main.html',
    controller: TotallyDifferentAngularApp
  });
