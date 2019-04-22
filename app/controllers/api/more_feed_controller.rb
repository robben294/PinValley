class Api::MoreFeedController < ApplicationController
    def index
        @pin_boards = PinBoard.includes(pin: { photo_attachment: :blob }).joins(:pin).joins(:board).where.not(pins: {author_id: current_user.id}).where.not(boards: {creator_id: current_user.id}).includes(:board).includes(:pin).page(params[:page]).per(5)

        render 'api/pin_boards/index'
    end
end