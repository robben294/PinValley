class DropUsernameColumnfromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :username
  end
end
