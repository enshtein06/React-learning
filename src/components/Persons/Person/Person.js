import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { AuthContext } from './../../../containers/App';
import classes from './Person.css';
import Aux from './../../../hoc/Wrapper';
import withClass from './../../../hoc/withClass';


class Person extends Component{
	constructor(props) {
		super(props);
	    console.log('{Person.js} Inside constructor', props);
	    this.inputElement = React.createRef();
	}

	componentWillMount() {
	  console.log('{Person.js} Inside componentWillMount');
	}

	componentDidMount() {
	  console.log('{Person.js} Inside componentDidMount');
	  if(this.props.position === 0) {
	  	this.inputElement.current.focus();
	  }
	}

	focus() {
		this.inputElement.current.focus();
	}

	componentWillUnmount() {
		console.log('{Person.js} Inside componentWillUnmount');
	}

	render() {
		console.log('{Person.js} Inside render');
		return (
			<Aux>
				<AuthContext.Consumer>
					{auth => auth ? <p>I'm authenticated</p> : null}
				</AuthContext.Consumer>
				<p onClick={this.props.click}>I'm {this.props.name}! And I'm {this.props.age} years old.</p>
				<p>{this.props.children}</p>
				<input 
					ref={ this.inputElement }
					type="text" 
					onChange={this.props.changed} 
					value={this.props.name}/>
			</Aux>
		)
		/*return [
			<p key="1" onClick={this.props.click}>I'm {this.props.name}! And I'm {this.props.age} years old.</p>,
			<p key="2">{this.props.children}</p>,
			<input key="3" type="text" onChange={this.props.changed} value={this.props.name}/>
		]*/
	}
}

Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func
};

export default withClass(Person, classes.Person);