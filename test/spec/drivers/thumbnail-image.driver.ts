class ThumbnailImageDriver extends WixBaseViewUnitDriver {

  render(item) {
    this.renderFromTemplate(`<thumbnail-image item="item"></thumbnail-image>`, { item });
  }

  get image() {
    return this.element.find('img');
  }

  get imageSrc() {
    return this.image.attr('src');
  }

  select() {
    this.image.click();
  }

  isSelected() {
    return !!this.element.attr('selected');
  }
}
