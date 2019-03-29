import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, clearSessionErrors } from '../../action/session_actions';
import { openModal, closeModal } from '../../action/modal_actions';


const msp = state => ({
    errors: state.errors.session,
    formType: 'Sign up',
});

const mdp = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
    otherForm: (
        <a onClick={() => dispatch(openModal('login'))}>
            Already a menber? Log in
        </a>
    ),
    otherFormTopLeft: (
        <button onClick={() => dispatch(openModal('login'))}>Log in</button>
    ),
    closeModal: () => dispatch(closeModal()),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
});

export default connect(msp, mdp)(SessionForm);