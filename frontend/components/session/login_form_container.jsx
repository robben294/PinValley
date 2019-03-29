import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, clearSessionErrors } from '../../action/session_actions';
import { openModal, closeModal } from '../../action/modal_actions';

const msp = state => ({
    errors: state.errors.session,
    formType: 'Log in'
});

const mdp = dispatch => ({
    processForm: (user) => dispatch(login(user)),
    otherForm: (
        <a onClick={() => dispatch(openModal('signup'))}>
            Not on Pinvalley yet? Sign up
        </a>
    ),
    otherFormTopLeft: (
        <button onClick={() => dispatch(openModal('signup'))}>Sign up</button>
    ),
    closeModal: () => dispatch(closeModal()),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
});

export default connect(msp, mdp)(SessionForm);