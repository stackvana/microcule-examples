module['exports'] = function simpleHttpRequest (hook) {
  // npm modules available, see: http://hook.io/modules
  var request = require('request');
  request.get('http://httpbin.org/ip', function(err, res, body){
    if (err) {
      return hook.res.end(err.messsage);
    }
    hook.res.end(body);
  })
};