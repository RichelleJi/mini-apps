
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


app.post('/', function (req, res) { //request body would be an array

	if(req.body.type === 'PageOne'){
		models.insertOne(req.body, (err, results) => {
			if(err){
				res.status(404).send(err);
			}else{
				console.log('PageOne Inserted to Database');
				res.sendStatus(201);
			}
		})
	}else if(req.body.type === 'PageTwo'){
		models.updateTwo(req.body, (err, results) => {
			if(err){
				res.status(404).send(err);
			}else{
				console.log('PageTwo Updated to Database');
				res.sendStatus(201);
			}
		})
	}else if(req.body.type === 'PageThree'){
		console.log('Pagethree Updated to Database');
		models.updateThree(req.body, (err, results) =>{
			if(err){
				res.status(404).send(err);
			}else{
					models.getSummary((err, results) => {
						if(err){
							res.status(404).send(err);
						}else{
							console.log('Summary passing to Database');
							res.json(Object.values(results[0]));
							// res.json(results[0]);
						}
					})
				}
			}
		)
	}
});

//need to wait for the user to finish to retrieve the info


// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Checkout app listening on port 3000!'))


 
// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })