
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

json.user do
    json.set! @pin_board.board.creator_id do
        json.partial! 'api/users/user', user: @pin_board.board.creator
    end
end