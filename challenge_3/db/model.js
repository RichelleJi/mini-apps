var connection = require('./network');


connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId + ' @ '+ Date());
});



var insertOne = function(input, cb){ //name email and address 
  var array = Object.values(input);
  array.pop();
  // console.log(array);

  //{ name: 'd', email: 's', password: 'd', type: 'PageOne' }

	connection.query('INSERT INTO userinfo (name, email, password) VALUES(?, ?, ?)', array, cb);
};


var getSummary = function(userName, cb){ //name input in array
	connection.query('select * from userinfo where name  = ?', userName, cb);
};


// testing, 
// insertOne(["servio", "servio@gmail.com", "servioroad"], (error, results, fields)=>{
//   if (error){
//   	throw error;
//   } 
//   else{
//   	console.log('insert success!');
//   }
// })

// getSummary(["sarah lee"], (error, results)=>{
//   if (error){
//   	throw error;
//   } 
//   else{
//   	console.log(results);
//   }
// })

exports.insertOne = insertOne;
exports.getSummary = getSummary;

//put the user informaiton in to the data base
//retrive the user summary 