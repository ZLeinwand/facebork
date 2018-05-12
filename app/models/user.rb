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

  has_one :profile

  attr_reader :password


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
