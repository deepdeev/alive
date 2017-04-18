import React, { Component, PropTypes } from 'react';

// NavBar component
export default class NavBar extends Component {
  render() {
      return (
          <div className="col-md-12 temporalNavBar">
            <nav className="mynav">
              <ul>
                <li><a href="">Found People</a></li>
                <li><a href="">Wanted People</a></li>
                <li><a href="">Add People</a></li>
              </ul>
            </nav>
            <span class="target"></span>
          </div>

      );
  }
}

NavBar.propTypes = {
  currentView: PropTypes.object.isRequired,
};