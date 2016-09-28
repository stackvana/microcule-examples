module['exports'] = function imageResize (hook, callback) {
  // GraphicsMagick fully supported
  var gm = require('gm'),
      request = require('request');
  // for a more complete example that supports file uploads and streaming uploads
  // see: http://image.resize.hook.io
  // grab an image as a url
  // no file has been uploaded, fallback to the image "url" parameter
  var stream = request('https://hook.io/img/robotcat.png');
  hook.res.writeHead(200, { 'Content-Type': 'image/png' });
  gm(stream)
  .options({imageMagick: true })
  .resize(150, 150)
  .stream()
  .pipe(hook.res);
};