class RenameFollowTable < ActiveRecord::Migration[5.2]
  def change
    rename_table :follows, :user_follows
  end
end
