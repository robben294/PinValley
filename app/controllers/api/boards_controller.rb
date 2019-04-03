class Api::BoardsController < ApplicationController
    def create
        @board = Board.new(board_params)
        if @board.save
            render :show
        else
            render json: @board.errors.full_messages, status: 401
        end
    end

    def show
        @board = Board.find(params[:id])
        if @board 
            render :show
        else
            render json: ['Could not locate board'], status: 400
        end
    end

    def index
        @boards = Board.where(creator_id: current_user.id)
        render :index
    end

    def update
        @board = Board.find(params[:id])
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
        params.require(:board).permit(:title, :creator_id, :description)
    end
end