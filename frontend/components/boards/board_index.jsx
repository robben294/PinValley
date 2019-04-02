import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchBoards } from '../../action/board_actions';
import { openModal } from '../../action/modal_actions';
import Profile from '../profile/profile_container';
import BoardIndexItem from './board_index_item';
import BoardsModal from '../modal/boards_modal';

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
                    key={board.id}/>
            
            )
        });
        return (
            <div>
                {/* <BoardsModal board={this.props.board} /> */}
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
    };
};

const mdp = dispatch => {
    return {
        fetchBoards: () => dispatch(fetchBoards()),
        openModal: (modal) => dispatch(openModal(modal)),
    };
};

export default withRouter(connect(msp, mdp)(BoardIndex));