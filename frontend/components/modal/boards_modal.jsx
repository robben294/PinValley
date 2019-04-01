import React from 'react';
import { connect } from 'react-redux';
import CreateBoardForm from '../boards/create_board_form';

const Modal = ({ modal, closeModal }) => {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'createBoard':
            component = <CreateBoardForm />;
            break;
        default:
            return null;
    }
    return (
        <div>
            <div className="modal-background">
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

});

export default connect(msp, mdp)(Modal);