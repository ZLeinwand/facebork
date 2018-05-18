# README

Facebork, a facebook clone, is a single page app developed over 10 days. It uses Ruby on Rails, Postgres, React, Redux, and a deep love of dogs to provide a seamless social network experience.


### Live Demo
[Live demo](thefacebork.herokuapp.com)

## Features

* Secure user auth using hashed and salted password digests
* Users can sign up, make a profile with a profile picture, cover photo, and about me
* Users can write posts on their own wall, newsfeed, or a friends wall
* Users can comment on posts
* Users can send and accept friend requests
* Friends posts will show up in a users news feed
* Users can search all of FaceBork to find new friends via the back end connected search bar in the nav OR can search a specific users friends on their profile using instant front end search in the 'Friends' tab

Facebork is a single page app. Using React's hashrouter and logic we can prevent unauthorized users from browsing the site by redirecting them to login/signup splash page. The router also handles which components to display and gives us wildcard variable to know which user's profile we are viewing. The project was built from back to front, a single slice at a time. Database migration and models first, to controller and routes and then to the front end building redux states and finally components. All of this was wireframed at the very beginning of the project.

## Technologies
* JavaScript
  * React
    * React Router
  * Redux
  * AJAX
* Ruby
  * Rails
* PostgreSQL

## Future features to implement
* Photo uploads - posts and albums
* Likable posts, comments, and photos
* Private profiles/friend lists
* Messenger
* Trending News api
* Events
