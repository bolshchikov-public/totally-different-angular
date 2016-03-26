/// <reference path="../../../reference.ts" />
'use strict';

class TotallyDifferentAngularAppDriver extends WixBaseViewUnitDriver {

  render(name = '') {
    this.renderFromTemplate(`<totally-different-angular-app name="name"></totally-different-angular-app>`, {name});
  }

  getContainerElement() {
    return this.findByDataHook('container');
  }

  getCounterElement() {
    return this.findByDataHook('counter');
  }
}

describe('Component: totallyDifferentAngularApp', () => {
  let driver: TotallyDifferentAngularAppDriver;

  beforeEach(() => {
    module('totallyDifferentAngularAppInternal');
    driver = new TotallyDifferentAngularAppDriver();
  });

  afterEach(() => {
    driver.disconnectFromBody();
  });

  it('should display name', () => {
    driver.render('kukuchumuku');
    expect(driver.element.text()).toContain('This is kukuchumuku');
  });

  it('should increase counter on click', () => {
    driver.render();
    expect(driver.getCounterElement().text()).toBe('0');

    driver.getContainerElement().click();
    expect(driver.getCounterElement().text()).toBe('1');
  });
});
