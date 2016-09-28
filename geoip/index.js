module['exports'] = function geoipHook (hook) {
  var geoip = require('geoip-lite');
  var ip = hook.params.ip;
  if (typeof ip === "undefined" || ip.length === 0) {
    ip = hook.req.connection.remoteAddress;
  }
  var geo = geoip.lookup(ip);
  if (geo === null) {
    return hook.res.end(JSON.stringify({ message: "invalid ip " + ip.toString(), error: true }, true, 2));
  }
  geo.ip = ip;
  return hook.res.end(JSON.stringify(geo, true, 2));
};