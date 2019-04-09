@pins.each do |pin|
        json.pins do
                json.partial! 'api/pins/pin', pin: pin
        end

        json.pinBoards do
                pin.pin_boards.each do |pin_board| 
                        json.partial! 'api/pin_boards/pin_board', pin_board: pin_board
                end
        end

        json.boards do
                pin.belonged_boards.each do |board|
                        json.set! board.id do 
                                json.partial! 'api/boards/board', board: board
                        end
                end
        end
end