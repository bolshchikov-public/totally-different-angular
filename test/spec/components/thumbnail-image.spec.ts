/// <reference path="../../../reference.ts" />
'use strict';

describe('Component: thumbnailImage', () => {
  let driver: ThumbnailImageDriver;
  let imageItem: ImageItem;

  beforeEach(() => {
    module('totallyDifferentAngularAppInternal');
  });

  beforeEach(inject((images) => {
    imageItem = images[0];
    driver = new ThumbnailImageDriver();
    driver.render(imageItem);
    driver.connectToBody();
  }));

  afterEach(() => {
    driver.disconnectFromBody();
  });

  it('should have image source', () => {
    expect(driver.imageSrc).toEqual(`https://static.wixstatic.com/media/${imageItem.relativeUri}_srz_p_120_120_75_22_0.50_1.20_0.00_jpg_srz`);
  });

});
