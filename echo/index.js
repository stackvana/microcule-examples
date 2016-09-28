module['exports'] = function echoHttp (hook) {
  hook.res.json(hook.params);
};
