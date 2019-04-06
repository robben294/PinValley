json.board do
    json.partial! 'api/boards/board', board: @board
end

json.pins do
    @board.pins.each do |pin|
        json.partial! 'api/pins/pin', pin: pin
    end
end

json.pinBoards do
    @board.pin_boards.each do |pin_board|
        json.partial! 'api/pin_boards/pin_board', pin_board: pin_board
    end
end