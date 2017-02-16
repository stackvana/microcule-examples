module['exports'] = function imageResize (hook) {
  // GraphicsMagick fully supported
  var gm = require('gm');
  var request = require('request');
  // grab an image stream using request
  var stream = request('https://hook.io/img/robotcat.png');
  hook.res.writeHead(200, { 'Content-Type': 'image/png' });
  // create a gm resize stream and pipe to response
  var r = gm(stream)
    .options({imageMagick: false }) // set to `true` for MacOS ( gm by default )
    .resize(150, 150)
    .stream()
    .pipe(hook.res);
  r.on('error', function(e){hook.res.end(e.message);})
};