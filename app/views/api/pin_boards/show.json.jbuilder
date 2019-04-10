
json.pinBoard do
    json.partial! 'api/pin_boards/pin_board', pin_board: @pin_board
end

json.pin do 
    json.partial! 'api/pins/pin', pin: @pin_board.pin
end

json.board do 
    json.set! @pin_board.board.id do
        json.partial! 'api/boards/board', board: @pin_board.board
    end
end