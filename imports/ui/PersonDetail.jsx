import React, { Component, PropTypes } from 'react';

// PersonDetail component
export default class PersonDetail extends Component {

  constructor(props)
  {
    super(props);
  }
//no se utiliza el atributo State de una persona, recomendaria agregarlo a los detalles o eliminarlo de la BD
  render() {
    if(this.props.person)
    {
      return (
          <div className="col-md-3 panelDetailFoundPerson">
            <div className="row">
              <div className="col-md-12 box-photo">
                <img className="img-responsive" src={this.props.person.img}></img>
              </div>
              <div className="col-md-12 box-info">
                <div className="row boxFields">
                  <div className="col-md-12 boxField-Name">
                    <p>{this.props.person.name}</p>
                  </div>
                  <div className="col-md-12 boxField-HealthState">
                    <p>{this.props.person.healthState}</p>
                  </div>
                  <div className="col-md-12 boxField-Date">
                    <p><strong>Date: </strong>{this.props.person.foundDate.toDateString()}</p>
                  </div>
                  <div className="col-md-12 boxField-Place">
                    <p><strong>Place: </strong>{this.props.person.place}</p>
                  </div>
                  <div className="col-md-12 boxField-Message">
                    <p><strong>Message: </strong>{this.props.person.message}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      );
    }
    else {
      return (
          <div className="col-md-3 panelDetailFoundPerson">
            <div className="row">
              <div className="col-md-12 box-photo">
                <img className="img-responsive" ></img>
              </div>
              <div className="col-md-12 box-info">
                <div className="row boxFields">
                  <div className="col-md-12 boxField-Name">
                    <p>Name</p>
                  </div>
                  <div className="col-md-12 boxField-HealthState">
                    <p>HealthState</p>
                  </div>
                  <div className="col-md-12 boxField-Date">
                    <p><strong>Date: </strong>Date</p>
                  </div>
                  <div className="col-md-12 boxField-Place">
                    <p><strong>Place: </strong>Place</p>
                  </div>
                  <div className="col-md-12 boxField-Message">
                    <p><strong>Message: </strong>Message</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      );
    }
  }
}
