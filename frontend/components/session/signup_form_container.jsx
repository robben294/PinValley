import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, clearSessionErrors } from '../../action/session_actions';
import { openModal, closeModal } from '../../action/modal_actions';

const handleModal = (dispatch) => {
    return () => {
        dispatch(closeModal());
        dispatch(openModal({ modalType: 'login' }));
    };
};

const msp = state => ({
    errors: state.errors.session,
    formType: 'Sign up',
});

const mdp = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
    otherForm: (
        <a onClick={handleModal(dispatch)}>
            Already a member? Log in
        </a>
    ),
    otherFormTopLeft: (
        <button onClick={handleModal(dispatch)}>Log in</button>
    ),
    closeModal: () => dispatch(closeModal()),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
});

export default connect(msp, mdp)(SessionForm);