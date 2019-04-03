class DropImageUrlColumnForPins < ActiveRecord::Migration[5.2]
  def change
    remove_column :pins, :image_url
  end
end
