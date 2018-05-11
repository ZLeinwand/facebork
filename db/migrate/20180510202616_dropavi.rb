class Dropavi < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :avi_url
  end
end
