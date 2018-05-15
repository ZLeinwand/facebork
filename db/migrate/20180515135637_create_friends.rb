class CreateFriends < ActiveRecord::Migration[5.1]
  def change
    create_table :friends do |t|
      t.integer :friender, null: false
      t.integer :friendee, null: false
      t.string :status, null: false
      t.timestamps
    end
    add_index :friends, [:friender, :friendee], unique: true
  end
end
