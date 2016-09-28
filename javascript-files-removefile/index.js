module['exports'] = function removeFile (hook) {
  hook.fs.removeFile('testing-file.txt', function (err, status) {
    if (err){ 
      return hook.res.end(err.message);
    }
    hook.res.json(status);
  });
};