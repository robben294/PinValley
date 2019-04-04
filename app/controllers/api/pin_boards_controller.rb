class PinBoardsController < ApplicationController 
    def destroy
        @pin_board = PinBoard.find(params[:id])
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