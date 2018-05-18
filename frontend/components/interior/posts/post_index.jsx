import React, { Component } from 'react'
import PostIndexItem from './post_index_item'
import isEqual from 'lodash/isEqual'

export default class PostIndex extends Component {


  componentDidMount(){
    this.props.fetchPosts(this.props.match.params.userId)
  }

  componentWillReceiveProps(newProps){
    if (this.props.news){
      //dont do anything
    }else{
      if (this.props.match.params.userId != newProps.match.params.userId){
        this.props.fetchPosts(newProps.match.params.userId)
      }
    }
  }

  render(){


    const content = this.props.loading ?
      <div className="loader">Loading...</div> :
      this.props.posts.map( (post, idx) => (<PostIndexItem post={post} key={idx} poster={this.props.users[post.author_id]} />) )


    return (
      <section className='postIndexContainer'>
        {content}
      </section>
    )
  }
}
