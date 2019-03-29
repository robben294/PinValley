import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile';

const msp = state => ({
    currentUser: state.entities.users[state.session.id],
});

const mdp = dispatch => ({

});

export default connect(msp, mdp)(Profile);