import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './profile';
import { openModal } from '../../action/modal_actions';

const msp = state => ({
    currentUser: state.entities.users[state.session.id],
});

const mdp = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal)),
});

export default withRouter(connect(msp, mdp)(Profile));