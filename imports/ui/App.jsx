import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { PeopleCollection } from '../api/peopleCollection.js';

import People from './People.jsx';
import NavBar from './NavBar.jsx';

// App component - represents the whole app
class App extends Component {

  constructor(props)
  {
    super(props);
    //views: "foundPeople", "wantedPeople"
    this.state = {
      view:"wantedPeople"

    };
  }

  render() {
    return (
        <div className="principal">
          <div className="container-fluid">
            <div className="row">
              <NavBar currentView={true}/>
              </div>
            </div>
            <People people={this.props.people} view={this.state.view}/>
          </div>
        </div>
    );
  }
}

App.propTypes = {
  people:PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    people: PeopleCollection.find({}).fetch(),
  };
}, App);