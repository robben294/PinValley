class RemoveDescriptionOnPins < ActiveRecord::Migration[5.2]
  def change
    remove_column :pins, :description
  end
end
