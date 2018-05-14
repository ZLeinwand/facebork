# == Schema Information
#
# Table name: comments
#
#  id           :bigint(8)        not null, primary key
#  post_id      :integer          not null
#  author_id    :integer          not null
#  comment_text :text             not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Comment < ApplicationRecord
  validates :post_id, :author_id, :comment_text, presence: true

  belongs_to :post

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User
end
