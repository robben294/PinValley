import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../action/modal_actions';

class Greeting extends React.Component {

    componentDidMount() {

        this.props.openModal({modalType: 'login'});

    }

    render() {
        return (
            null
        );
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
