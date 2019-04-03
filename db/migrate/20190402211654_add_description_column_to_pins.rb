class AddDescriptionColumnToPins < ActiveRecord::Migration[5.2]
  def change
    add_column :pins, :description, :string
  end
end
