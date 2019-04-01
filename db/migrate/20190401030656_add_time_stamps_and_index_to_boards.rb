class AddTimeStampsAndIndexToBoards < ActiveRecord::Migration[5.2]
  def change
    add_timestamps(:boards)
    add_index :boards, :creator_id
  end
end
