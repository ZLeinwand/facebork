export const updateProfilePic = (profilePicData) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${profilePicData.get('user[id]')}`,
    contentType: false,
    processData: false,
    data: profilePicData
  })
}

export const searchBorkers = (query) => {
  return $.ajax({
    url: `/api/users/search`,
    data: { query }
  })
}
