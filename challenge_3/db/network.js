var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'checkoutApp'
});
 
module.exports = connection;



// #shipAddress (line 1, line 2, city, state, zip code) and 
// #creditCard #, expiry date, CVV, and billing zip code.

// -- F1 collects name, email, and password for account creation.
// -- F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
// -- F3 collects credit card #, expiry date, CVV, and billing zip code.