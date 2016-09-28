module.exports = (hook) ->
  hook.res.write 'Hello, this is a Coffee-script function.\n'
  hook.res.write 'hook.params is populated with request parameters\n'
  hook.res.write "Try appending ?hello=world in the url for this service.\n"
  hook.res.write "You can also try sending JSON or Form data to this service.\n"
  hook.res.json hook.params
  hook.res.end ''
  return