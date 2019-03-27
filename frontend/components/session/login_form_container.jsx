import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../action/session_actions';

const msp = state => ({
    errors: state.errors.session,
    formType: 'Log in'
});

const mdp = dispatch => ({
    processForm: (user) => dispatch(login(user)),
});

export default connect(msp, mdp)(SessionForm);