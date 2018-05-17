# == Schema Information
#
# Table name: friends
#
#  id         :bigint(8)        not null, primary key
#  friender   :integer          not null
#  friendee   :integer          not null
#  status     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Friend < ApplicationRecord
  validates :friender, :friendee, :status, presence: true

  belongs_to :in_friends,
  foreign_key: :friender,
  class_name: :User

  belongs_to :out_friends,
  foreign_key: :friendee,
  class_name: :User

  def friendship
    query = "id IN (#{[self.friender, self.friendee].join(', ')})"
    User.where(query)
  end

  def self.seed_starter_friends(new_user_id)
    friends = User.where("email IN ('demouser@facebork.com', 'emma@bork.com', 'baxter@hoplife.com', 'maisy@ardsley.com', 'tom@myspace.com')").pluck(:id)
    friends.each do |friend_id|
      Friend.create(friender: friend_id, friendee: new_user_id, status: 'FRIENDS')
    end
  end

end
