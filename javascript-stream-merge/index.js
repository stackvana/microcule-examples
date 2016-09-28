module['exports'] = function mergeStreams (hook) {
  var ms = require('merge-stream');
  var request = require('request');
  var stream1 = request('https://hook.io/marak/examples-helloworld');
  var stream2 = request('https://hook.io/marak/examples-helloworld');
  var merged = ms(stream1, stream2);
  // You can also add new streams later
  // merged.add(stream3);
  merged.on('data', function(chunk){
    hook.res.write(chunk.toString());
  });
  merged.on('end', function(){
   hook.res.end();
  });
};