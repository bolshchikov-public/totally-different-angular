/// <reference path="../../../reference.ts" />
'use strict';

class TotallyDifferentAngularApp {
  clicks: number;
  name: string;

  /* @ngInject */
  constructor(private $scope: ng.IScope) {

    this.clicks = 0;
  }

  onClick() {
    this.clicks++;
  }
}

angular
  .module('totallyDifferentAngularAppInternal')
  .component('totallyDifferentAngularApp', {

    templateUrl: 'views/totally-different-angular-app.html',
    controller: TotallyDifferentAngularApp,
    bindings: {
      name: '='
    }
  });
