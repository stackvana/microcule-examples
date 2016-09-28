module['exports'] = function view (hook) {
  var view = require('view');
  var marak = 'https://raw.githubusercontent.com/Marak/marak.com/master/view';
  var url = hook.req.headers['x-forwarded-url'];
  view.create( { remote: marak } , function (err, v) {
    if (err) {
      return hook.res.end(err.message);
    }
    v.remote(url, function (err, result) {
      if (err) {
        return hook.res.end(err.message);
      }
      return hook.res.end(result);
    });
  });
};

module['exports'].cache = 60000000;