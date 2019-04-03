class PinBoard < ApplicationRecord
    belongs_to :board
    belongs_to :pin
end