json.set! pin.id do 
    json.extract! pin, :id, :title, :author_id, :website

        json.photoUrl url_for(pin.photo)

end