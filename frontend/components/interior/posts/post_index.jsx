import React, { Component } from 'react'
import PostIndexItem from './post_index_item'

export default class PostIndex extends Component {


  componentDidMount(){
    this.props.fetchPosts(this.props.match.params.userId)
  }

  componentWillReceiveProps(oldProps){
    // debugger
    if (this.props.match.params.userId != oldProps.match.params.userId){
      this.props.fetchPosts(this.props.wallId)
    }
  }

  render(){
    let posts = []
      if (this.props.posts.length > 0) {
        debugger
        posts = this.props.posts.map( (post) => (<PostIndexItem post={post} poster={this.props.users[post.author_id]} />) )
      }

    return (
      <section className='postIndexContainer'>
        {posts}
        <h1>POSTS GO HERE</h1>
      </section>
    )
  }
}
