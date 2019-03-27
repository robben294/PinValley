import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../action/session_actions';
import LoginFormContainer from '../session/login_form_container';

class Greeting extends React.Component {

    render() {
        const { currentUser, logout } = this.props;
        if (currentUser){
            return (
                <div>
                    {currentUser.firstname} {currentUser.lastname}
                    <br />
                    <button onClick={() => logout()}>Log out</button>
                </div>
            )
        }
         else {
            return (
                <div>
                    <LoginFormContainer />
                </div>
            )
        }
    }
}

const msp = state => ({
    currentUser: state.entities.users[state.session.id],
});

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
});

export default connect(msp, mdp)(Greeting);