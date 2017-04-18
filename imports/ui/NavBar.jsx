import React, { Component, PropTypes } from 'react';
import NavBarLink from './NavBarLink.jsx';
// NavBar component
export default class NavBar extends Component {


  render() {

      return (
          <div className="col-md-12 temporalNavBar">
            <nav className="mynav">
              <ul>
                <NavBarLink title="Found People" handleViewChange={this.props.handleViewChange}/>
                <NavBarLink title="Wanted People" handleViewChange={this.props.handleViewChange}/>
                <NavBarLink title="Add People" handleViewChange={this.props.handleViewChange}/>
              </ul>
            </nav>
            <span className="target"></span>
          </div>

      );
  }
}
