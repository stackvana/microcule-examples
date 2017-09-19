import pprint
import requests
r = requests.get('http://hook.io/examples/bash-hello-world')
print(r.text)
r = requests.post('http://hook.io/examples/echo', data = {'foo':'bar'})
print(r.text)