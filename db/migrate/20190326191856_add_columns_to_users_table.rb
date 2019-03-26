class AddColumnsToUsersTable < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :firstname, :string, null: false
    add_column :users, :lastname, :string, null: false
    add_column :users, :location, :string
    add_column :users, :about_me, :text
  end
end
