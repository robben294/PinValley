json.set! pin.id do 
    json.extract! pin, :id, :title, :author_id, :website, :description
    if pin.photo.attached?
        json.photoUrl url_for(pin.photo)
    end
end