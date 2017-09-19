To run arbitrary Unix / Linux binaries simply use the following syntax:

```bash
microcule echo "hello world"
microcule ls
microcule tail -f ReadMe.md
```

Very simple!

```bash
# mount any arbitrary command to a streaming HTTP endpoint

microcule echo "hello world"
microcule cat ReadMe.md
microcule tail -f ReadMe.md

# pipe in data from arbitrary commands
# using examples from: https://github.com/Stackvana/microcule/examples

echo "hello world" | microcule ./examples/services/echo/echo-stdin.js
ls | microcule ./examples/services/echo-stdin.js
ls | microcule ./examples/streams/transform.js
tail -f ReadMe.md | microcule --stream=true ./examples/services/streams/echo.js
```