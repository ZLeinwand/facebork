import React, { Component } from 'react'
import NewPostForm from '../posts/new_post_form_container'
import NewsFeedPostIndex from '../posts/news_feed_post_index_container'


export default class NewsFeed extends Component {




  render() {

    return (
      <section className='newsFeedContainer'>
        <main className='newsFeedPosts'>
          <NewPostForm news={'news'}/>
          <NewsFeedPostIndex news={'news'}/>
        </main>
      </section>
    )
  }
}
