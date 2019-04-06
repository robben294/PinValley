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

        if (!this.props.pins) {
            return null;
        }

        const boardPins = this.props.pins.filter(pin => this.props.board.pin_ids.includes(pin.id));

        // this.props.pinBoards
        // const boardPins = 

        const wrappedPins = boardPins.map((pin,idx) => {
            return (
                <PinIndexItem pin={pin} 
                    board={this.props.board} 
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
        pins: Object.values(state.entities.pins),
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