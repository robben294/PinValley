import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createFeedPinBoard } from '../../action/pin_board_actions';
import {createFeedBoard} from '../../action/board_actions';
import { closeModal } from '../../action/modal_actions';
// import { fetchOnlyBoards } from '../../action/board_actions';

class SavePinForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            createBoard: false,
            board_title: '',
            boardId: null,
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.openCreateBoard = this.openCreateBoard.bind(this);
        this.handleCreateBoard = this.handleCreateBoard.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    componentDidMount() {
        // this.props.fetchOnlyBoards();
    }

    openCreateBoard(e) {
        this.setState({ createBoard: true });
        this.setState({ renderBoards: false });
    }
    
    handleCreateBoard(e) {
        this.props.createFeedBoard({ title: this.state.board_title })
            .then((response) => {
                this.setState({ boardId: response.board.id });
            })
            .then((response) => {
                this.handleSubmit();
            });
    }

    handleInput(field) {
    return (e) => {
            this.setState({
                [field]: e.target.value,
            });
        };
    }

    handleClose(e) {
        this.props.closeModal();
    }

    handleCancel(e) {
        this.setState({ createBoard: false });
    }

    handleSubmit(e) {
        const { pin, pinBoard } = this.props;
        const newPinBoard = { 
            board_id: this.state.boardId || e.currentTarget.id, 
            pin_id: pin.id,
            description: pinBoard.description,
        };
        this.props.createFeedPinBoard(newPinBoard).then(this.handleClose);
    }

//     checkAuthor() {
//         return this.props.currentUserId === this.props.pin.author_id;
//     }

    render() {
        const { boards, pin, currentUserId } = this.props;

        const UserBoards = Object.values(boards).filter(board => {
            return board.creator_id === currentUserId;
        });

        const wrappedBoards = UserBoards.map(board => {
            return (
                <div className='save-pin-board-title' id={board.id} key={board.id} onClick={this.handleSubmit}>
                    <div className='save-pin-board-title-text'>
                        {board.title}
                    </div>
                    <div className='save-pin-container'>
                        <div className='save-pin-board-title-select'>
                            <div className='pin-save-pin'>
                                <i className="fas fa-thumbtack"></i>
                            </div>
                            <div className='pin-board-save-text' >
                                Save
                            </div>
                        </div>
                    </div>
                </div>
            )
        });

        let boardForm;
        if (this.state.createBoard) {
            boardForm = (
                <div className="create-board-form-pin">
                    <div className='create-board-content-pin'>
                        <div className='create-board-name-pin'>
                            <div className='create-board-text-pin'>
                                Name
                            </div>
                            <input className='create-board-name-box-pin'
                                type="text"
                                value={this.state.board_title}
                                onChange={this.handleInput('board_title')}
                                placeholder='Like "Places to Go" or "Recipes to Make"' />
                        </div>

                        <div className='create-board-buttons-pin'>
                            <div className='create-board-button-pin create-board-cancel-button-pin' onClick={this.handleCancel}>
                                Cancel
                        </div>
                            <div
                                className={`${this.state.board_title !== "" ? 'active' : 'inactive'} create-board-button-pin`}
                                onClick={this.state.board_title !== "" ? this.handleCreateBoard : null}>
                                Create
                        </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            boardForm = (
                <div className='save-pin-main'>
                    <div className='save-pin-content-text'>
                        <div className='save-pin-select-board'>
                            {wrappedBoards}
                        </div>
                    </div>

                    <div className='save-new-board-button' onClick={this.openCreateBoard}>
                        <div>
                            <i className="fas fa-plus-circle"></i>
                        </div>
                        <div className='save-new-board-button-text'>
                            Create Board
                            </div>
                    </div>
                </div>
            )
        }

        return (
            <div className="save-pin-form">
                <div className='save-pin-title'>
                    <div className='save-pin-title-text'>
                        {
                            this.state.createBoard  
                                ? <span>Create Board</span>
                                : <span>Choose board</span>
                        }
                    </div>
                    <div className='save-pin-close' onClick={this.handleClose}>
                        <i className="fas fa-times"></i>
                    </div>
                </div>

                <div className='save-pin-content'>

                    <div className='save-pin-img'>
                        <img src={pin.photoUrl} />
                    </div>

                    {boardForm}

                </div>

            </div>
        )
    }
}

const msp = (state, ownProps) => {
    return {
        // boards: state.entities.boards,
        currentUserId: state.session.id,
    };
};

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        // fetchOnlyBoards: () => dispatch(fetchOnlyBoards()),
        createFeedBoard: (board) => dispatch(createFeedBoard(board)),
        createFeedPinBoard: (pinBoard) => dispatch(createFeedPinBoard(pinBoard)),
    };
};

export default withRouter(connect(msp, mdp)(SavePinForm));