const model = require('./model.js');

module.exports = {
  post: function(req, res) {
    var message = req.body;
    model.post(message, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    })
  }
}