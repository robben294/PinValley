class DropFollowsFollowingtypeColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :follows, :following_type
  end
end
