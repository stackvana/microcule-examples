module['exports'] = function writeFile (hook) {
  hook.fs.writeFile('testing-file.txt', 'hello', function (err, file) {
    if (err){ 
      return hook.res.end(err.message);
    }
    hook.res.json(file);
  });
};