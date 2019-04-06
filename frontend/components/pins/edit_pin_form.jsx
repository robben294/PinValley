import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../action/modal_actions';
import { createPinBoard, deletePinBoard } from '../../action/pin_board_actions';

class EditPinForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.pin;
        this.handleClose = this.handleClose.bind(this);
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
    }

    handleClose(e) {
        e.preventDefault();
        this.props.closeModal();
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deletePinBoard(this.props.params.pinBoardId);
    }

    render() {

        return (
            <div className="edit-pin-form">
                <div className='edit-pin-title'>
                    <div className='edit-pin-title-text'>Edit this Pin</div>
                    <div className='edit-pin-close' onClick={this.handleClose}>
                        <i className="fas fa-times"></i>
                    </div>
                </div>

                <div className='edit-pin-content'>
                    <div className='edit-pin-content-text'>
                        <div className='edit-pin-select-board'>

                        </div>
                        <div className='edit-pin-name'>
                            <div className='edit-pin-text'>
                                Title
                            </div>
                            <input className='edit-pin-name-box'
                                type="text"
                                value={this.state.title || ""}
                                onChange={this.handleInput('title')}/>
                        </div>

                        <div className='edit-pin-description'>
                            <div className='edit-pin-text'>
                                Description
                            </div>
                            <textarea className='edit-pin-description-box'
                                type="text"
                                value={this.state.description || ""}
                                onChange={this.handleInput('description')}
                                placeholder="Tell us about this Pin..." />
                        </div>

                        <div className='edit-pin-website'>
                            <div className='edit-pin-text'>
                                Website
                            </div>
                            <input className='edit-pin-website-box'
                                type="text"
                                value={this.state.website || ""}
                                onChange={this.handleInput('website')}/>
                        </div>
                    </div>

                    <div className='edit-pin-img'>
                        <img src={this.props.pin.photoUrl}/>
                    </div>

                </div>

                <div className='edit-pin-buttons'>
                    <div className='edit-pin-buttons-left'>
                        <div className='edit-pin-button edit-pin-delete-button'
                            onClick={this.handleDelete}>
                            Delete
                        </div>
                    </div>

                    <div className='edit-pin-buttons-right'>
                        <div className='edit-pin-button edit-pin-cancel-button'
                            onClick={this.handleClose}>
                            Cancel
                        </div>
                        <div
                            className='edit-pin-button edit-pin-save-button'
                            onClick={this.handleSubmit}>
                            Save
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
        deletePinBoard: (pinBoardId) => dispatch(deletePinBoard(pinBoardId)),
    };
};

export default withRouter(connect(msp, mdp)(EditPinForm));