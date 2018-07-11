#Basic Requirements
Use Express to build a single-page client-server app that generates CSV reports from JSON data.

- Use Express to serve up an index.html file and its associated assets
- The client app should be able to submit JSON data to the server, receive a CSV-formatted response and then display the result on the same page.
- Implement all the report generation logic on the server. Do not use any external libraries (such as via npm).


### to do
- [√]Starting a Node Project: package.json
- [client]
	[√]index.html and Assets
		data-entry of the JSON on the client should be done using an HTML form with a single textarea input field (for the entire JSON text) and a submitbutton. 	
	[√]make submit button clickable
	[ ]POST the form data to the server, When the user clicks submit,
- [√]set up server
	[√]install express
	[√]run nodemon
	[√]get "hello" 
	[√]post request
- [√]serve static basic elements
- [] transform data to cvx
- [ ]HTML Forms
- [ ]Preventing Page Reload
- [ ]Receiving Data as a Result of an AJAX Request



###Server notes ensure:
- run nodemon
- check network in console
- what body parser syntax means 

###question
- how to send status and json at the same time 
[] discripancy between console.log vs postman post response 
[] why does children disappear in the root obj
[] suppose to write file>
[√] is the jquery instation correct? index.html line 8


###to record:
bookmark
- sendStatus from node
-what's in the package.json file
-body parser

###extra:
- [ ]Fetch --> refactor using es6



