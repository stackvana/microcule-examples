module['exports'] = function (service, cb) {
  var req = service.req,
      res = service.res,
      $ = this.$;
  $('.content').html(service.output);
  cb(null, $.html());
};