class AddAttachmentAviToUsers < ActiveRecord::Migration[5.1]
  def self.up
    change_table :users do |t|
      t.attachment :avi
    end
  end

  def self.down
    remove_attachment :users, :avi
  end
end
