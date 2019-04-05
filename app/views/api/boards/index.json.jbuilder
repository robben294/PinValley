json.boards do
    @boards.each do |board|
        json.set! board.id do
            json.partial! 'api/boards/board', board: board
        end
    end
end

json.pins do
    @boards.each do |board|
        board.pins.each do |pin|
            json.partial! 'api/pins/pin', pin: pin
        end
    end
end



