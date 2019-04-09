import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PinIndexItem from './pin_index_item';
import { openModal } from '../../action/modal_actions';

class PinIndex extends React.Component {

    render() {  
        if (this.props.location.pathname === '/profile/edit') {
            return null;
        }

        const { board, pinBoards, pins } = this.props;
        if (!pins || Object.keys(pinBoards).length === 0) {
            return null;
        }

        const boardPins = board.pin_board_ids.map(pin_board_id => {
            //It's possible that previous state's pins/boards/pinBoards are not empty 
            //but some of them are not there, so cannot read property pin_id of null
            if (pinBoards[pin_board_id]) {
                return pinBoards[pin_board_id];
                // return Object.assign(pins[pinBoards[pin_board_id].pin_id], {pin_board_id}); 
            } else {
                return null;
            }
            //merge pin_board_id into pins, so that it canbe passed into PinIndexItem
        });

        const wrappedPinBoards = boardPins.map((pinBoard,idx) => {
            if (pinBoard) {
                return (
                    <PinIndexItem pinBoard={pinBoard} 
                        board={board} 
                        pin={pins[pinBoard.pin_id]}
                        key={idx} 
                        push={this.props.history.push}
                        openModal={this.props.openModal}/>
                )
            } else {
                return null;
            }
        });
        return (
            <div>
                <div className='pins'>
                    {wrappedPinBoards}
                </div>
            </div>
        );
    }
}

const msp = (state, ownProps) => {
    return {
        pins: state.entities.pins,
        pinBoards: state.entities.pinBoards,
        board: state.entities.boards[ownProps.match.params.boardId]
    };
};

const mdp = dispatch => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
    };
};

export default withRouter(connect(msp, mdp)(PinIndex));