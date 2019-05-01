# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  firstname       :string           not null
#  lastname        :string           not null
#  location        :string
#  about_me        :text
#

class User < ApplicationRecord
    validates :email, :password_digest, :session_token, :firstname, :lastname, presence: true
    validates :email, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }

    after_initialize :ensure_session_token

    attr_reader :password

    has_many :created_boards, 
        class_name: :Board,
        foreign_key: :creator_id


    has_many :authored_pins, 
        class_name: :Pin,
        foreign_key: :author_id

    has_many :saved_pins, 
        through: :created_boards,
        source: :pins

    # User following

    has_many :user_follower_relationships,
        class_name: :UserFollow,
        foreign_key: :following_id

    has_many :user_following_relationships, 
        class_name: :UserFollow,
        foreign_key: :user_id

    has_many :user_followers,
        through: :follower_relationships,
        source: :follower

    has_many :user_followings,
        through: :following_relationships,
        source: :following

    # Board following

    has_many :board_following_relationships,
        class_name: :BoardFollow,
        foreign_key: :following_id

    has_many :board_followings, 
        through: :board_following_relationships,
        source: :following


    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return user if user && user.is_password?(password)
        return nil
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end
    
end
