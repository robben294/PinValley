import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { updatePinBoard, deletePinBoard } from '../../action/pin_board_actions';
import { closeModal } from '../../action/modal_actions';
import { fetchOnlyBoards } from '../../action/board_actions';

class SavePinForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount() {
        this.props.fetchOnlyBoards();
    }

//     handleInput(field) {
//         return (e) => {
//             this.setState({
//                 [field]: e.target.value,
//             });
//         };
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         const { pinBoard } = this.props;
//         const { title, description, website } = this.state;

//         const new_pin_board = {
//             description,
//             id: pinBoard.id,
//             pin_id: pinBoard.pin_id,
//             board_id: pinBoard.board_id,
//         };

//         const new_pin = {
//             pin: {
//                 id: pinBoard.pin_id,
//                 title,
//                 website,
//             },
//             pin_board: {
//                 description,
//                 board_id: pinBoard.board_id,
//             }
//         };
//         if (this.needCreatePin()) {
//             this.props.createPin(new_pin)
//                 .then(() => this.props.deletePinBoard(pinBoard.id))
//                 .then(this.handleClose);
//             return;
//         }

//         if (this.needUpdatePinBoard()) {
//             this.props.updatePinBoard(new_pin_board)
//                 .then(this.handleClose);
//             return;
//         }

//     }

    handleClose(e) {
        this.props.closeModal();
    }

//     handleDelete(e) {
//         this.props.deletePinBoard(this.props.pinBoard.id)
//             .then(() => this.props.history.push(`/boards/${this.props.board.id}`)).then(() => this.handleClose());
//     }

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
                <div className='save-pin-board-title' key={board.id}>
                    <span className='save-pin-board-title-text'>
                        {board.title}
                    </span>
                    <div className='save-pin-board-title-select'>
                        Save
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

                    <div>
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
        boards: state.entities.boards,
        currentUserId: state.session.id,
    };
};

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        updatePinBoard: (pinBoard) => dispatch(updatePinBoard(pinBoard)),
        fetchOnlyBoards: () => dispatch(fetchOnlyBoards()),
    };
};

export default withRouter(connect(msp, mdp)(SavePinForm));