var http = require('http');

module['exports'] = function isTheWebSiteDown (hook) {
  http.get(hook.params.url, function(res){
    hook.debug(hook.params.url + " is up and running.")
    hook.res.end('false');
  }).on('error', function (){
    hook.debug(hook.params.url + " is DOWN!")
    hook.res.end('true');
  });
};