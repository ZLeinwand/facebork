class CreateProfiles < ActiveRecord::Migration[5.1]
  def change
    create_table :profiles do |t|
      t.integer :user_id, null: false
      t.string :birthday
      t.string :job_title
      t.string :lives_in
      t.string :relationship_status
      t.string :owners_names
      t.string :breed
      t.string :fav_toy
      t.timestamps
    end
    add_index :profiles, :user_id, unique: true
  end
end
