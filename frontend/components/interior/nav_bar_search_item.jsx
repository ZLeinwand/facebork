import React from 'react';
import { Link } from 'react-router-dom'

export default ({user, clearSearchResults}) => {
  return (
    <Link onClick={() => clearSearchResults()} className='searchCard' to={`/users/${user.id}`} >
      <img className='searchCardAvi' src={user.avi_url} />
      <h4 className='searchName'>{user.name}</h4>
    </Link>
  )
}
