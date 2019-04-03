class Board < ApplicationRecord
    validates :title, :creator_id, presence: true

    belongs_to :creator, class_name: :User

    has_many :pin_boards, class_name: :PinBoard

    has_many :pins,
        through: :pin_boards,
        source: :pin

end