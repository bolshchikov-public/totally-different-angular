/// <reference path="../../../reference.ts" />
'use strict';

describe('Component: previewImage', () => {
  let driver: PreviewImageDriver;
  let imageItem: ImageItem;

  beforeEach(() => {
    module('totallyDifferentAngularAppInternal');
  });

  beforeEach(inject((images) => {
    imageItem = images[0];
    driver = new PreviewImageDriver();
    driver.render(imageItem);
    driver.connectToBody();
  }));

  afterEach(() => {
    driver.disconnectFromBody();
  });

  it('should display a preview source', () => {
    expect(driver.imageSrc).toEqual(`https://static.wixstatic.com/media/${imageItem.relativeUri}_srz_p_288_155_75_22_0.50_1.20_0.00_jpg_srz`);
  });

  it('should display a title', () => {
    expect(driver.title).toEqual('Two Flamingos');
  });

});
