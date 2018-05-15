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

require 'test_helper'

class FriendTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
