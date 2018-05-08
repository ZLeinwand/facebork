export login = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
}

export logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session',
  })
}

export signup = (user) => {
  return $.ajax({
    method 'POST',
    url: '/api/users'
  })
}
