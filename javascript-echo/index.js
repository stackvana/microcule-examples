module['exports'] = function accessRequestData (hook) {
  hook.res.json(hook.params);
};