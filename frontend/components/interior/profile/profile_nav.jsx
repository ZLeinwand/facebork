import React, { Component } from 'react'


export default class ProfileHead extends Component{

  componentDidMount(){
    $('.profilePic').find(":button").hide()
    $(document).ready(function () {
    $(document).on('mouseenter', '.profilePic', function () {
        $(this).find(":button").show();
    }).on('mouseleave', '.profilePic', function () {
        $(this).find(":button").hide();
    });
});
  }

  render() {
    const coverStyle = {
      backgroundImage: `url(${this.props.profilePic})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }

    const profilePicStyle = {
      backgroundImage: `url(${this.props.profilePic})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }
    return (
      <section id='profileHead'>
        <div id='coverPhoto' style={ coverStyle }>
          <div className='profilePic' style={ profilePicStyle }>
            <button id='profilePicUpdateButton'>
              <img className='photoIcon' src={window.photoIcon}/>
              <strong>Update Profile Pic</strong>
            </button>
          </div>
          <h1>{this.props.userName}</h1>
        </div>
        <nav id='profileBar'>
          <span></span>
          <div>About</div>
          <div>Friends</div>
          <div>Photos</div>
          <div></div>
        </nav>
      </section>
    )
  }
}



// <img src={props.profilePic} id='coverPhoto'/>
// style={{background: props.profilePic}}
