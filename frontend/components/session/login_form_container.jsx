import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, clearSessionErrors } from '../../action/session_actions';
import { openModal, closeModal } from '../../action/modal_actions';

const handleModal = (dispatch) => {
    return () => {
        dispatch(closeModal());
        dispatch(openModal({ modalType: 'signup' }));
    };
};

const msp = state => ({
    errors: state.errors.session,
    formType: 'Log in'
});

const mdp = dispatch => ({
    processForm: (user) => dispatch(login(user)),
    otherForm: (
        <a onClick={handleModal(dispatch)}>
            Not on Pinvalley yet? Sign up
        </a>
    ),
    otherFormTopLeft: (
        <button onClick={handleModal(dispatch)}>
            Sign up
        </button>
    ),
    closeModal: () => dispatch(closeModal()),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
});

export default connect(msp, mdp)(SessionForm);