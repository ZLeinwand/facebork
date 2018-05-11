export const updateProfilePic = (profilePicData) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${profilePicData.get('user[id]')}`,
    contentType: false,
    processData: false,
    data: profilePicData
  })
}
