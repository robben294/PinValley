import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateBoard, deleteBoard } from '../../action/board_actions';
import { closeModal } from '../../action/modal_actions';

class EditBoardForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.board;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleInput(field) {
        return (e) => {
            this.setState({
                [field]: e.target.value,
            });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateBoard(this.state).then(() => this.props.closeModal());
    }

    handleClose(e) {
        e.preventDefault();
        this.props.closeModal();
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteBoard(this.props.board.id).then(() => this.props.closeModal()).then(() => this.props.history.push('/profile/boards'));
    }

    noChange() {
        const { title, description } = this.props.board || {};
        return (this.state.title === title &&
            this.state.description === description);
    }

    render() {
        if (!this.state) {
            return null;
        }
        return (
            <div className="edit-board-form">
                <div className='edit-board-title'>
                    <div className='edit-board-title-text'>Edit your board</div>
                    <div className='edit-board-close' onClick={this.handleClose}>
                        <i className="fas fa-times"></i>
                    </div>
                </div>
                <div className='edit-board-content'>
                    <div className='edit-board-name'>
                        <div className='edit-board-text'>
                            Name
                        </div>
                        <input className='edit-board-name-box'
                            type="text"
                            value={this.state.title || ""}
                            onChange={this.handleInput('title')}
                            placeholder='Like "Places to Go" or "Recipes to Make"' />
                    </div>

                    <div className='edit-board-description'>
                        <div className='edit-board-text'>
                            Description
                        </div>
                        <textarea className='edit-board-description-box'
                            type="text"
                            value={this.state.description || ""}
                            onChange={this.handleInput('description')}
                            placeholder="What's your board about?" />
                    </div>

                    <div className='edit-board-buttons'>
                        <div className='edit-board-buttons-left'>
                            <div className='edit-board-button edit-board-delete-button' 
                                onClick={this.handleDelete}>
                                Delete
                            </div>
                        </div>

                        <div className='edit-board-buttons-right'>
                            <div className='edit-board-button edit-board-cancel-button' 
                                onClick={this.handleClose}>
                                Cancel
                            </div>
                            <div
                                className={`${this.noChange() ? 'inactive' : 'active'} edit-board-button`}
                                onClick={this.noChange() ? null : this.handleSubmit}>
                                Save
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const msp = (state, ownProps) => ({
});

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        updateBoard: (board) => dispatch(updateBoard(board)),
        deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
    };
};

export default withRouter(connect(msp, mdp)(EditBoardForm));