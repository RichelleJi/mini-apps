/*
Use Express to serve up an index.html file and its associated assets
The client app should be able to submit JSON data to the server, receive a CSV-formatted response and then display the result on the same page.
Implement all the report generation logic on the server. Do not use any external libraries (such as via npm).
*/


var app = {};

// app.url = 'http://127.0.0.1:3000/'

app.init = function(){
	//to do at dom ready 
	//fetch data

	//if the button is clicked
		//send ajax post call
	
	$(document).ready(function() {
		$(".button").on("click", function(event) {
			var inputData = $(".input").val()
		  // console.log(inputData);
			inputData = JSON.parse(inputData);
			event.preventDefault();//prevent page from loading 
		  	app.post(inputData);

		});		
	});
}

app.post = function(data){//make Post request, ajax call
	//success: display data
	//fail: log 404
	// data = JSON.parse(data);
	// var cb = function(){
	// 	console.log(serverData);
	// };

	$.ajax({
	  type: "POST",
	  url: 'http://127.0.0.1:3000/', 
	  data: data,
	  success: function(newData){
	  	console.log(newData);
	  	app.displayData(newData);

	  },
	  dataType: "json"
	  // contentType : "application/json"
	});
}

app.displayData = function(dataPost){
//display incoming post data on the page

	// dataPost.split(',').join()

	var resultString = '';
	dataPost.forEach((array)=>{
		resultString += array.join(',') + '<br>';
	})
	$(".outputData").html(resultString);

}

app.init();