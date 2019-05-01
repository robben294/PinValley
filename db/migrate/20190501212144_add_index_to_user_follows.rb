class AddIndexToUserFollows < ActiveRecord::Migration[5.2]
  def change
    add_index :user_follows, :user_id
  end
end
