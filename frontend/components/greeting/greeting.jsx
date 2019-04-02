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

    componentDidMount() {
        if (!this.props.currentUser) {
            this.props.openModal({ modalType: 'login' });
        } 
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logout().then(this.props.openModal({modalType: 'login'}));
    }

    render() {
        const { currentUser } = this.props;
        if (currentUser){
            return (
                <div>
                    Hi {currentUser.firstname} {currentUser.lastname} !
                    <br />
                    <button onClick={this.handleLogout}>Log out</button>
                </div>
            )
        }
         else {

            return (
                null
            )
        }
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