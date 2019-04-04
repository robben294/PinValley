json.board do
    json.partial! 'api/boards/board', board: @board
end

json.pins do
    @board.pins.each do |pin|
        json.partial! 'api/pins/pin', pin: pin
    end
end