class AppDriver extends WixBaseViewUnitDriver {
  images: ThumbnailImageDriver[];

  constructor() {
    super();
    this.images = this.defineChildren(() => new ThumbnailImageDriver, 'thumbnail-image');
  }

  render() {
    this.renderFromTemplate(`<totally-different-angular-app></totally-different-angular-app>`);
  }

  selectImageAt(index: number): void {
    this.images[index].select();
  }

  isImageSelected(index: number): boolean {
    return this.images[index].isSelected();
  }

  removeImageAt(index: number): void {
    this.images[index].remove();
  }
}
