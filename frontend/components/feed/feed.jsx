import React from 'react';
import { connect } from 'react-redux';

import { fetchFeed } from '../../action/pin_actions';
import { openModal } from '../../action/modal_actions';
import FeedItem from './feed_item';

class Feed extends React.Component {

    componentDidMount() {
        this.props.fetchFeed();
    }

    render() {
        const { pins, pinBoards, boards } = this.props;
        if (!pins || !pinBoards || !boards) {
            return (
                <div id="circularG">
                    <div id="circularG_1" className="circularG"></div>
                    <div id="circularG_2" className="circularG"></div>
                    <div id="circularG_3" className="circularG"></div>
                    <div id="circularG_4" className="circularG"></div>
                    <div id="circularG_5" className="circularG"></div>
                    <div id="circularG_6" className="circularG"></div>
                    <div id="circularG_7" className="circularG"></div>
                    <div id="circularG_8" className="circularG"></div>
                </div>
            )
        }
        const wrappedPins = Object.values(pinBoards).map((pinBoard, idx) => {
            if (pinBoard) {
            return (
                <FeedItem pinBoard={pinBoard}
                    board={boards[pinBoard.board_id]}
                    pin={pins[pinBoard.pin_id]}
                    key={idx}
                    push={this.props.history.push}
                    boards={boards}
                    openModal={this.props.openModal} />
                )
            } else {
                return null;
                }
            
        });
        return (
            <div className="pins">
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
        openModal: (modal) => dispatch(openModal(modal)),
    };
};
export default connect(msp, mdp)(Feed);