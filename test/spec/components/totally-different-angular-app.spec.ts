/// <reference path="../../../reference.ts" />
'use strict';

class TotallyDifferentAngularAppDriver extends WixBaseViewUnitDriver {

  render() {
    this.renderFromTemplate(`<totally-different-angular-app></totally-different-angular-app>`);
  }

  get images() {
    return this.findAllByDataHook('image-item');
  }
}

describe('Component: totallyDifferentAngularApp', () => {
  let driver: TotallyDifferentAngularAppDriver;

  beforeEach(() => {
    module('totallyDifferentAngularAppInternal');
    driver = new TotallyDifferentAngularAppDriver();
    driver.render();
  });

  afterEach(() => {
    driver.disconnectFromBody();
  });

  it('should display the list of images', () => {
    expect(driver.images.length).toEqual(7);
  });
});
