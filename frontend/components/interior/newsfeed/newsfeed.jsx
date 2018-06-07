import React, { Component } from 'react'
import NewPostForm from '../posts/new_post_form_container'
import NewsFeedPostIndex from '../posts/news_feed_post_index_container'


export default class NewsFeed extends Component {
  constructor(props){
    super(props)
    this.state = { offset: 0 }
  }

  componentDidMount(){
    this.props.clearPosts()
  }




  render() {
    let count = (this.state.offset / 25) + 1
    let indexes = []
    for (let i = 0; i < count; i++){
      indexes.push(<NewsFeedPostIndex news={'news'} offset={i * 25} key={i}/>)
    }

    setTimeout(() => {
      window.onscroll = () => {

        if ((Math.floor(window.innerHeight) + Math.floor(window.pageYOffset) + 5) > Math.floor(document.body.offsetHeight)) {
          window.onscroll = null

          this.setState(
            (prevState, props) => {
              return {offset: prevState.offset + 25}
            })
        }
      }, 500
    })


    return (
      <section className='newsFeedContainer'>
        <main className='newsFeedPosts'>
          <NewPostForm news={'news'}/>
          {indexes}
        </main>
      </section>
    )
  }
}
