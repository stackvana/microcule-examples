# resizes image using `convert`, `curl`, and `less`
curl -s hook.io/img/robotcat.png 2>&1 | convert - -resize "200%" png:- | less