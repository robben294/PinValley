export const createPin = (formData) => {
    return $.ajax({
        method: 'POST',
        url: 'api/pins',
        data: formData,
        contentType: false,
        processData: false
    });
};

export const createPinNotFomatted = (pin) => {
    return $.ajax({
        method: 'POST',
        url: 'api/pins',
        data: pin,
    });
};

export const fetchPins = () => {
    return $.ajax({
        method: 'GET',
        url: `api/pins`,
    });
};

export const fetchFeed = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/feed'
    });
};

export const fetchMoreFeed = (page) => {
    return $.ajax({
        method: 'GET',
        url: 'api/more_feed',
        data: {page},
    });
};

export const fetchPin = (pinId) => {
    return $.ajax({
        method: 'GET',
        url: `api/pins/${pinId}`,
    });
};

export const updatePin = (pin) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/pins/${pin.id}`,
        data: { pin }
    });
};

export const deletePin = (pinId) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/pins/${pinId}`,
    });
};