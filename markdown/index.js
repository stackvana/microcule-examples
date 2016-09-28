module['exports'] = function markdownHook (hook) {
  var marked = require('marked');
  // TODO: expose parser options through schema
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
  });
  
  // If the hook is not currently streaming, req has already been fully buffered
  if (!hook.streaming) {
    hook.debug('Request is now fully buffered.')
    //
    // To test a streaming Hook you can use Curl:
    //
    //  echo "foo" | curl --header "content-type: application/octet-stream"  --data-binary @- http://markdown.hook.io/
    //
    if (typeof hook.params.text === "undefined" || hook.params.text.length === 0) {
      return hook.res.end("'text' parameter is required!");
    }
    
    
    hook.debug('Attempting to parse markdown...');
    var html = marked(hook.params.text);
    hook.debug('Parsing complete. Sending HTML.');
    return hook.res.end(html);
  }

  hook.req.on('end', function(){
    hook.res.end('');
  });
  hook.req.on('data', function(chunk){
    hook.res.write(marked(chunk.toString()))
  });
  
}

module['exports'].schema = {
  "text": {
    "type": "string",
    "format": "text",
    "default": "#hello"
    //todo: #68 Add client-side validation for forms
    // "required": true
  }
};