class Pin < ApplicationRecord
    validates :image_url, :author_id, presence: true
    
    has_one_attached :photo
end