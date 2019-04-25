import * as BoardApiUtil from '../util/board_api_util';

export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const REMOVE_BOARD = 'REMOVE_BOARD';
export const RECEIVE_ONLY_BOARDS = 'RECEIVE_ONLY_BOARDS';
export const RECEIVE_ONLY_BOARD = ' RECEIVE_ONLY_BOARD';

export const receiveBoards = ({boards, pins, pinBoards}) => {
    return {
        type: RECEIVE_BOARDS,
        boards,
        pins,
        pinBoards
    };
};

export const receiveBoard = ({board, pins, pinBoards}) => {
    return {
        type: RECEIVE_BOARD,
        board,
        pins,
        pinBoards
    };
};

export const receiveOnlyBoards = (boards) => {
    return {
        type: RECEIVE_ONLY_BOARDS,
        boards,
    };
};

export const receiveOnlyBoard = ({board}) => {
    return {
        type: RECEIVE_ONLY_BOARD,
        board,
    };
};

export const removeBoard = (boardId) => {
    return {
        type: REMOVE_BOARD,
        boardId
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

export const createFeedBoard = (board) => dispatch => {
    return BoardApiUtil.createBoard(board).then(payload => dispatch(receiveOnlyBoard(payload)));
};

export const updateBoard = (board) => dispatch => {
    return BoardApiUtil.updateBoard(board).then(board => dispatch(receiveBoard(board)));
};

export const deleteBoard = (boardId) => dispatch => {
    return BoardApiUtil.deleteBoard(boardId).then(() => dispatch(removeBoard(boardId)));
};

export const fetchOnlyBoards = () => dispatch => {
    return BoardApiUtil.fetchOnlyBoards().then((boards) => dispatch(receiveOnlyBoards(boards)));
};