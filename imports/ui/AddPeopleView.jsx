import React, { Component, PropTypes } from 'react';

// View for add people
export default class AddPeopleView extends Component {
  constructor(props)
  {
    super(props);

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