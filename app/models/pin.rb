class Pin < ApplicationRecord
    validates :image_url, :author_id, presence: true
    
end