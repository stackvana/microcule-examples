module['exports'] = function inputSchema (hook, callback) {
  // Responds back with incoming Hook parameters
  hook.res.json(hook.params);
};
