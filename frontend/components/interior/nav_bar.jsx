import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class NavBar extends Component {


  //CONNECTED component will need to get the USER AVI and NAME from the state
  render(){
    // debugger

    return (
      <div className='interiorHead'>
        <nav className='interiorNav'>
          <div className='leftInteriorNav'>
            <Link to='/' ><div className='homeLogoButton'></div></Link>
            <div>SEARCH BAR</div>
          </div>
          <div className='rightInteriorNav'>
            <Link to={`/users/${this.props.userId}`}>
              <span className='nameSpan'>
                <img src={this.props.userAvi} className='navAvi'></img>
                <div>{this.props.userName}</div>
              </span>
            </Link>

            <button className='logout' onClick={this.props.logout}>Log Out</button>
          </div>
        </nav>
      </div>
    )
  }
}




// <img className='navAvi' src={window.defaultImage} />
