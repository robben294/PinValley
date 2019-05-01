class Api::BoardFollowsController < ApplicationController
    def create
        @board_follow = BoardFollow.new(board_follow_params)
        if @board_follow.save
            render :show
        else
            render json: @board_follow.errors.full_messages, status: 422
        end
    end

    def destroy
        @board_follow = BoardFollow.find(params[:id])
        if @board_follow.destroy
            render :show
        else
            render json: @board_follow.errors.full_messages, status: 422
        end
    end

    private
    def board_follow_params
        params.require(:board_follow).permit(:user_id, :following_id)
    end
end