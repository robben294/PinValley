json.set! pin_board.id do 
    json.extract! pin_board, :id, :pin_id, :board_id, :description
end