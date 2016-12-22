var hooks = {};
var requireService = require('microcule').requireService;
var requireServiceSync = require('microcule').requireServiceSync;

module['exports'] = hooks;
hooks.services = {};
var fs = require('fs');

var dir = fs.readdirSync(__dirname);

// filter directories for any known non-service folders
dir = dir.filter(function(item){
  if ([".git", "node_modules", ".DS_Store", ".gitignore", "ReadMe.md", "package.json", "index.js", ".npmignore"].indexOf(item) === -1) {
    return true;
  }
});

dir.forEach(function (item) {
  try {
    hooks.services[item] = requireServiceSync({ path: __dirname + '/' + item });
  } catch (err) {
    console.log("was unable to require service: ", item) ;
  }
});