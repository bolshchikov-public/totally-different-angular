class PreviewImageDriver extends WixBaseViewUnitDriver {

  render(item: ImageItem) {
    this.renderFromTemplate(`<preview-image item="item"></preview-image>`, { item });
  }

  get image() {
    return this.element.find('img');
  }

  get imageSrc() {
    return this.image.attr('src');
  }

  get title() {
    return this.findByDataHook('preview-title').text();
  }

  next() {
    this.findByDataHook('preview-next').click();
  }

  prev() {
    this.findByDataHook('preview-prev').click();
  }
}
