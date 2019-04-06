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
            return Object.assign(pins[pinBoards[pin_board_id].pin_id], {pin_board_id}); 
            //merge pin_board_id into pins, so that it canbe passed into PinIndexItem
        });

        const wrappedPins = boardPins.map((pin,idx) => {
            return (
                <PinIndexItem pin={pin} 
                    board={board} 
                    key={idx} 
                    push={this.props.history.push}
                    openModal={this.props.openModal}/>
            )
        });
        return (
            <div>
                <div className='pins'>
                    {wrappedPins}
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