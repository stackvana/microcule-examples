// Simple microservice for generating fake data
// faker.js docs - http://github.com/marak/faker.js 
module['exports'] = function fakeData (hook) {
  var faker = require('faker');
  // supports multiple locales
  faker.locale = 'en'; // try: 'de', 'es'
  // supports all faker.js methods
  var result = faker.name.findName();
  hook.res.end(result);
};