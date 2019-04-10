class Api::FeedController < ApplicationController
    def index
        @pins = Pin.with_attached_photo.all.includes(:belonged_boards);
        pins_not_showing = current_user.saved_pins + current_user.authored_pins
        @pins = @pins.select { |pin| !pins_not_showing.include?(pin) }
        # @pins = Pin.where.not(author_id: current_user.id).includes(:pin_boards).where(pin_board.)
        render 'api/pins/index'
    end
end