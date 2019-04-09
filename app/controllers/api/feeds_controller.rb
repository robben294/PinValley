class Api::FeedsController < ApplicationController
    def index
        @pins = Pin.all;
        pins_not_showing = current_user.saved_pins + current_user.authored_pins
        @pins.select { |pin| !pins_not_showing.include?(pin) }
        render 'api/pins/index'
    end
end