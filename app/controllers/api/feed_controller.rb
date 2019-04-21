class Api::FeedController < ApplicationController
    def index
        # @pins = Pin.with_attached_photo.all.includes(:belonged_boards);
        # pins_not_showing = current_user.saved_pins + current_user.authored_pins
        # @pins = @pins.select { |pin| !pins_not_showing.include?(pin) }

        # @pins = Pin.where.not(author_id: current_user.id).page(1).includes(:belonged_boards).with_attached_photo

        @pin_boards = PinBoard.includes(pin: { photo_attachment: :blob }).joins(:pin).joins(:board).where.not(pins: {author_id: current_user.id}).where.not(boards: {creator_id: current_user.id}).includes(:board).includes(:pin).page(1).per(5)
        render 'api/pin_boards/index'
    end
end