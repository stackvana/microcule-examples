module['exports'] = function helloWorld (hook) {

  // Since we don't way to expose the internal hook.io-sdk hookAccessKey for our `examples` account
  delete hook.env.hookAccessKey;

  hook.res.json(hook.env);
};