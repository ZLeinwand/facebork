import React from 'react'


export default (props) => {

  return (
    <section>
      <div>coverphoto</div>
      <img src={props.profilePic} />
      <h1>{props.userName}</h1>
      <nav>
        <div>About</div>
        <div>Friends</div>
      </nav>
    </section>
  )
}
