class CreatePins < ActiveRecord::Migration[5.2]
  def change
    create_table :pins do |t|
      t.string :image_url, null: false
      t.string :website
      t.string :title
      t.integer :author_id, null: false
      t.index :author_id 

      t.timestamps
    end
  end
end
