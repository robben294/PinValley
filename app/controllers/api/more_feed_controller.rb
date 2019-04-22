class Api::MoreFeedController < ApplicationController
    def index
        pin_boards_join = PinBoard.includes(pin: { photo_attachment: :blob }).joins(:pin).joins(:board)
        pin_boards_filtered = pin_boards_join.where.not(pins: {author_id: current_user.id}).where.not(boards: {creator_id: current_user.id})

        @pin_boards = pin_boards_filtered.includes(:board).includes(:pin).page(params[:page]).per(5)

        render 'api/pin_boards/index'
    end
end