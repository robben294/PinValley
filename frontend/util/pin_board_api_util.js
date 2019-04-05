export const createPinBoard = (pinBoard) => {
    return $.ajax({
        method: 'POST',
        url: 'api/pin_boards',
        data: { pinBoard }
    });
};

export const deleteBoard = (pinBoardId) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/pin_boards/${pinBoardId}`,
    });
};