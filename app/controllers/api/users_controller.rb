class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render :show
        else
            render @user.errors.full_messages, status: 401
        end
    end

    def update
        @user = User.find_by(username: params[:username])
        if @user && @user.update_attributes(user_params)
            render :show
        elsif !@user
            render json: ['Could not locate user'], status: 400
        else
            render json: @user.errors.full_messages, status: 401
        end
    end


    private
    def user_params
        params.require(:user).permit(:username, :email, :password, :firstname, :lastname, :location, :about_me)
    end
end