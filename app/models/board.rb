class Board < ApplicationRecord
    validates :title, :creator_id, presence: true

    belongs_to :creator, class_name: :User
end