import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchBoards } from '../../action/board_actions';
import { fetchPinBoard } from '../../action/pin_board_actions';
import { openModal } from '../../action/modal_actions';

class PinShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleBack = this.handleBack.bind(this);
    }

    componentDidMount() {
        this.props.fetchBoards();
        this.props.fetchPinBoard(this.props.match.params.pinBoardId);
    }

    handleBack(e) {
        this.props.history.goBack();
    }

    shortenWebsite(website) {
        if (website.includes(".com")) {
            website = website.split(".com")[0] + ".com";
        }
        if (website.includes("//")) {
            website = website.split("//")[1];
        }
        if (website.includes("www.")) {
            website = website.split("www.")[1];
        }
        return website;
    }

    render() {
        const { pins, pinBoard, boards } = this.props;
        if (!pinBoard) {
            return null;
        }
        const pin = pins[pinBoard.pin_id];
        const board = boards[pinBoard.board_id];
        const pinBoardId = pinBoard.id;
        return (
            <div className='pin-show-page'>
                <div className='pin-show-back' onClick={this.handleBack}>
                    <i className="fas fa-chevron-left"></i>
                </div>
                <div className='pin-show-main'>
                    <div className='pin-show-nav'>
                        <div className='pin-show-icons'> 
                            <div className='pin-show-icon' 
                            onClick={() => this.props.openModal({
                                modalType: 'editPin',
                                modalProps: { pin, board, pinBoardId, boards }
                            })}>
                                <i className="fas fa-pen"></i>
                            </div>
                            <div className='pin-show-icon'>
                                <i className="fas fa-ellipsis-h"></i>
                            </div>  
                        </div>
                        <div className='pin-show-nav-right'>
                            <div className='pin-show-nav-choose-board'>
                                { board ? board.title : null}
                                <i className="fas fa-chevron-down"></i>
                            </div>
                            <div className='pin-show-nav-save'>
                                Save
                            </div>
                        </div>
                    </div>

                        <div>
                            <div className='pin-show-content'>
                                <div className='pin-show-title'>
                                    {pin.title}
                                </div>
                                
                                { 
                                    pin.website
                                    ? <div>
                                            <a href={pin.website} className='pin-show-img-container'>
                                                <div className='pin-show-img'>
                                                    <img src={pin.photoUrl} />
                                                </div>
                                            </a>
                                            <a href={pin.website} className='pin-show-website'>
                                                <i className="fas fa-link"></i>
                                                {this.shortenWebsite(pin.website)}
                                            </a>
                                    </div>
                                        
                                    : <a className='pin-show-img-container'>
                                            <div className='pin-show-img'>
                                                <img src={pin.photoUrl} />
                                            </div>
                                    </a>
                                }
                            </div>
                            <div className='pin-show-description'>
                                <a>{pinBoard.description}</a>
                            </div>
                        </div>

                </div>
            </div>
        )
    }
}

const msp = (state, ownProps) => {
    return { 
        pinBoard: state.entities.pinBoards[ownProps.match.params.pinBoardId],
        pins: state.entities.pins,
        boards: state.entities.boards,
    }
};

const mdp = dispatch => ({
    fetchPinBoard: (pinBoardId) => dispatch(fetchPinBoard(pinBoardId)),
    fetchBoards: () => dispatch(fetchBoards()),
    openModal: (modal) => dispatch(openModal(modal)),
});

export default withRouter(connect(msp, mdp)(PinShow));