import React from 'react';
import { closeModal } from '../../action/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import CreateBoardForm from '../boards/create_board_form';
import EditBoardForm from '../boards/edit_board_form';

const Modal = ({ modal, closeModal }) => {
    if (!modal) {
        return null;
    }
    let component;
    let background = null;
    let backgroundClass;

    switch (modal.modalType) {
        case 'login':
            component = <LoginFormContainer />;
            background = <img src={window.background} className='login-background' />;
            backgroundClass = "modal-background";
            break;
        case 'signup':
            component = <SignupFormContainer />;
            background = <img src={window.background} className='login-background' />;
            backgroundClass = "modal-background";
            break;
        case 'createBoard':
            component = <CreateBoardForm />;
            backgroundClass = "boards-modal-background";
            break;
        case 'editBoard':
            component = <EditBoardForm board={modal.modalProps} />;
            backgroundClass = "boards-modal-background";
            debugger
            break;
        default:
            return null;
    }
    return (
            <div>
                {background}
                <div 
                    className={backgroundClass} 
                    onClick={backgroundClass === "modal-background" 
                    ? null 
                    : closeModal}>
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
    closeModal: () => dispatch(closeModal),
});

export default connect(msp, mdp)(Modal);