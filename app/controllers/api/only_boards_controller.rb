class Api::OnlyBoardsController < ApplicationController
    def index
        @boards = Board.where(creator_id: current_user.id)
        render :index
    end
end
