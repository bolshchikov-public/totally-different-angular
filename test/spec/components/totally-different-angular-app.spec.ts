/// <reference path="../../../reference.ts" />
'use strict';

describe('Component: totallyDifferentAngularApp', () => {
  let driver: AppDriver;

  beforeEach(() => {
    module('totallyDifferentAngularAppInternal');
    driver = new AppDriver();
    driver.render();
  });

  afterEach(() => {
    driver.disconnectFromBody();
  });

  it('should display the list of images', () => {
    expect(driver.images.length).toEqual(7);
  });

  it('should be selected on click', () => {
    driver.selectImageAt(0);
    let res = driver.images.map((image, index) => {
      return index === 0;
    });
    res.forEach((expectation, index) => {
      expect(driver.isImageSelected(index)).toBe(expectation);
    });
  });
});
