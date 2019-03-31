import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './profile';

const msp = state => ({
    currentUser: state.entities.users[state.session.id],
});

const mdp = dispatch => ({

});

export default withRouter(connect(msp, mdp)(Profile));