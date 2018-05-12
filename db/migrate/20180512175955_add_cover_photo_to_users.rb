class AddCoverPhotoToUsers < ActiveRecord::Migration[5.1]
  def change
    add_attachment :users, :cover_photo
  end
end
