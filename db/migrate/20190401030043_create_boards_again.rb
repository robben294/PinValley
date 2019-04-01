class CreateBoardsAgain < ActiveRecord::Migration[5.2]
  def change
    drop_table :boards
    create_table :boards do |t|
      t.string :title, null: false
      t.integer :creator_id, null: false
      t.text :description
    end
  end
end
