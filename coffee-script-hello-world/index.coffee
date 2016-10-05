module.exports = (hook) ->
  hook.res.write 'hello world'
  hook.res.end ''
  return