export const createPinBoard = (pinBoard) => {
    return $.ajax({
        method: 'POST',
        url: 'api/pin_boards',
        data: { pin_board: pinBoard }
    });
};

export const deletePinBoard = (pinBoardId) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/pin_boards/${pinBoardId}`,
    });
};

export const fetchPinBoard = (pinBoardId) => {
    return $.ajax({
        method: 'GET',
        url: `api/pin_boards/${pinBoardId}`
    });
};

export const updatePinBoard = (pinBoard) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/pin_boards/${pinBoard.id}`,
        data: {pin_board: pinBoard}
    });
};