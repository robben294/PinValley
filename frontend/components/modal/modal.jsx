import React from 'react';
import { closeModal } from '../../action/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';

const Modal = ({ modal, closeModal }) => {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        default:
            return null;
    }
    return (
        <div>
            <img src={window.background} className='login-background' />
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
    closeModal: () => dispatch(closeModal),
});

export default connect(msp, mdp)(Modal);