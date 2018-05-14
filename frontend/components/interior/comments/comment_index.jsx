import React, { Component } from 'react'
import CommentIndexItem from './comment_index_item'




export default class CommentIndex extends Component {



  render() {
    let comments = []
    let users = {}
    if (this.props.comments) {
      users = this.props.users
      comments = this.props.comments.map((comment, idx) => {
        let user = users[comment.author_id]
        return (<CommentIndexItem comment={comment} user={user} key={idx} />)
      })
    }

    return (
      <section className='commentIndex'>
        {comments}
      </section>
    )
  }
}
