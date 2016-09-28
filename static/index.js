module['exports'] = function view (hook) {
  
  var url = hook.req.headers['x-forwarded-url'] || hook.params.page || hook.req.url;
  var prefix = "/" + hook.resource.owner + "/" + hook.resource.name;
  var relativeUrl = url.replace(prefix + "/", '');
  relativeUrl = relativeUrl.replace(prefix, '');

  if (relativeUrl === "" || relativeUrl === "/") {
    relativeUrl = "index.html";
  }
  // TODO: better path detection for extended subfolders with trailing index.html....
  if (relativeUrl.substr(0, 1) === "/"){
    relativeUrl = relativeUrl.substr(1, relativeUrl.length - 1);
  }
  console.log(hook.resource.owner, hook.resource.name);
  console.log('using url', relativeUrl);
  //return hook.res.end(relativeUrl);
  // TODO: add streaming to SDK... hook.fs.createReadStream('index.html').pipe(hook.res);
  var readStream = hook.fs.createReadStream(relativeUrl);
  readStream.on('error', function (err){
    return hook.res.json(err);
  });
  
  readStream.pipe(hook.res);
  
}