class Api::BoardsController < ApplicationController
    def create
        @board = current_user.created_boards.new(board_params)
        if @board.save
            render :show
        else
            render json: @board.errors.full_messages, status: 401
        end
    end

    def show
        @board = Board.includes(pins: { photo_attachment: :blob }).find(params[:id])
        if @board 
            render :show
        else
            render json: ['Could not locate board'], status: 400
        end
    end

    def index
        @boards = Board.where(creator_id: current_user.id).includes(pins: { photo_attachment: :blob })
        render :index
    end

    def update
        @board = Board.find(params[:id]).includes(pins: { photo_attachment: :blob })
        if @board.update_attributes(board_params)
            render :show
        else
            render json: @board.errors_full_messages, status: 401
        end
    end

    def destroy
        @board = Board.find(params[:id])
        if @board.destroy
            render :show
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    private
    def board_params
        params.require(:board).permit(:title, :description)
    end
end