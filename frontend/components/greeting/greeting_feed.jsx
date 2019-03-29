import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../action/session_actions';
import { openModal } from '../../action/modal_actions';
import Navbar from '../nav_bar/nav_bar';

class Greeting extends React.Component {

    constructor(props) {
        super(props);
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logout().then(() => null); 
        // Here logout and do nothing. The route change? to '/' which goes to greeting_login
    }
    render() {
        const currentUser = this.props.currentUser || {}; 
        // If we don't have a current_user, why is it going to render this component?
        return (
            <Navbar currentUser={currentUser} logout={this.props.logout} />
        )
    }
}

const msp = state => {
    return {
        currentUser: state.entities.users[state.session.id],
    };
};

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(msp, mdp)(Greeting);