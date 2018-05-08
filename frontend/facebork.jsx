import React from 'react'
import configueStore from './store/store'
import Root from '/components/root'
import ReactDom from 'react-dom'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')
  const store = configueStore()

  ReactDom.render(<Root store={store} />, root)
})
