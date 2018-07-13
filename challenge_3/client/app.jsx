// import axios from 'axios';
var stageArray = ['PageStart', 'PageOne', 'PageTwo', 'PageThree', 'PageEnd'];
  var counter = 0;

class App extends React.Component{
  constructor(props) {
  	super(props);
	this.handleClick =  this.handleClick.bind(this);
	this.handleSummaryData = this.handleSummaryData.bind(this);
    this.state = {stage: 'PageStart', 
				  summaryInfo: ''};
  }

  handleSummaryData(Data){
  	this.setState({summaryInfo: Data});
  	// console.log("handlesummarydata", Data);
  	console.log('thisstate', this.state.summaryInfo);
}
	

	postRequest(inputObj, callback){
		$.ajax({
		  type: "POST",
		  url: 'http://127.0.0.1:3000/', 
		  data: inputObj,
		  success: function(newData){
			callback(newData);
		  	// this.setState({summaryInfo: newData});
		  	// console.log(newData);
		  },
		  dataType: "json"
		});
	}

  handleClick(inputObj) { // where the button takes your
  	counter++;
  	console.log(this.state.stage);
    this.setState({stage: stageArray[counter]});
	    if(inputObj.type.length >5){
	    	this.postRequest(inputObj, this.handleSummaryData);
	    	 // console.log(inputObj.type);
		}
		counter = counter === 4? -1: counter;
    }


  render() {
 	let Component = eval(this.state.stage);
    return (
      <div>
      	<Component handleClick= {this.handleClick}  summaryInfo = {this.state.summaryInfo} />
      </div>
    );
  }
}
// ---------------------------------------components-------------------------------------------
function PageStart({handleClick}) {
  return (
  	<div>
  		<h1>Please Check Out</h1>
	    <button onClick={handleClick}>
	      Check Out
	    </button>
    </div>
  );
}

class PageOne extends React.Component{
	constructor(props){
  	super(props);
  	this.handleNameChange = this.handleNameChange.bind(this);
  	this.handleEmailChange = this.handleEmailChange.bind(this);
  	this.handlePwChange = this.handlePwChange.bind(this);
  	this.state = {
  		name: '',
	  	email:'',
	  	password:'',
	  	type: 'PageOne'
	  };
  }
  	handleNameChange(input){
  		this.setState({name:input.target.value});
  	}

  	handleEmailChange(input){
  		this.setState({email:input.target.value});
  	}

  	handlePwChange(input){
  		this.setState({password:input.target.value});
  		console.log(this.state);
  	}

  	render(){
  	  return (
  	  	<div>
	  	  	<h1>Your basic information</h1>
  	  		<input type="text" placeholder="Name"  value={this.state.name} onChange={this.handleNameChange}/>
  	  		<input type="text" placeholder="Email"  value={this.state.emal} onChange={this.handleEmailChange}/>
  	  		<input type="text" placeholder="Password"  value={this.state.password} onChange={this.handlePwChange}/>
  		    <button onClick={()=>{this.props.handleClick(this.state)}}>Next</button>
  	    </div>
  	  );
  	}
}

class PageTwo extends React.Component{
	constructor(props){
  	super(props);
	this.handleNumberChange = this.handleNumberChange.bind(this);
	this.handlelineOneChange = this.handlelineOneChange.bind(this);
	this.handlelineTwoChange = this.handlelineTwoChange.bind(this);
	this.handleCityChange = this.handleCityChange.bind(this);
	this.handleProvChange = this.handleProvChange.bind(this);
	this.handleZipCodeChange = this.handleZipCodeChange.bind(this);
  	this.state = {
  		number: "", //is a number
  		lineOne: '',
	  	lineTwo:'',
	  	City:'',
	  	Prov: '',
	  	ZipCode:'',
	  	type: 'PageTwo'
	  };
	}
 // collects ship to address (line 1, line 2, city, state, zip code) and phone number.
  	handleNumberChange(input){
  		this.setState({number:input.target.value});
  	}

  	handlelineOneChange(input){
  		this.setState({lineOne:input.target.value});
  	}

  	handlelineTwoChange(input){
  		this.setState({lineTwo:input.target.value});
  	}

  	handleCityChange(input){
  		this.setState({City:input.target.value});
  	}

	handleProvChange(input){
  		this.setState({Prov:input.target.value});
  	}

	handleZipCodeChange(input){
  		this.setState({ZipCode:input.target.value});
  	}

  render(){
	    return (
	    	<div>
		    	<h1>Your address</h1>
		    	<input type="text" placeholder="Phone Number"  value={this.state.number} onChange={this.handleNumberChange}/>
		    	<input type="text" placeholder="Adress line 1"  value={this.state.lineOne} onChange={this.handlelineOneChange}/>
		    	<input type="text" placeholder="Adress line 2"  value={this.state.lineTwo} onChange={this.handlelineTwoChange}/>
		    	<input type="text" placeholder="City"  value={this.state.City} onChange={this.handleCityChange}/>
		    	<input type="text" placeholder="State"  value={this.state.Prov} onChange={this.handleProvChange}/>
		    	<input type="text" placeholder="Zip Code"  value={this.state.ZipCode} onChange={this.handleZipCodeChange}/>
		    	<br></br>
		  	    <button onClick={()=>{this.props.handleClick(this.state)}}>Next</button>
	      </div>
	    );
	}
}


class PageThree extends React.Component{
	constructor(props){
  	super(props);
	this.handlecardNumberChange = this.handlecardNumberChange.bind(this);
	this.handleExpiryChange = this.handleExpiryChange.bind(this);
	this.handleCVVChange = this.handleCVVChange.bind(this);
	this.handlebillZipCodeChange = this.handlebillZipCodeChange.bind(this);
  	this.state = {
  		cardNumber: '',
	  	Expiry:'',
	  	CVV:'',
	  	billZipCode: '',
	  	type:'PageThree'
	  };
  }
  	handlecardNumberChange(input){
  		this.setState({cardNumber:input.target.value});
  		// console.log(this.state.cardNumber);
  	}

	handleExpiryChange(input){
  		this.setState({Expiry:input.target.value});
  		// console.log(this.state.Expiry);
  	}

	handleCVVChange(input){
  		this.setState({CVV:input.target.value});
  		// console.log(this.state.CVV);
  	}

	handlebillZipCodeChange(input){
  		this.setState({billZipCode:input.target.value});
  		// console.log(this.state.billZipCode);
  	}
// credit card #, expiry date, CVV, and billing zip code.
	render(){
		return (
			<div>
			<h1>Your credit card information</h1>
			<input type="text" placeholder="Credit Card Number"  value={this.state.cardNumber} onChange={this.handlecardNumberChange}/>
		    <input type="text" placeholder="Expiry Date"  value={this.state.Expiry} onChange={this.handleExpiryChange}/>
		    <br></br>
		    <input type="text" placeholder="CVV"  value={this.state.CVV} onChange={this.handleCVVChange}/>
			<input type="text" placeholder="Billing ZipCode"  value={this.state.billZipCode} onChange={this.handlebillZipCodeChange}/>
			<br></br>
			<button onClick={()=>{this.props.handleClick(this.state)}}>Next</button>
			</div>
		);
	}
}



function PageEnd(props) {
	console.log("endpage props", props.summaryInfo);
	//get request for all info
  return (
  	<div>
  		<h1>Your Information Summary</h1>
  		 <div>name: {props.summaryInfo}</div>
  		<button onClick={props.handleClick}>Complete Purchase</button>
    </div>
  );
}


function summaryItem(props) {
  return (
  	<div>
  		<p><b>{}</b>{}</p>
    </div>
  );
}




ReactDOM.render(< App/>, document.getElementById("app"));
