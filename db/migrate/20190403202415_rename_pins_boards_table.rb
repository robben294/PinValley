class RenamePinsBoardsTable < ActiveRecord::Migration[5.2]
  def change
    rename_table :pins_boards, :pin_boards
  end
end
