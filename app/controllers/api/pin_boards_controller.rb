class Api::PinBoardsController < ApplicationController 
    def create
        debugger
        @pin_board = PinBoard.new(pin_board_params)
        if @pin_board.save
            render :show
        else
            render json: @pin_board.errors.full_messages, status: 422
        end
    end

    def show
        @pin_board = PinBoard.find(params[:id])
        if @pin_board
            render :show
        else
            render json: ['Could not locate pin_board'], status: 422
        end
    end

    def update
        @pin_board = PinBoard.find(params[:id])
        if @pin_board.update_attributes(pin_board_params)
            render :show
        else
            render json: @board.errors.full_messages, status: 422 
        end
    end

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
        params.require(:pin_board).permit(:id, :pin_id, :board_id, :description)
    end
end