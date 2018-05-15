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


end
