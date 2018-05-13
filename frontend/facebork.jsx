import React from 'react'
import configureStore from './store/store'
import Root from './components/root.jsx'
import ReactDom from 'react-dom'
import * as Actions from './actions/session_actions'
import * as ProfileActions from './actions/profile_actions'
import * as PostActions from './actions/post_actions'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')
  const store = configureStore()
  window.sessionApi = Actions
  window.store = store
  window.dispatch = store.dispatch
  window.profileApi = ProfileActions
  window.postApi = PostActions

  if (window.currentUser) {
    store.dispatch(Actions.receiveCurrentUser(window.currentUser))
    delete window.currentUser
  }

  ReactDom.render(<Root store={store} />, root)
})
