import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../action/session_actions';
import { openModal } from '../../action/modal_actions';

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
            <div id="circularG">
                <div id="circularG_1" className="circularG"></div>
                <div id="circularG_2" className="circularG"></div>
                <div id="circularG_3" className="circularG"></div>
                <div id="circularG_4" className="circularG"></div>
                <div id="circularG_5" className="circularG"></div>
                <div id="circularG_6" className="circularG"></div>
                <div id="circularG_7" className="circularG"></div>
                <div id="circularG_8" className="circularG"></div>
            </div>
        )
    }
}

const msp = state => {
    return {
        currentUser: state.entities.users[state.session.id],
    };
};

const mdp = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(msp, mdp)(Greeting);