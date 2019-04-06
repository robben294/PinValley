json.boards do
    @boards.each do |board|
        json.set! board.id do
            json.partial! 'api/boards/board', board: board
        end
    end
end

json.pins do
    @boards.each do |board|
        count = 0
        board.pins.each do |pin|
            count += 1
            break if count > 6
            json.partial! 'api/pins/pin', pin: pin
        end
    end
end

json.pinBoards do
    @boards.each do |board|
        board.pin_boards.each do |pin_board|
            json.partial! 'api/pin_boards/pin_board', pin_board: pin_board
        end
    end
end