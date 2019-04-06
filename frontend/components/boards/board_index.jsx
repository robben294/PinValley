import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchBoards } from '../../action/board_actions';
import { fetchPins } from '../../action/pin_actions';
import { openModal } from '../../action/modal_actions';
import Profile from '../profile/profile_container';
import BoardIndexItem from './board_index_item';

class BoardIndex extends React.Component {

    componentDidMount() {
        this.props.fetchBoards();
    }

    render() {
        if (this.props.location.pathname === '/profile/edit') {
            return null;
        }
        
        const boards = this.props.boards.map(board => {
            return (

                <BoardIndexItem 
                    board={board} 
                    push={this.props.history.push} 
                    openModal={this.props.openModal}
                    key={board.id}
                    pins={this.props.pins}/>
            
            )
        });
        return (
            <div>
                <div className='boards'>
                    {boards}
                </div>
            </div>
        );
    }
}

const msp = state => {
    return {
        boards: Object.values(state.entities.boards),
        pinBoards: Object.values(state.entities.pinBoards),
        pins: Object.values(state.entities.pins),
    };
};

const mdp = dispatch => {
    return {
        fetchBoards: () => dispatch(fetchBoards()),
        fetchPins: () => dispatch(fetchPins()),
        openModal: (modal) => dispatch(openModal(modal)),
    };
};

export default withRouter(connect(msp, mdp)(BoardIndex));