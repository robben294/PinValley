import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchBoards } from '../../action/board_actions';
import Profile from '../profile/profile_container';
import BoardIndexItem from './board_index_item';

class BoardIndex extends React.Component {

    componentDidMount() {
        this.props.fetchBoards();
    }

    render() {
        
        const boards = this.props.boards.map(board => {
            return (
                <BoardIndexItem 
                    board={board} 
                    push={this.props.history.push} 
                    key={board.id}/>
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
    };
};

const mdp = dispatch => {
    return {
        fetchBoards: () => dispatch(fetchBoards()),
    };
};

export default withRouter(connect(msp, mdp)(BoardIndex));