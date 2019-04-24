import React from 'react';
import { connect } from 'react-redux';
import { Waypoint } from 'react-waypoint';

import { fetchFeed, fetchMoreFeed } from '../../action/pin_actions';
import { openModal } from '../../action/modal_actions';
import FeedItem from './feed_item';
import { fetchOnlyBoards } from '../../action/board_actions';

class Feed extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 1,
        };
        this.handleFetchMoreFeed = this.handleFetchMoreFeed.bind(this);
    }

    componentDidMount() {
        this.props.fetchOnlyBoards().then(() => this.props.fetchFeed())
        .then((respond) => {
            this.setState({ page: this.state.page + Object.values(respond.pins).length / 5 - 1});
        });
    }

    handleFetchMoreFeed(e) {
        this.props.fetchMoreFeed(this.state.page)
            .then(() => this.setState({ page: this.state.page + 1 }));
        console.log(this.state.page);
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
            // console.log(idx >= Object.values(pinBoards).length - 10)
            if (pinBoard) {
            return (
                <FeedItem pinBoard={pinBoard}
                    board={boards[pinBoard.board_id]}
                    boards={boards}
                    pin={pins[pinBoard.pin_id]}
                    key={idx}
                    push={this.props.history.push}
                    openModal={this.props.openModal}>

                </FeedItem>
                )
            } else {
                return null;
                }
            
        });
        return (
            <div className="pins">
                {wrappedPins}
                <div>
                    <Waypoint
                        onEnter={this.handleFetchMoreFeed}
                    >
                        {/* <div>
                            Loading...
                            <br/>
                        </div> */}
                    </Waypoint>
                </div>
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
        fetchOnlyBoards: () => dispatch(fetchOnlyBoards()),
        fetchMoreFeed: (page) => dispatch(fetchMoreFeed(page)),
    };
};
export default connect(msp, mdp)(Feed);