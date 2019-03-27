import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../action/session_actions';

const msp = state => ({
    errors: state.errors.session,
    formType: 'Sign up',
});

const mdp = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
});

export default connect(msp, mdp)(SessionForm);