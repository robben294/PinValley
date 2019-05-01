class Api::UserFollowsController < ApplicationController
    def create
        @user_follow = UserFollow.new(user_follow_params)
        if @user_follow.save
            render :show
        else
            render json: @user_follow.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @user_follow = UserFollow.find(params[:id])
        if @user_follow.destroy
            render :show
        else
            render json: @user_follow.errors.full_messages, statu: 422
        end
    end

    private
    def user_follow_params
        params.require(:user_follow).permit(:user_id, :following_id)
    end
end