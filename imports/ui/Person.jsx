import React, { Component, PropTypes } from 'react';

// Person component
export default class Person extends Component {
  constructor(props)
  {
    super(props);
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick()
  {
    this.props.changeCurrentPerson(this.props.index);
  }

  render() {
    if(this.props.view=="Found People")
    {
      return (
          <tr onClick={this.handleClick}>
            <td>{this.props.person.name}</td>
            <td>{this.props.person.foundDate.toDateString()}</td>
            <td>{this.props.person.place}</td>
            <td>{this.props.person.healthState}</td>
          </tr>

      );
    }
    else if(this.props.view=="Wanted People")
    {
      return (
          <div className="col-md-3 wantedPeopleBox">
            <div className="row">
              <div className="col-md-12 box-photo">
                <img className="img-responsive" src={this.props.person.img}></img>
              </div>
              <div className="col-md-12 wantedPeopleBox-info">
                <div className="row boxFields">
                  <div className="col-md-12 boxField-Name">
                    <p>{this.props.person.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

      );
    }
  }
}

Person.propTypes = {
  person: PropTypes.object.isRequired,
};