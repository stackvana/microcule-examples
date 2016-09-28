// Connect two Hooks together using .pipe()
module['exports'] = function pipeHook (hook) {
  var request = require('request');
  var stream = request('https://hook.io/marak/examples-helloworld');
  stream.pipe(hook.res);
};