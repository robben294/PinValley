import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../action/session_actions';
import { openModal } from '../../action/modal_actions';

class Greeting extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logout().then(() => this.props.openModal('login'));
    }

    render() {
        const { currentUser } = this.props;
            return (
                <div>
                    Hi {currentUser.firstname} {currentUser.lastname} !
                <br />
                    <button onClick={this.props.logout}>Log out</button>
                </div>
            )
        
        
    }
}

const msp = state => {
    return {
        currentUser: state.entities.users[state.session.id],
    }
};

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(msp, mdp)(Greeting);