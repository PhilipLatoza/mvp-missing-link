var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'messages'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('mysql connected')
  }
});

module.exports = connection;