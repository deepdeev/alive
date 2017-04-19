import React, {Component, PropTypes} from 'react';
import Person from './Person.jsx';
import PersonDetail from './PersonDetail.jsx';
import ModalAddFoundPerson from './ModalAddFoundPerson';
import ModalAddWantedPerson from './ModalAddWantedPerson';

import LoginFormsAccountsUIWrapper from './LoginFormsAccountsUIWrapper.jsx';
import OutsideAccountsUIWrapper from './OutsideAccountsUIWrapper.jsx';

export default class View extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      currentPerson:0,
      showModal:false

    };
    this.changeCurrentPerson=this.changeCurrentPerson.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  changeCurrentPerson(id)
  {
    let index = this.props.people.findIndex((person)=>{return person.id==id;});
    if(index)
      this.setState({currentPerson:index});
  }
  handleOpenModal ()
  {
    this.setState({ showModal: true });
  }
  handleCloseModal ()
  {
    this.setState({ showModal: false });
  }
  render()
  {
    console.log(this.props.currentUser);
    if(this.props.view=="Found People")
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
                <div className="col-md-12 row">
                  <div className="col-md-4"></div>
                  <label className="col-md-4 addPersonBtnView">
                    <button className="btn btn-default" onClick={this.handleOpenModal}>Add Found Person</button>
                    <ModalAddFoundPerson isOpen={this.state.showModal} openFunction={this.handleOpenModal} closeFunction={this.handleCloseModal}/>
                  </label>
                  <div className="col-md-4"></div>
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
            {this.props.people.filter((person)=>{return person.state=='Found';}).map((person, index) => (<Person key={person.id} person={person} view={this.props.view} index={index} changeCurrentPerson={this.changeCurrentPerson}/>))}
            </tbody>
          </table>
                </div>
              </div>
            </div>
            <PersonDetail person={this.props.people[this.state.currentPerson]}/>

          </div>
      );
    }
    else if(this.props.view=="Wanted People")
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
                <div className="col-md-12 row">
                  <div className="col-md-4"></div>
                  <label className="col-md-4 addPersonBtnView">
                    <button className="btn btn-default" onClick={this.handleOpenModal}>Add Wanted Person</button>
                    <ModalAddWantedPerson isOpen={this.state.showModal} openFunction={this.handleOpenModal} closeFunction={this.handleCloseModal}/>
                  </label>
                  <div className="col-md-4"></div>
                </div>
                <div className="col-md-12">
                  <div className="row" id="wantedPeopleGroup">
                    {this.props.people.filter((person)=>{return person.state=='Wanted';}).map((person) => (<Person key={person.id} person={person} view={this.props.view}/>))}

                  </div>
                </div>
              </div>

            </div>
          </div>
      );
    }
    else if(this.props.view=="Home")
    {
      return (
          <div >
            <LoginFormsAccountsUIWrapper/>
          </div>
      );
    }
  }
}

View.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  people: PropTypes.array.isRequired,
};
