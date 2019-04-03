class Api::PinsController < ApplicationController
    def create
        @pin = current_user.authored_pins.new(pin_params)
        @pin_board = @pin.pin_boards.new(pin_board_params) #Using pin's association to create a pin_board
        #when save one of them, both of them being saved.
        #Not passing current_user any more, and don't need to create pin_board from pinboard controller
        if @pin_board.save
            render :show
        else
            render json: @pin_board.errors.full_messages.concat(@pin.errors.full_messages), status: 422
        end
    end

    def update
        @pin = Pin.find(params[:id])
        if @pin.update_attributes(pin_params)
            render :show
        else
            render json: @pin.errors.full_messages, status: 422
        end
    end
    
    def index
        @pins = Pin.all
        render :index
    end

    def show
        @pin = Pin.find(params[:id])
        if @pin
            render :show
        else
            render json: ['Could not locate pin'], status: 422
        end
    end

    def destroy
        @pin = Pin.find(params[:id])
        if @pin.destroy
            render :show
        else
            render json: @pin.errors.full_messages, status: 422
        end
    end

    private
    def pin_params
        params.require(:pin).permit(:photo, :website, :title)
    end

    def pin_board_params
        parmas.require(:pin_board).permit(:board_id, :description)
    end
end