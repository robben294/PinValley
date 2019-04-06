import React from 'react';
import { fetchBoard } from '../../action/board_actions';
import { connect } from 'react-redux';

class BoardIndexItem extends React.Component{

    constructor(props) {
        super(props);
        this.redirectToBoardShow = this.redirectToBoardShow.bind(this);
    }

    componentDidMount() {
        // this.props.fetchBoard(this.props.board.id);
    }

    redirectToBoardShow(e) {
        this.props.push(`/boards/${this.props.board.id}`);
    }

    render() {
        const { board, pins, pinBoards } = this.props;
        return (
            <div className='board-item' onClick={this.redirectToBoardShow}>
                <div className='board-cover'>
                    {board.pin_board_ids && pinBoards[board.pin_board_ids[0]] ? 
                        <img src={pins[pinBoards[board.pin_board_ids[0]].pin_id].photoUrl} /> : null}
                </div>
                <div className='board-item-header'>
                    <div className='board-item-text'>
                        <div className='board-item-title'>
                            {board.title}
                        </div>
                        {
                            board.pin_board_ids.length === 1  
                            ? <div className= 'board-item-number-pins'> {board.pin_board_ids.length} Pin </div>
                            : <div className='board-item-number-pins'> {board.pin_board_ids.length} Pins </div> 
                        }
                    </div>
                    <div onClick={e => e.stopPropagation()}>
                        <div 
                            onClick={() => this.props.openModal({ modalType: 'editBoard',
                                                                 modalProps: board })}>
                            <i className="fas fa-pen"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const msp = state => {

    return {
        pins: state.entities.pins,
        pinBoards: state.entities.pinBoards,
    }
};

const mdp = dispatch => ({
    fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
});

export default connect(msp, mdp)(BoardIndexItem);