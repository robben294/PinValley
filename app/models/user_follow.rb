# == Schema Information
#
# Table name: user_follows
#
#  id           :bigint(8)        not null, primary key
#  user_id      :integer          not null
#  following_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class UserFollow < ApplicationRecord

    belongs_to :follower, 
        foreign_key: :user_id,
        class_name: :User

    belongs_to :following,
        class_name: :User,
        foreign_key: :following_id
end

# UserFollow.create(user_id: 33, following_id: 28)

