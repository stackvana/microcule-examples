// Connect two Hooks together using .pipe()
module['exports'] = function pipeHook (hook) {
  var request = require('request');
  var stream = request('https://hook.io/examples/bash-hello-world');
  stream.pipe(hook.res);
};