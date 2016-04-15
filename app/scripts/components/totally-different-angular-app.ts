/// <reference path="../../../reference.ts" />
'use strict';

class TotallyDifferentAngularApp {
  images: ImageItem[];
  selected: ImageItem;

  /* @ngInject */
  constructor(images) {
    this.images = angular.copy(images);
  }

  removeImage(item: ImageItem) {
    let index = this.images.indexOf(item);
    this.images.splice(index, 1);
  }
}

angular
  .module('totallyDifferentAngularAppInternal')
  .component('totallyDifferentAngularApp', {
    templateUrl: 'views/main.html',
    controller: TotallyDifferentAngularApp
  });
