var app = {};

app.url = 'http://127.0.0.1:3000/'

app.init = function(){
	$(document).ready(function() {
		$(".button").on("click", function(event) {
			var inputData = $(".input").val()
			inputData = JSON.parse(inputData);
			event.preventDefault();//prevent page from loading 
		  	app.post(inputData);

		});		
	});
}

app.post = function(data){//make Post request, ajax call
	$.ajax({
	  type: "POST",
	  url: app.url, 
	  data: data,
	  success: function(newData){
	  	console.log(newData);
	  	app.displayData(newData);

	  },
	  dataType: "json"
	});
}

app.displayData = function(dataPost){
	var resultString = '';
	dataPost.forEach((array)=>{
		resultString += array.join(',') + '<br>';
	})
	$(".outputData").html(resultString);
}

app.init();