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


