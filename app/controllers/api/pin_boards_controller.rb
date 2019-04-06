class PinBoardsController < ApplicationController 
    def create
        @pin_board = PinBoard.new(pin_board_params)
        if @pin_board.save
            render :show
        else
            render json: @pin_board.errors.full_messages, status: 422
        end
    end

    def destroy
        @pin_board = PinBoard.find_by(params[:id])
        if @pin_board.destroy
            render :show
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    private
    def pin_board_params
        parmas.require(pin_board).permit(:pin_id, :board_id, :description)
    end
end