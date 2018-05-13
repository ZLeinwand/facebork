import React, { Component } from 'react'

export default class ProfileUpdateForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: this.props.currentUserId,
      birthday: this.props.profile.birthday,
      job_title: this.props.profile.job_title,
      lives_in: this.props.profile.lives_in,
      owners_names: this.props.profile.owners_names,
      relationship_status: this.props.profile.relationship_status,
      breed: this.props.profile.breed,
      fav_toy: this.props.profile.fav_toy,
      description: this.props.profile.description
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field){
    return (e) => (this.setState({ [field]: e.currentTarget.value }))
  }

  handleSubmit(e) {
    e.preventDefault()

    this.props.updateProfile(this.state).then(() => (this.props.closeModal()), (errors) => console.log(errors))

  }


  render(){

    return (
      <div className='profileFormContainer'>
        <div className='aboutFormTop'>
          <h1>Update your profile info</h1><div onClick={this.props.closeModal} className="closeX">X</div>
        </div>
        <form onSubmit={this.handleSubmit} className='profileFormBox'>
          <div className='errorsDiv'>{this.props.errors}</div>
          <div className='actualForm'>
            <div className='aboutFormLeft'>
              <label>Born on
                <input onChange={this.update('birthday')} className='profileInput' value={this.state.birthday}></input>
              </label>
              <label>Works as
                <input onChange={this.update('job_title')} className='profileInput' value={this.state.job_title}></input>
              </label>
              <label>Lives in
                <input onChange={this.update('lives_in')} className='profileInput' value={this.state.lives_in}></input>
              </label>
              <label>Relationship Status
                <input onChange={this.update('relationship_status')} className='profileInput' value={this.state.relationship_status}></input>
              </label>
              <label>Owners Names
                <input onChange={this.update('owners_names')} className='profileInput' value={this.state.owners_names}></input>
              </label>
            </div>
            <div className='aboutFormRight'>
              <label>Breed
                <input onChange={this.update('breed')} className='profileInput' value={this.state.breed}></input>
              </label>
              <label>Favorite Toy
                <input onChange={this.update('fav_toy')} className='profileInput' value={this.state.fav_toy}></input>
              </label>
              <label>Description
                <textarea rows='5' cols='36' onChange={this.update('description')} className='profileInput' value={this.state.description}></textarea>
              </label>
            </div>
          </div>
          <button className='updateProfileButton2'>Update Profile</button>
        </form>
      </div>
    )
  }
}
