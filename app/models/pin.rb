class Pin < ApplicationRecord
    validate :ensure_photo
    has_one_attached :photo

    belongs_to :author,
        class_name: :User,
        foreign_key: :author_id

    has_many :pin_boards, class_name: :PinBoard

    has_many :belonged_boards,
        through: :pin_boards,
        source: :board

    def ensure_photo
        unless self.photo.attached?
            errors[:photo] << 'must be attached'
        end
    end
end