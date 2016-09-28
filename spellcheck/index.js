module['exports'] = function echoHttp (hook) {

  var path = require('path');
  var SpellCheck = require('spellcheck'),
        base = __dirname + "../../../../modules/builds/hunspell/en_US/";
        base = path.resolve(base);
        base = base + "/";
        spell = new SpellCheck(base + 'en_US.aff', base + 'en_US.dic');
    
  // If the hook is not currently streaming, req has already been fully buffered
  if (!hook.streaming) {
    //
    // To test a streaming Hook you can use Curl:
    //
    //  echo "foo" | curl --header "content-type: application/octet-stream"  --data-binary @- http://hook.io/Marak/transform
    //
    
    var word = hook.params.word;
    
    if (typeof word === "undefined" || word.length === 0) {
      return hook.res.end("'word' parameter is required!");
    }
    
    return spell.check(word, function(err, correct, suggestions) {
        if (err) {
          return hook.res.end(err.message);
        }
        var result;
        console.log('is correct', correct)
        
        if (correct) {
          result =  '"' + word + '"' + " is spelled correctly!";
        } else {
          result = '"' + word + '"' + ' not recognized. Suggestions: ' + suggestions;
        }
        hook.res.end(result);
    });
  }

  var ended = false;
  hook.req.on('end', function(){
    ended = true;
  });
  hook.req.on('data', function(chunk){
    var word = chunk.toString();
    spell.check(word, function(err, correct, suggestions) {
        if (err) {
          return hook.res.end(err.message);
        }
        var result;
        console.log('is correct', correct)
        if (correct) {
          result =  '"' + word + '"' + " is spelled correctly!";
        } else {
          result = '"' + word + '"' + ' not recognized. Suggestions: ' + suggestions;
        }
        hook.res.write(result);
        if (ended) {
          hook.res.end();
        }
    });
  });
};

module['exports'].schema = {
  "word": {
    "type": "string"
    //todo: #68 Add client-side validation for forms
    // "required": true
  }
};