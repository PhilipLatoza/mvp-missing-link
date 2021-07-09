const db = require('../database/db.js');

module.exports = {
  post: function(message, callback) {
    console.log('Post Model: ', message);
    var queryString = `INSERT INTO allMessages(name, email, message) VALUES('${message.name}', '${message.email}', '${message.message}')`;
    db.query(queryString, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    })
  }
}