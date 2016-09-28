module['exports'] = function (service, callback) {

  // Presenters have access to the services request and response streams
  var req = service.req,
      res = service.res;

  // jQuery like selector API is mapped to $ using Cheerio, see: https://cheerio.js.org/
  // The context of this $ selector is the "view.html" file
  var $ = this.$;

  // throw new Error('fffff')
  // There are two ways to end the presenter
  $('.output').html(service.output);
  $('.foo').html('bar');

  // 1. Call res.end() or res.json() directly
  callback(null, $.html());
  //res.end('ending')
  //res.end($.html())
  
  // 2. Continue the $.html() context using the callback
  
  
}