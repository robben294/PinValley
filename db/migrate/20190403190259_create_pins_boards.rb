class CreatePinsBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :pins_boards do |t|
      t.integer :pin_id, null: false
      t.integer :board_id, null: false
      t.string :description
      t.index :pin_id
      t.index :board_id
    end
  end
end
