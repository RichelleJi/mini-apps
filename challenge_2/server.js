const express = require('express')
var bodyParser = require('body-parser')
const app = express()

// app.get('/', (req, res) => res.send('Hello World!'))
app.use(function (req, res, next) {
  console.log(req.method,"- @", Date());
  next();
});

app.use(express.static('./client'))

app.use(bodyParser.urlencoded({ extended: true }))//allow for next obj 
 
app.use(bodyParser.json())//google syntax 

app.post('/', function (req, res) {
	res.status(201);
	console.log(req.body);
	res.json(req.body);
	//handle err
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
