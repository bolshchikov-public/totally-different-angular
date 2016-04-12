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

  get trashIcon() {
    return this.findByDataHook('trash');
  }

  get title(): string {
    return this.image.attr('alt');
  }

  select() {
    this.image.click();
  }

  isSelected() {
    return !!this.element.attr('selected');
  }

  remove() {
    this.image.trigger('mouseover');
    this.trashIcon.click();
  }
}
