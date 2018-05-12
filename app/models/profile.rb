# == Schema Information
#
# Table name: profiles
#
#  id                  :bigint(8)        not null, primary key
#  user_id             :integer          not null
#  birthday            :string
#  job_title           :string
#  lives_in            :string
#  relationship_status :string
#  owners_names        :string
#  breed               :string
#  fav_toy             :string
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#

class Profile < ApplicationRecord
  validates :user_id, presence: true, uniqueness: true

  belongs_to :user,
  dependent: :destroy
end
