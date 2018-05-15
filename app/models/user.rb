# == Schema Information
#
# Table name: users
#
#  id                       :bigint(8)        not null, primary key
#  name                     :string           not null
#  email                    :string           not null
#  password_digest          :string           not null
#  session_token            :string           not null
#  created_at               :datetime         not null
#  updated_at               :datetime         not null
#  avi_file_name            :string
#  avi_content_type         :string
#  avi_file_size            :integer
#  avi_updated_at           :datetime
#  cover_photo_file_name    :string
#  cover_photo_content_type :string
#  cover_photo_file_size    :integer
#  cover_photo_updated_at   :datetime
#

class User < ApplicationRecord
  validates :name, :email, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 8, allow_nil: true }

  has_attached_file :avi, default_url: 'default_avi.png'
  validates_attachment_content_type :avi, content_type: /\Aimage\/.*\Z/

  has_attached_file :cover_photo, default_url: 'default_cover_photo.png'
  validates_attachment_content_type :cover_photo, content_type: /\Aimage\/.*\Z/

  after_initialize :ensure_session_token

  has_one :profile,
    dependent: :destroy

  has_many :posts_made,
    foreign_key: :author_id,
    class_name: :Post,
    dependent: :destroy

  has_many :posts_on_wall,
    foreign_key: :wall_id,
    class_name: :Post

  has_many :comments,
    foreign_key: :author_id,
    class_name: :Comment,
    dependent: :destroy

  has_many :friends_requested,
  foreign_key: :friender,
  class_name: :Friend

  has_many :requested_by,
  foreign_key: :friendee,
  class_name: :Friend

  has_many :friends_by_me,
  through: :friends_requested,
  source: :in_friends

  has_many :friends_by_other,
  through: :requested_by,
  source: :out_friends

  attr_reader :password

  def friends
    friendships = Friend.where(<<-SQL, self.id, self.id, "FRIENDS")
      (friends.friender = ? OR friends.friendee = ?) AND friends.status = ?
      SQL
    friends_ids = friendships.pluck(:friender, :friendee).flatten.reject {|id| id == self.id }.join(', ')
    if friends_ids.length > 0
      friends = User.where("id IN (#{friends_ids})")
    else
      []
    end
  end

  def friendship_status(other_user_id)
    friendship = Friend.where(<<-SQL, self.id, other_user_id, self.id, other_user_id)
      (friends.friender = ? AND friends.friendee = ?) OR (friends.friendee = ? AND friends.friender = ?)
      SQL

    if friendship.length > 0
      return friendship.first.status
    else
      return "NOT_FRIENDS"
    end
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    crypted = BCrypt::Password.new(self.password_digest)
    crypted.is_password?(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
