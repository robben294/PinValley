class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        err = []
        if @user
            login(@user)
            render 'api/users/show'
        else
            if params[:user][:email] == ""
                err.push("Email You missed a spot! Don't forget to add your email.")
            elsif params[:user][:password] == ""
                err.push("Password you entered is incorrect. Try again.")
            else
                err.push("Invalid email/password combination")
            end
            render json: err, status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
            logout!
            render 'api/users/show'
        else
            render json: ['Nobody signed in'], status: 404
        end
    end
end