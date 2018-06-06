# == Schema Information
#
# Table name: likes
#
#  id            :bigint(8)        not null, primary key
#  likeable_type :string
#  likeable_id   :bigint(8)
#  user_id       :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Like < ApplicationRecord
  belongs_to :user
  belongs_to :likeable, polymorphic: true
end
