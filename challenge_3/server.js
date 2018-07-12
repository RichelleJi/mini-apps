
var express = require('express')
var bodyParser = require('body-parser')
var models = require('./db/model')
 
var app = express()
 

app.use(function (req, res, next) {
  console.log(req.method + ' url' + req.url + ' @ ' + Date());
  next();
});

app.use(express.static('./public'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


// app.post('/', function (req, res) { //request body would be an array
// 	models.insertOne(req.body, (err, results) => {
// 		if(err){
// 			throw error;
// 			res.sendStatus(404);
// 		}else{
// 			res.sendStatus(201);
// 		}
// 	})
// });

//need to wait for the user to finish to retrieve the info


// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Checkout app listening on port 3000!'))


 
// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })