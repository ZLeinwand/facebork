import React, { Component } from 'react'
import { closeModal } from '../actions/modal_actions'
import { connect } from 'react-redux'
import ProfileUpdateForm from './interior/profile/profile_update_form_container'

const Modal = (props) => {
  if (!props.modal) {
    return null;
  }

  let component;
  switch (props.modal) {
    case 'profile':
      component = (<ProfileUpdateForm />);
      break;
    default:
      return null;
  }

  return (
    <div className='modal-background' onClick={props.closeModal}>
      <div className='modal-child' onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
