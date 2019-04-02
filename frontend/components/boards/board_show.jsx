import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchBoard } from '../../action/board_actions';
import Navbar from '../nav_bar/nav_bar';
import BoardShowPlusDropdown from '../dropdown/board_show_plus_dropdown';
import { openModal } from '../../action/modal_actions';

class BoardShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showDropdown: false,
            circle: this.props.currentUser.firstname[0],
        };
        this.showDropdown = this.showDropdown.bind(this);
        this.closeDropdown = this.closeDropdown.bind(this);
        this.redirectToProfile = this.redirectToProfile.bind(this);
    }

    componentDidMount() {
        this.props.fetchBoard(this.props.match.params.boardId);
    }

    showDropdown(e) {
        e.preventDefault();
        this.setState({
            showDropdown: true,
        });
    }

    closeDropdown(e) {
        this.setState({
            showDropdown: false,
        });
    }

    redirectToProfile(e) {
        e.preventDefault();
        this.props.history.push('/profile');
    }

    render() {
        const {title, description} = this.props.board || {};
        return (
        <div>
                
            <Navbar />
            <div className='board-show'>
                <div className='board-show-icons'>
                    <div className='board-show-icons-left'>
                        <div id="board-show-plus-dropdown" 
                            tabIndex='1' 
                            onFocus={this.showDropdown} 
                            onBlur={this.closeDropdown}>
                            <i className="fas fa-plus"></i>
                            <BoardShowPlusDropdown
                                showDropdown={this.state.showDropdown}/>
                        </div>
                            <div onClick={() => this.props.openModal({
                                modalType: 'editBoard',
                                modalProps: this.props.board
                                })}>
                            <i className="fas fa-pen"></i>
                        </div>
                    </div>
                    <div className='board-show-icons-right'>
                        <div className='board-show-circle' 
                            onClick={this.redirectToProfile}>
                            {this.state.circle}
                        </div>
                    </div>
                </div>
                <div className='board-show-head'>
                    <div className='board-show-title'>
                        {title}
                    </div>
                    <div className='board-show-subtext'>
                        0 Pins
                    </div>
                    <div className='board-show-subtext'>
                        {description}
                    </div>
                </div>
                
                <div className='board-show-main'>
                    <div className='board-show-pins'>
                        <div className='board-show-pins-nav'>
                            Your Pins
                </div>
                        <div className='board-show-pins-content'>

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
        board: state.entities.boards[ownProps.match.params.boardId],
        currentUser: state.entities.users[state.session.id],
    };
};

const mdp = dispatch => {
    return {
        fetchBoard: (boardId) => dispatch(fetchBoard(boardId)), 
        openModal: (modal) => dispatch(openModal(modal)),
    };
};

export default withRouter(connect(msp, mdp)(BoardShow));