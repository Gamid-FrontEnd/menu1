import React, {Component} from 'react';
import './Menu.css';
import './img/close.png'

class Menu extends Component {
  render () {
    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return(
      <div id="flyoutMenu" className={visibility}>
        <div className={'cross'} onClick={this.props.handleMouseDown}></div>
        <h2><a href="#af">Main</a></h2>
        <h2><a href="#af">About</a></h2>
        <h2><a href="#a">Contact</a></h2>
        <h2><a href="#a">Search</a></h2>
      </div>
    );
  }
}

export default Menu;
