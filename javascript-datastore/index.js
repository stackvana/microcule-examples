module['exports'] = function datastoreExample (hook) {
  var res = hook.res, 
      req = hook.req,
      store = hook.datastore;
  store.set('mykey', { foo: "bar" }, function(err, result){
    if (err) { return hook.res.end(err.message); }
    store.get('mykey', function(err, result){
      if (err) { return hook.res.end(err.message); }
      res.end(JSON.stringify(result, true, 2));
    });
  });
};