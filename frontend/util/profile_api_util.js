export const updateProfile = (profile) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/profiles/${profile.id}`,
    data: { profile: profile }
  })
}

export const fetchProfile = (profileId) => {
  return $.ajax({
    url: `/api/profiles/${profileId}`
  })
}
