import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../action/modal_actions';
import CreateBoardForm from '../boards/create_board_form';
import EditBoardForm from '../boards/edit_board_form';

const Modal = ({ modal, board, closeModal }) => {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'createBoard':
            component = <CreateBoardForm />;
            break;
        case 'editBoard':
        debugger
            component = <EditBoardForm board={board}/>;
        default:
            return null;
    }
    return (
        <div>
            <div className="boards-modal-background" onClick={closeModal}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    {component}
                </div>
            </div>
        </div>

    );
};

const msp = (state) => ({
    modal: state.ui.modal,
});

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal()),
});

export default connect(msp, mdp)(Modal);