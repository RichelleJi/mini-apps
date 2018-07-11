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

var destructor = function(obj){
	var result = [];//create result array
	var temp = Object.keys(obj);
	temp.pop();
	result.push(temp);
	var recursion = function(newObj){
	    var temp = Object.values(newObj);
	    temp.pop();
	    result.push(temp);

	    if(newObj.children){
	      newObj.children.forEach((childObj) => {
	        recursion(childObj);
	      })
	  	}
	}
  recursion(obj);
  return result;
};

app.post('/', function (req, res) {
	res.status(201);
	// var temp = destructor(JSON.parse(req.body));
	var temp = destructor(req.body);
	// console.log(req.body);

	res.json(temp);
	// var temp = JSON.parse(req.body);
	// res.send(temp);
	//handle err
});




app.listen(3000, () => console.log('Example app listening on port 3000!'))
