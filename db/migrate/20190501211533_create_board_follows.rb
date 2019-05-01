class CreateBoardFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :board_follows do |t|
      t.integer :user_id, null: false
      t.integer :following_id, null: false

      t.timestamps
    end
    add_index :board_follows, :user_id
    add_index :board_follows, :following_id
  end
end
