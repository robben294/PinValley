
json.pinBoard do
    json.partial! 'api/pin_boards/pin_board', pin_board: @pin_board
end

json.pin do 
    json.partial! 'api/pins/pin', pin: @pin_board.pin
end