module.exports = function (req, res, next) {
  console.log('making request ' + req.url);
  next();
}