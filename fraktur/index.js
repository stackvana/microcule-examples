module['exports'] = function (hook) {
  var fraktur = require('fraktur');
  // assumes text has been posted as form data or is part of query string
  // you could just as easily parse hook.req for incoming data instead
  hook.res.end(fraktur(hook.params.text));
};