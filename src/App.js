import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, ButtonToolbar} from 'react-bootstrap';

class App extends Component{
	constructor(props) {
		super(props);
		this.state = {result: "before"}
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick() {
		this.callAPI();
	}	

	callAPI() {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://njy2r4u1w3.execute-api.ap-northeast-1.amazonaws.com/demo/', true);
		xhr.addEventListener("load", (event) => {
			this.setState( { result: event.target.responseText });
		});
		xhr.send();
	}

	render() {
		return(
			<div class="App">
			<div>{this.state.result}</div>
			<Button variant="primary" onClick={this.handleClick}>Hello World</Button>
			</div>
		);
	}
}

export default App;
