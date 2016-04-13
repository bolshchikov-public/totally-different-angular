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

  it('should remove an image item', () => {
    let removedImage = driver.images[0].title;
    driver.removeImageAt(0);
    let titles = driver.images.map(image => image.title);
    expect(titles).not.toContain(removedImage);
  });

  it('should change selection to next', () => {
    driver.selectImageAt(0);
    driver.preview.next();
    expect(driver.isImageSelected(1)).toBe(true);
    expect(driver.isImageSelected(0)).toBe(false);
  });
});
