var connection = require('./network');


connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId + ' @ '+ Date());
});

var client = 'beth';

var insertOne = function(input, cb){ //name email and address 
  var array = Object.values(input);
  client = array[0];
  array.pop();
  //{ name: 'd', email: 's', password: 'd', type: 'PageOne' }
	connection.query('INSERT INTO userinfo (name, email, password) VALUES(?, ?, ?)', array, cb);
};

// 'UPDATE users SET phoneNumber = ?,  shipAddress = ? WHERE id = ?', ['a', 'b', 'c', client]


var updateTwo = function(input, cb){ //name email and address 
  input = Object.values(input); //turn in to an array of inputs 
  var array = [];
  array[0] = parseInt(input.shift());
  input.pop();//delete the type value
  array.push(input.join(', '), client);
  console.log(array);
  connection.query('UPDATE userinfo SET phoneNumber = ?,  shipAddress = ? WHERE name = ?', array, cb);
};




var updateThree = function(input, cb){ //name email and address 
  input = Object.values(input); //turn in to an array of inputs 
  var array = [];
  input.pop();//delete the type value
  array.push(input.join(', '), client);
  console.log(array);
  connection.query('UPDATE userinfo SET creditCard = ? WHERE name = ?', array, cb);
};


var getSummary = function(userName, cb){ //name input in array
	connection.query('select * from userinfo where name  = ?', client, cb);
};


// connection.query('UPDATE users SET foo = ?, bar = ?, baz = ? WHERE id = ?', ['a', 'b', 'c', userId], function (error, results, fields) {
//   if (error) throw error;
//   // ...
// });

  // ID INT AUTO_INCREMENT,
  // name VARCHAR(100), 
  // email VARCHAR(100),
  // password VARCHAR(100),

  // phoneNumber INT,
  // shipAddress VARCHAR(100), 


  // creditCard INT, 
  // billAddress VARCHAR(100)


// ===========================testing, 
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


// var input = { number: '343523',
//   lineOne: 'kasd',
//   lineTwo: 'ldk',
//   City: 'klaj',
//   Prov: 'lksk',
//   ZipCode: 'sdkd',
//   type: 'PageTwo' }


// updateTwo(input, (error, results, fields)=>{
//   if (error){
//    throw error;
//   } 
//   else{
//    console.log('insert success!');
//   }
// })


// updateTwo(["servio", "servio@gmail.com", "servioroad"], (error, results, fields)=>{
//   if (error){
//    throw error;
//   } 
//   else{
//    console.log('insert success!');
//   }
// })

// test 3--------

// var threeObj = { cardNumber: 'sdf',
//   Expiry: 'ssdf',
//   CVV: 'sd',
//   billZipCode: 'sdf',
//   type: 'PageThree' }

// updateThree(threeObj, (error, results, fields)=>{
//   if (error){
//    throw error;
//   } 
//   else{
//    console.log('insert success!');
//   }
// })


exports.insertOne = insertOne;
exports.updateTwo = updateTwo;
exports.getSummary = getSummary;
exports.updateThree = updateThree;

//put the user informaiton in to the data base
//retrive the user summary 