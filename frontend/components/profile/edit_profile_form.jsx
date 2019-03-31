import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateUser } from '../../action/user_actions';

class EditProfileForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.currentUser;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field) {
        return (e) => {
            this.setState({
                [field]: e.target.value
            });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateUser(this.state);
    }

    render() {
        return (
            <div>
                <div>Edit profile</div>
                <div>People on Pinterest will get to know you with the info below</div>
                <div>Cancel</div>
                <div onClick={this.handleSubmit}>Done</div>
                <div>First name</div>
                <input type="text" 
                    value={this.state.firstname} 
                    onChange={this.handleInput('firstname')}
                    placeholder='Ex. Jo'/>
                <div>Last name</div>
                <input type="text" 
                    value={this.state.lastname} 
                    onChange={this.handleInput('lastname')}
                    placeholder='Ex. Smith'/>
                <div>About your profile</div>
                <textarea cols="30" rows="10" 
                    value={this.state.about_me} 
                    onChange={this.handleInput('about_me')}
                    placeholder='Write a little bit about yourself here'>
                </textarea>
                <div>Location</div>
                <input type="text" 
                    value={this.state.location} 
                    onChange={this.handleInput('location')}
                    placeholder='Ex. San Francisco, CA'/>
            </div>
        )
    }
}

const msp = state => ({
    currentUser: state.entities.users[state.session.id],
});

const mdp = dispatch => {
    return (
        {
            updateUser: (user) => dispatch(updateUser(user)), 
        }
    );
};

export default withRouter(connect(msp, mdp)(EditProfileForm));