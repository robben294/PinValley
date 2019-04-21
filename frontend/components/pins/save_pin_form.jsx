import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createFeedPinBoard } from '../../action/pin_board_actions';
import { closeModal } from '../../action/modal_actions';
// import { fetchOnlyBoards } from '../../action/board_actions';

class SavePinForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // this.props.fetchOnlyBoards();
    }

    handleClose(e) {
        this.props.closeModal();
    }

    handleSubmit(e) {
        e.preventDefault();
        const { pin, pinBoard } = this.props;
        const newPinBoard = { 
            board_id: e.target.id, 
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
                    <span className='save-pin-board-title-text'>
                        {board.title}
                    </span>
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

        return (
            <div className="save-pin-form">
                <div className='save-pin-title'>
                    <div className='save-pin-title-text'>Choose board</div>
                    <div className='save-pin-close' onClick={this.handleClose}>
                        <i className="fas fa-times"></i>
                    </div>
                </div>

                <div className='save-pin-content'>

                    <div className='save-pin-img'>
                        <img src={pin.photoUrl} />
                    </div>

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
        createFeedPinBoard: (pinBoard) => dispatch(createFeedPinBoard(pinBoard)),
    };
};

export default withRouter(connect(msp, mdp)(SavePinForm));