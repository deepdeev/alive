import React, { Component, PropTypes } from 'react';

// NavBarLink component
export default class NavBarLink extends Component {

  constructor(props)
  {
    super(props);
    this.handleViewChange=this.handleViewChange.bind(this);
  }
  handleViewChange()
  {
    this.props.handleViewChange(this.props.title);
  }

  render() {

    return (
              <li><a onClick={this.handleViewChange}>{this.props.title}</a></li>
    );
  }
}
