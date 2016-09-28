module['exports'] = function presentGeoIpHook(opts, cb) {
  var $ = this.$;
  var geo = JSON.parse(opts.output.toString());
  if (geo.error) {
  } else {
    $('.lat').attr('value', geo.ll[0].toString());
    $('.lng').attr('value', geo.ll[1].toString());
    $('.ip').attr('value', geo.ip);
  }
  cb(null, $.html());
};