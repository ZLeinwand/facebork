import React, { Component } from 'react'
import PostIndexItem from './post_index_item'
import isEqual from 'lodash/isEqual'


export default class PostIndex extends Component {


  componentDidMount(){
    // this.props.clearPosts()
    this.props.fetchPosts(this.props.offset, this.props.match.params.userId)
  }

  componentWillReceiveProps(newProps){
    if (this.props.news){
      if (this.props.match.params.userId != newProps.match.params.userId){
        this.props.clearPosts()
        this.props.fetchPosts(this.props.offset, newProps.match.params.userId)
      }
      // debugger
    }else{
      if (this.props.match.params.userId != newProps.match.params.userId){
        this.props.clearPosts()
        this.props.fetchPosts(this.props.offset, newProps.match.params.userId)
      }
    }
  }

  render(){

      let content = ""
      let posts = this.props.posts
      if (this.props.users){
        posts = this.props.posts.slice(this.props.offset, this.props.offset + 25)
      content = this.props.loading ?
      <div className="loader">Loading...</div> :
      posts.map( (post, idx) => {
        if (post) {
          return (<PostIndexItem post={post} key={idx} poster={this.props.users[post.author_id]} />)
        }
      })
    }
    return (
      <section className='postIndexContainer'>
        {content}
      </section>
    )
  }
}
