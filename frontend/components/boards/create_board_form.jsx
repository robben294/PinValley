import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createBoard } from '../../action/board_actions';
import { closeModal } from '../../action/modal_actions';

class CreateBoardForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            creator_id: props.creator_id
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleInput(e) {
        this.setState({
            title: e.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createBoard(this.state).then(() => this.props.closeModal());
    }

    handleClose(e) {
        e.preventDefault();
        this.props.closeModal();
    }

    render() {
        return (
            <div>
                <div className='create-board-title'>
                    Create board
                </div>
                <div className='create-board-content'>
                    <div className='create-board-name'>
                        <div className='create-board-name-text'>
                            Name
                        </div>
                        <div className='create-board-name-box'>
                            <input type="text" 
                                value={this.state.title} 
                                onChange={this.handleInput} 
                                placeholder='Like "Places to Go" or "Recipes to Make"'/>
                        </div>
                    </div>

                    <div className='create-board-buttons'>
                        <div className='create-board-button' onClick={this.handleClose}>
                            Cancel
                        </div>
                        <div className='create-board-button' onClick={this.handleSubmit}>
                            Create
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const msp = state => ({
    creator_id: state.session.id
});

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        createBoard: (board) => dispatch(createBoard(board)),
    };
};

export default withRouter(connect(msp, mdp)(CreateBoardForm));