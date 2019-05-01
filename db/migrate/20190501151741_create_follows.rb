class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.integer :user_id, null: false
      t.integer :following_id, null: false
      t.string :following_type, null: false
      
      t.timestamps
    end
    add_index :follows, :following_id
    add_index :follows, :following_type
  end
end
