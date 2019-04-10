class Api::PinsController < ApplicationController
    def create
        debugger
        # url = url_for(Pin.find(pin_params[:id]).photo)
        # @pin.attach(io: File.open(url), filename: 'nothing_special.jpg')
        if pin_params[:id]
            
            @pin = current_user.authored_pins.new(title: pin_params[:title], website: pin_params[:website])
            @pin_board = @pin.pin_boards.new(pin_board_params)
            url = url_for(Pin.find(pin_params[:id]).photo)
            file = EzDownload.open(url)
            debugger
            @pin.photo.attach(io: file, filename: 'nothing_special.jpg')
            # @pin.photo = Pin.find(pin_params[:id]).photo
            debugger
            # when saving pin in editPin, we just need to create a new pin with original photo
        else
            @pin = current_user.authored_pins.new(pin_params) # create with current_user.id
            @pin_board = @pin.pin_boards.new(pin_board_params) #Using pin's association to create a pin_board
            #when save one of them, both of them being saved.
            #Not passing current_user any more, and don't need to create pin_board from pinboard controller
        end
        debugger
        if @pin.save
            render :show
        else
            render json: {pin_board: @pin_board.errors.full_messages, pin: @pin.errors.full_messages}, status: 422
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
        params.require(:pin).permit(:id, :photo, :website, :title)
    end

    def pin_board_params
        params.require(:pin_board).permit(:board_id, :description)
    end
end