import React, { Component } from 'react';
import { withRouter } from 'react-router';

class ScrollToTop extends React.Component {

  componentDidUpdate(oldProps) {
    if (this.props.location !== oldProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render(){
    // debugger
    return this.props.children
  }
}

export default withRouter(ScrollToTop)
