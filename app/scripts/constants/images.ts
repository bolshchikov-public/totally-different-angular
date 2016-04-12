/// <reference path="../../../reference.ts" />
'use strict';

interface ImageItem {
  fileName: string;
  relativeUri: string;
  width: number;
  height: number;
  title: string;
}

angular
  .module('totallyDifferentAngularAppInternal')
  .constant('images', <ImageItem[]>[
    {
      fileName: 'Two Flamingos',
      relativeUri: '0d5a8583187a44688b918f91298eba80.jpg',
      width: 1920,
      height: 1280,
      title: 'Two Flamingos'
    },
    {
      fileName: 'Mountain Lake',
      relativeUri: 'a9ff3b_61fe61f3eb4c4adeb5835a166de10689.jpg',
      width: 1920,
      height: 1280,
      title: 'Mountain Lake'
    },
    {
      fileName: 'Beach Huts',
      relativeUri: 'a9ff3b_5f378900670848919283755eb67a5949.jpg',
      width: 1920,
      height: 1280,
      title: 'Beach Huts'
    },
    {
      fileName: 'Ferris Wheel',
      relativeUri: 'a9ff3b_7125cf82b18841c2961ce0a241b78826.jpg',
      width: 1920,
      height: 1280,
      title: 'Ferris Wheel'
    },
    {
      fileName: 'City Cycle',
      relativeUri: 'a9ff3b_f69457ef952c4aa4ba805827a02331c4.jpg',
      width: 1920,
      height: 1280,
      title: 'City Cycle'
    },
    {
      fileName: 'Palm Trees',
      relativeUri: 'a9ff3b_1d0b83b8723c4dc39192405fd083142a.jpg',
      width: 1920,
      height: 1280,
      title: 'Palm Trees'
    },
    {
      fileName: 'Misty Slopes',
      relativeUri: 'a9ff3b_f2f5a5f6dac648e8a23cd07144c67530.jpg',
      width: 1920,
      height: 1280,
      title: 'Misty Slopes'
    }
  ]);
