import React, { Component } from 'react'


export default class ProfileHead extends Component{



  render() {
    const coverStyle = {
      backgroundImage: `url(${this.props.profilePic})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }
    return (
      <section id='profileHead'>
        <div id='coverPhoto' style={ coverStyle }>
          <img className='profilePic' src={this.props.profilePic} >
          </img>
          <div id='profilePicUpdateButton'></div>
          <h1>{this.props.userName}</h1>
        </div>
        <nav id='profileBar'>
          <span>WhiteSpace</span>
          <div>About</div>
          <div>Friends</div>
          <div>Photos</div>
          <div>WhiteSpace</div>
        </nav>
      </section>
    )
  }
}



// <img src={props.profilePic} id='coverPhoto'/>
// style={{background: props.profilePic}}
