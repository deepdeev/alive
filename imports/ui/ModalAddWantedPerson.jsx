import React, {Component, PropTypes} from 'react';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';

export default class ModalAddWantedPerson extends Component {
  constructor(props)
  {
    super(props);
    this.close = this.close.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  close()
  {
    this.props.closeFunction();
  }
  handleSubmit(event)
  {
    event.preventDefault();

    // Find the fields via the React ref
    const id = ReactDOM.findDOMNode(this.refs.id).value.trim();
    const name = ReactDOM.findDOMNode(this.refs.name).value.trim();
    const state="Wanted";
    const img =  "/data/images/p"+(Math.floor((Math.random()*19)+1))+".jpg";

    let person = {
      id:id,
      name:name,
      state:state,
      img:img
    };
    Meteor.call('people.insert', person);
    // console.log("Client: inserted! "+ person);
    this.close();
  }

  render()
  {
    return (
        <Modal className="modalAddWantedPerson" isOpen={this.props.isOpen} onRequestClose={this.close}  overlayClassName="modalOverlay" contentLabel="Modal Add Found Person">

          <div className="panelAddPerson">
            <div className="row personForm">
              <div className="col-md-12 box-photo">

              </div>
              <div className="col-md-12">
                <div className="row">
                  <form>
                    <label className="col-md-12 addPersonField"> Name
                      <input type="text" className="form-control" id="name" placeholder="Full Name" ref="name"/>
                    </label>
                    <label className="col-md-12 addPersonField">ID
                      <input type="text" className="form-control" id="id" placeholder="ID" ref="id"/>
                    </label>
                    <div className="col-md-2"></div>
                    <label className="col-md-4 addPersonBtn">
                      <button className="btn btn-default" onClick={this.handleSubmit}>Save</button>
                    </label>
                    <label className="col-md-4 addPersonBtn">
                      <button className="btn btn-default" onClick={this.close}>Cancel</button>
                    </label>
                    <div className="col-md-2"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </Modal>

    );
  }
}