import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PinIndexItem from './pin_index_item';
import { openModal } from '../../action/modal_actions';
import { fetchPins }  from '../../action/pin_actions';
import { fetchBoards } from '../../action/board_actions';

class BoardPinIndex extends React.Component {

    componentDidMount() {
        this.props.fetchBoards();
    }

    render() {  
        if (this.props.location.pathname === '/profile/edit') {
            return null;
        }

        const { board, pinBoards, pins } = this.props;
        if (!pins || Object.keys(pinBoards).length === 0) {
            return null;
        }

        const wrappedPinBoards = Object.values(pinBoards).map((pinBoard,idx) => {
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
            
            <div className="boardpins-index">
                <div className="boardpins-number-pins">
                    {
                        wrappedPinBoards.length === 1
                            ? <div> <strong>{wrappedPinBoards.length}</strong> Pin </div>
                            : <div> <strong>{wrappedPinBoards.length}</strong> Pins </div>
                    }
                </div>
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
        board: state.entities.boards[ownProps.match.params.boardId],
        boards: state.entities.boards,
    };
};

const mdp = dispatch => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        fetchPins: () => dispatch(fetchPins()),
        fetchBoards: () => dispatch(fetchBoards()),
    };
};

export default withRouter(connect(msp, mdp)(BoardPinIndex));