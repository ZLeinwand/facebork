import React from 'react'
import configureStore from './store/store'
import Root from './components/root.jsx'
import ReactDom from 'react-dom'
import * as Actions from './actions/session_actions'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')
  const store = configureStore()
  window.api = Actions
  window.store = store
  window.dispatch = store.dispatch

  if (window.currentUser) {
    store.dispatch(Actions.receiveCurrentUser(window.currentUser))
  }

  ReactDom.render(<Root store={store} />, root)
})
