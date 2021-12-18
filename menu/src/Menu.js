import React, {Component} from 'react';
import './Menu.css';

class Menu extends React.Component {
  render() {
    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return(
      <div id="flyoutMenu" onMouseDown={this.props.handleMouseDown} className={visibility}>
        <h2><a href="#">Main</a></h2>
        <h2><a href="#">About</a></h2>
        <h2><a href="#">Contact</a></h2>
        <h2><a href="#">Search</a></h2>
      </div>
    );
  }
}

export default Menu;
