# == Schema Information
#
# Table name: boards
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  creator_id  :integer          not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Board < ApplicationRecord
    validates :title, :creator_id, presence: true

    belongs_to :creator, class_name: :User

    has_many :pin_boards, class_name: :PinBoard

    has_many :pins,
        through: :pin_boards,
        source: :pin

    has_many :pin_photos,
        through: :pins,
        source: :photo

    has_many :followers, -> { where(following_type: :board) },
        class_name: :Follow,
        foreign_key: :following_id
end
