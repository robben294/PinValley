import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PinIndexItem from './pin_index_item';

class PinIndex extends React.Component {

    render() {
        if (this.props.location.pathname === '/profile/edit') {
            return null;
        }

        if (!this.props.pins) {
            return null;
        }

        const boardPins = this.props.pins.filter(pin => this.props.board.pin_ids.includes(pin.id));

        const wrappedPins = boardPins.map((pin,idx) => {
            return (
                <PinIndexItem pin={pin} key={idx} push={this.props.history.push}/>
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
        board: state.entities.boards[ownProps.match.params.boardId]
    };
};

const mdp = dispatch => {
    return {

    };
};

export default withRouter(connect(msp, mdp)(PinIndex));