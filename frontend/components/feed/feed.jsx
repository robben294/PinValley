import React from 'react';
import { connect } from 'react-redux';

import { fetchFeed } from '../../action/pin_actions';
import FeedItem from './feed_item';

class Feed extends React.Component {

    componentDidMount() {
        this.props.fetchFeed();
    }

    render() {
        const { pins, pinBoards, boards } = this.props;
        const wrappedPins = Object.values(pinBoards).map((pinBoard, idx) => {
            if (pinBoard) {
            return (
                <FeedItem pinBoard={pinBoard}
                    board={boards[pinBoard.board_id]}
                    pin={pins[pinBoard.pin_id]}
                    key={idx}
                    push={this.props.history.push}
                    openModal={this.props.openModal} />
                )
            } else {
                return null;
                }
            
        });
        return (
            <div>
                {wrappedPins}
            </div>
        )
    }
}

const msp = state => {
    return {
        pins: state.entities.pins,
        pinBoards: state.entities.pinBoards,
        boards: state.entities.boards,
    };
};

const mdp = dispatch => {
    return {
        fetchFeed: () => dispatch(fetchFeed()),
    };
};
export default connect(msp, mdp)(Feed);