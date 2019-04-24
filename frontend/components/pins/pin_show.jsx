import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchBoards } from '../../action/board_actions';
import { fetchPinBoard } from '../../action/pin_board_actions';
import { openModal, closeModal } from '../../action/modal_actions';

class PinShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleBack = this.handleBack.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount() {   
        this.props.fetchPinBoard(this.props.pinBoard.id);
    }

    handleBack(e) {
        this.props.closeModal();
    }

    handleEdit(e) {
        e.stopPropagation();
        const { pins, pinBoard, boards } = this.props;
        const pin = pins[pinBoard.pin_id];
        const board = boards[pinBoard.board_id];
        this.props.openModal({
            modalType: 'editPin',
            modalProps: { pin, board, pinBoard }
        });
    }

    isOwner() {
        //checking the owner of the pin
        //if currentUser is the owner, currentUser has authority to edit
        const { currentUserId, pinBoard, pins, boards } = this.props;
        const pin = pins[pinBoard.pin_id];
        const board = boards[pinBoard.board_id];
        const authorId = pin.author_id;
        const ownerId = board.creator_id;
        return (currentUserId === authorId || currentUserId === ownerId);
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
        const { pins, pinBoard, boards, users } = this.props;
        if (!pinBoard || !pins || !boards || !users || !users[boards[pinBoard.board_id].creator_id]) {
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
            );
        }
        const pin = pins[pinBoard.pin_id];
        const board = boards[pinBoard.board_id];
        const user = users[board.creator_id];
        return (
            <div className='pin-show-page' onClick={this.handleBack}>
                <div className='pin-show-back' onClick={this.handleBack}>
                    <i className="fas fa-chevron-left"></i>
                </div>
                <div className='pin-show-main' onClick={e => e.stopPropagation()}>
                    <div className='pin-show-nav'>
                        <div className='pin-show-icons'> 

                            {
                                this.isOwner() 
                                    ? <div className='pin-show-icon'
                                        onClick={this.handleEdit}>
                                        <i className="fas fa-pen"></i>
                                    </div>
                                    : null
                            }

                            <div className='pin-show-icon'>
                                <i className="fas fa-ellipsis-h"></i>
                            </div>  
                        </div>
                        <div className='pin-show-nav-right'>
                            <div className='pin-show-nav-choose-board'>
                                {/* { board ? board.title : null} */}
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
                                <div className="pin-show-bottom">
                                    <div className="pin-show-circle">
                                        {user.firstname[0]}
                                    </div>
                                    <div>
                                        <div className="pin-show-user">
                                            {
                                                this.isOwner() 
                                                ? 
                                                <div>
                                                    <strong>You</strong> saved to <strong>{board.title}</strong>
                                                </div>
                                                : 
                                                <div>
                                                    <strong>{user.firstname} {user.lastname}</strong> saved to <strong>{board.title}</strong>
                                                </div>
                                            }
                                        </div>
                                        <div className='pin-show-description'>
                                            <a>{pinBoard.description}</a>
                                        </div>
                                    </div>
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
        // pinBoard: state.entities.pinBoards[ownProps.match.params.pinBoardId],
        // pinBoard: state.entities.pinBoards[ownProps.location.pathname.split('/')[ownProps.location.pathname.split('/').length - 1]],
        pins: state.entities.pins,
        boards: state.entities.boards,
        users: state.entities.users,
        currentUserId: state.session.id
    }
};

const mdp = dispatch => ({
    fetchPinBoard: (pinBoardId) => dispatch(fetchPinBoard(pinBoardId)),
    fetchBoards: () => dispatch(fetchBoards()),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
});

export default withRouter(connect(msp, mdp)(PinShow));