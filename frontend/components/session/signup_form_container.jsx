import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../action/session_actions';
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
    closeModal: () => dispatch(closeModal()),
});

export default connect(msp, mdp)(SessionForm);