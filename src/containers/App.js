import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from './../hoc/Wrapper';
import withClass from './../hoc/withClass';

 export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('{App.js} Inside constructor', props);
    this.state = {
    persons: [
        {name: 'Max', age: 28, id: 'aaa'},
        {name: 'Manu', age: 32, id: 'abb'},
        {name: 'Stephanie', age: 23, id: 'abc'},
        {name: 'Askhat', age: 20, id: 'bbc'}
      ],
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("[UPDATE APp.js] inside getDerivedStateFromProps",
        nextProps,
        prevState);
    return {};
  }

  getSnapshotBefoteUpdate() {
    console.log("[UPDATE APp.js] inside getSnapshotBefoteUpdate");
  }

  componentWillMount() {
    console.log('{App.js} Inside componentWillMount');
  }//

  /*shouldComponentUpdate( nextProps, nextState) {
    console.log('{app.js} Inside shouldComponentUpdate', nextProps, nextState);
    return nextState.persons !== this.state.persons || 
          nextState.showPersons !== this.state.showPersons;
  }*/

  componentWillUpdate( nextProps, nextState) {
    console.log('{app.js} Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate( nextProps, nextState) {
    console.log('{app.js} Inside componentDidUpdate', nextProps, nextState);
  }//

  componentDidMount() {
    console.log('{App.js} Inside componentDidMount');
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons});
  }

  nameChangeHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {...this.state.persons[personIndex]};

    person.name = e.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons})
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState(( prevState, props ) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    console.log('{App.js} Inside render');
    let persons = null;
    let btnClass = '';

    if(this.state.showPersons){
      persons = <Persons 
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangeHandler} />;
    }

    

    return (
      <Aux>
        <div className={classes.App}>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
          <Cockpit
            appTitle={this.props.title}
            showPersons={this.state.showPersons} 
            persons={this.state.persons}
            login={this.loginHandler}
            clicked={this.togglePersonsHandler} />
          <AuthContext.Provider value={this.state.authenticated}>{persons}</AuthContext.Provider>
        </div>
      </Aux>
    );

    //return React.createElement("div", {className: 'App'}, React.createElement("h1", null, "Hi, I'm React App"));
  }
}

export default withClass(App, classes.App);
