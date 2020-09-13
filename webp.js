var imagemin = require('imagemin'),
  webp = require('imagemin-webp'),
  outputFolder = './images',
  JPEGImages = './images/*.jpg';

imagemin([JPEGImages], outputFolder, {
  plugins: [webp({
    quality: 65
  })]
});

console.log('images converted to webp');
