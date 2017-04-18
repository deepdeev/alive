import React, {Component, PropTypes} from 'react';
import Person from './Person.jsx';

export default class People extends Component {
  render()
  {
    if(this.props.view=="foundPeople")
    {
      return (
          <div className="row viewFoundPeople">
            <div className="col-md-1">
            </div>
            <div className="col-md-7 panelListFoundPeople">
              <div className="row">
                <div className="col-md-12 panelFoundPeople-title">
                  <p>Found People</p>
                </div>
                <div className="col-md-8">
                  <input className="searchInputFoundPeople" placeholder="Search the name or id of someone..."></input>
                </div>
                <div className="col-md-12">
          <table className="table table-hover ">
            <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Place</th>
              <th>State</th>
            </tr>
            </thead>
            <tbody id="tableBody">
            {this.props.people.map((person) => ( <Person key={person.id} person={person} view={this.props.view}/>))}
            </tbody>
          </table>
                </div>
              </div>
            </div>
            <div className="col-md-3 panelDetailFoundPerson">
              <div className="row">
                <div className="col-md-12 box-photo">
                  <img className="img-responsive" src='/data/images/p3.jpg'></img>
                </div>
                <div className="col-md-12 box-info">
                  <div className="row boxFields">
                    <div className="col-md-12 boxField-Name">
                      <p>Kellie Bowling</p>
                    </div>
                    <div className="col-md-12 boxField-HealthState">
                      <p>Alive</p>
                    </div>
                    <div className="col-md-12 boxField-Date">
                      <p><strong>Date: </strong>8/04/2017</p>
                    </div>
                    <div className="col-md-12 boxField-Place">
                      <p><strong>Place: </strong>Principal Church of the City</p>
                    </div>
                    <div className="col-md-12 boxField-Message">
                      <p><strong>Message: </strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, possimus commodi, fugiat magnam temporibus vero magni recusandae? Dolore, maxime praesentium.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
      );
    }
    else if(this.props.view=="wantedPeople")
    {
      return (
          <div className="row viewWantedPeople">
            <div className="col-md-1">
            </div>
            <div className="col-md-10 panelWantedPeople">
              <div className="row">
                <div className="col-md-12 panelWantedPeople-title">
                  <p>Wanted People</p>
                </div>
                <div className="col-md-8">
                  <input className="searchInputWantedPeople" placeholder="Search the name or id of someone..."></input>
                </div>
                <div className="col-md-12">
                  <div className="row" id="wantedPeopleGroup">
                    {this.props.people.map((person) => ( <Person key={person.id} person={person} view={this.props.view}/>))}

                  </div>
                </div>
              </div>

            </div>
          </div>
      );
    }
  }
}

People.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  people: PropTypes.array.isRequired,
};