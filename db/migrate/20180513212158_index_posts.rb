class IndexPosts < ActiveRecord::Migration[5.1]
  def change
    add_index :posts, :author_id
    add_index :posts, :wall_id
  end
end
