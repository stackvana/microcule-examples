puts "Hello, this is a Ruby script."
puts "Call the log method to write to logs"
log('fooobar', 'hello', Hook['params'])
log(Hook["params"])
puts Hook["params"]