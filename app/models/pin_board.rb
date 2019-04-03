# == Schema Information
#
# Table name: pin_boards
#
#  id          :bigint(8)        not null, primary key
#  pin_id      :integer          not null
#  board_id    :integer          not null
#  description :string
#

class PinBoard < ApplicationRecord
    belongs_to :board
    belongs_to :pin
end
