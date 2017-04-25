import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { PeopleCollection } from '../api/peopleCollection.js';

import View from './View.jsx';
//
import NavBar from './NavBar.jsx';

// App component - represents the whole app
class App extends Component {

  constructor(props)
  {
    super(props);
    //views: "Found People", "Wanted People", "Home"
    this.state = {
      view:"Found People",
      query1:"",
      query2:""
    };
    this.handleViewChange=this.handleViewChange.bind(this);
    this.filteredPeople=this.filteredPeople.bind(this);
    this.search=this.search.bind(this)
  }

  handleViewChange(newView)
  {
    this.setState({view:newView,query1:'',query2:''});
  }
  search(query)
  {
    if(this.state.view=='Found People')
      this.setState({ query1: query });
    else
      this.setState({ query2: query });

  }
  filteredPeople()
  {

      let filteredPeople = this.props.people;


    if(this.state.view=='Found People')
    {
      filteredPeople= filteredPeople.filter((person)=>{return person.state=='Found';});
      if(this.state.query1.trim()=='' )
      {
        return filteredPeople;
      }
      filteredPeople=filteredPeople.filter((currentPerson) =>
      {
        return currentPerson.id == this.state.query1 || currentPerson.name.startsWith(this.state.query1);
      });
    }
    else
    {
      filteredPeople= filteredPeople.filter((person)=>{return person.state=='Wanted';});
      if(this.state.query2.trim()=='' )
      {
        return filteredPeople;
      }
      filteredPeople=filteredPeople.filter((currentPerson) =>
      {
        return currentPerson.id == this.state.query2 || currentPerson.name.startsWith(this.state.query2);
      });
    }
    return filteredPeople;

  }
  renderView()
  {
    let filteredPeople=this.filteredPeople();
    return <View people={filteredPeople} view={this.state.view} search={this.search}/>
  }

  render() {
    return (
        <div className="principal">
          <div className="container-fluid">
            <div className="row">
              <NavBar currentView={this.state.view} handleViewChange={this.handleViewChange} currentUser={this.props.currentUser}/>
            </div>
            {this.renderView()}
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
    currentUser: Meteor.user()
  };
}, App);
