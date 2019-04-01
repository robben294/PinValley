import * as BoardApiUtil from '../util/board_api_util';

export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const REMOVE_BOARD = 'REMOVE_BOARD';

export const receiveBoards = (boards) => {
    return {
        type: RECEIVE_BOARDS,
        boards
    };
};

export const receiveBoard = (board) => {
    return {
        type: RECEIVE_BOARD,
        board
    };
};

export const removeBoard = () => {
    return {
        type: REMOVE_BOARD,
    };
};

export const fetchBoards = () => dispatch => {
    return BoardApiUtil.fetchBoards().then((boards) => dispatch(receiveBoards(boards)));
};

export const fetchBoard = (boardId) => dispatch => {
    return BoardApiUtil.fetchBoard(boardId).then(board => dispatch(receiveBoard(board)));
};

export const createBoard = (board) => dispatch => {
    return BoardApiUtil.createBoard(board).then(board => dispatch(receiveBoard(board)));
};

export const upateBoard = (board) => dispatch => {
    return BoardApiUtil.updateBoard(board).then(board => dispatch(receiveBoard(board)));
};

export const deleteBoard = (boardId) => dispatch => {
    return BoardApiUtil.deleteBoard(boardId).then(() => dispatch(removeBoard()));
};