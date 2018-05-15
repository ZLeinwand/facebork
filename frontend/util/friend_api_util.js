export const makeFriendRequest = (friendId) => {
  return $.ajax({
    method: 'POST',
    url: `/api/users/${friendId}/friendships`
  })
}

export const updateFriendshipStatus = (friend) => {
  return $.ajax({
    method 'PATCH',
    url: `/api/users/${friendee.id}/friendships`,
    data: { friend }
  })
}

export const destroyFriendship = (friendId) => {
  return $.ajax({
    method 'DELETE',
    url: `/api/users/${friendId}/friendships`
  })
}
