# == Schema Information
#
# Table name: board_follows
#
#  id           :bigint(8)        not null, primary key
#  user_id      :integer          not null
#  following_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class BoardFollow < ApplicationRecord
    belongs_to :follower,
        class_name: :User,
        foreign_key: :user_id
    
    belongs_to :following,
        class_name: :Board,
        foreign_key: :following_id
end
