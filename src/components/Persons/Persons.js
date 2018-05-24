import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
	constructor(props) {
	    super(props);
	    console.log('{Persons.js} Inside constructor', props);
	    this.lastPersonRef = React.createRef();
	}

	componentWillMount() {
		console.log('{Persons.js} Inside componentWillMount');
	}

	componentDidMount() {
		console.log('{Persons.js} Inside componentDidMount');
		this.lastPersonRef.current.focus();
	}
	componentWillUnmount() {
		console.log('{Persons.js} Inside componentWillUnmount');
	}

	componentWillReceiveProps( nextProps) {
		console.log('{Persons.js} Inside componentWillReceiveProps', nextProps);
	}

	/*shouldComponentUpdate( nextProps, nextState) {
		console.log('{Persons.js} Inside shouldComponentUpdate', nextProps, nextState);
		return nextProps.persons !== this.props.persons || 
		nextProps.changed  === this.props.changed || 
		nextProps.clicked === this.props.clicked;
		//return true;
	}*/

	componentWillUpdate( nextProps, nextState) {
		console.log('{Persons.js} Inside componentWillUpdate', nextProps, nextState);
	}

	componentDidUpdate( nextProps, nextState) {
		console.log('{Persons.js} Inside componentDidUpdate', nextProps, nextState);
	}

	render() {
		return this.props.persons.map((person, index) => {
			return <Person 
				click={() => this.props.clicked(index)}
				name={person.name} 
				position={index}
				ref={this.lastPersonRef}
				age={person.age}
		        key={person.id}
		        changed={(event) => this.props.changed(event, person.id)} />
		    });
	}
}

export default Persons;
