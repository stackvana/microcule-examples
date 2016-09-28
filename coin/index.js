module['exports'] = function getCoin (hook) {
  var request = require('request');
  var url = 'http://coinmarketcap-nexuist.rhcloud.com/api/' + hook.params.coin;
  request(url, { json: true }, function (err, response, body) {
    if (err) {
      return res.end(err.message);
    }
    if (hook.params.currency !== 'all') {
      // if a specific currency is selected, filter the results
      return hook.res.end(body['price'][hook.params.currency]);
    } else {
      // else, send all coin data back
      hook.res.end(JSON.stringify(body));
    }
  });
};