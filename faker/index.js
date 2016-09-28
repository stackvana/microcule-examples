module['exports'] = function faker (hook) {
  var faker = require('faker');
  
  var params = hook.params;
  var parts = params.property.split('.');
 
  faker.locale = hook.params.locale;
  var result = faker[parts[0]][parts[1]]();
 
  hook.res.end(JSON.stringify(result, true, 2));
 
};