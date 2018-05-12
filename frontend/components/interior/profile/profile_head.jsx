import React, { Component } from 'react'


export default class ProfileHead extends Component{
  constructor(props) {
    super(props)
    this.state = {
      imageFile: null
    }

    this.updateProfilePic = this.updateProfilePic.bind(this)
    this.updateCoverPhoto = this.updateCoverPhoto.bind(this)
  }

  componentDidMount(){
    $('.profilePic').find(":button").hide()
    if (this.props.currentUser == this.props.match.params.userId) {
      $(document).ready(function () {
      $(document).on('mouseenter', '.profilePic', function () {
          $(this).find(":button").show();
        }).on('mouseleave', '.profilePic', function () {
          $(this).find(":button").hide();
      });
      });
    }
    if (this.props.currentUser != this.props.match.params.userId) {
      $('#hnnngggg').hide()
      $('.profilePic').css('margin-top', '160px')
    } else {
      $('#hnnngggg').show()
      $('.profilePic').css('margin-top', '101px')
    }
  }

  componentWillReceiveProps(){
    $('.profilePic').find(":button").hide()
    if (this.props.currentUser == this.props.match.params.userId) {
      $(document).ready(function () {
      $(document).on('mouseenter', '.profilePic', function () {
          $(this).find(":button").show();
        }).on('mouseleave', '.profilePic', function () {
          $(this).find(":button").hide();
      });
      });
    } else {
      $(document).off('mouseenter', '.profilePic')
    }
    if (this.props.currentUser != this.props.match.params.userId) {
      $('#hnnngggg').hide()
      $('.profilePic').css('margin-top', '160px')
    } else {
      $('#hnnngggg').show()
      $('.profilePic').css('margin-top', '101px')
    }
  }

  updateProfilePic(e) {
    const file = e.currentTarget.files[0];
    const formData = new FormData();
    formData.append("user[avi]", file)
    formData.append("user[id]", this.props.currentUser)
    this.props.updateProfilePic(formData)
  }

  updateCoverPhoto(e) {
    const file = e.currentTarget.files[0];
    const formData = new FormData();
    formData.append("user[cover_photo]", file)
    formData.append("user[id]", this.props.currentUser)
    this.props.updateProfilePic(formData)
  }

  render() {
    const coverStyle = {
      backgroundImage: `url(${this.props.coverPhoto})`,
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
            <button id='coverPicUpdateButton'>
              <span id='hnnngggg'>
                <label htmlFor="coverUpload" id='coverProfButton'>
                  <img className='photoIcon' src={window.photoIcon}/>
                  <div>Update Cover Photo</div>
                <input type='file' name="coverUpload" id='coverUpload' className='inputfile' onChange={ this.updateCoverPhoto } ></input>
              </label>
            </span>
          </button>
          <div className='profilePic' style={ profilePicStyle }>
            <button id='profilePicUpdateButton'>

              <label htmlFor="profUpload" id='uploadProfButton'>
                <img className='photoIcon' src={window.photoIcon}/>
                <strong>Update Profile Pic</strong>
              </label>
              <input type='file' name="profUpload" id='profUpload' className='inputfile' onChange={ this.updateProfilePic } ></input>
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
