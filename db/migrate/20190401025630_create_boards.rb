class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.string :title, null: false
      t.integer :creator_id, null: false
      t.text :description
    end
  end
end
