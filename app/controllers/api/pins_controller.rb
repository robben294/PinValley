class Api::PinsController < ApplicationController
    def create
        @pin = Pin.new(pin_params)
        if @pin.save
            render :show
        else
            render json: @pin.errors.full_messages, status: 422
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
        params.require(:pin).permit(:photo, :website, :author_id, :title)
    end
end