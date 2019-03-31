import React from 'react';
import Navbar from '../nav_bar/nav_bar';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { updateUser } from '../../action/user_actions';

class EditProfileForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.currentUser;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
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

    handleCancel(e) {
        e.preventDefault();
        this.props.history.push('/profile');
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className='edit-profile'>
                    <div className='edit-sidebar'>
                        <div className='edit-sidebar-profile'>
                            <div className="edit-sidebar-profile-pen">
                                <i className="fas fa-pen"></i>
                            </div>
                            <div className='edit-sidebar-profile-text'>Edit profile</div>
                        </div>
                    </div>

                    <div className='edit-main'>
                        <div className='edit-head'>
                            <div className='edit-head-text'>
                                <div className='edit-title'>Edit profile</div>
                                <div className='edit-subtext'>People on Pinterest will get to know you with the info below</div>
                            </div>
                            <div className='edit-buttons'>
                                <div 
                                    className='edit-button-cancel edit-button'
                                    onClick={this.handleCancel}>
                                    Cancel
                                </div>
                                <div className='edit-button-done edit-button' onClick={this.handleSubmit}>Done</div>
                            </div>
                        </div>
                        <div className='edit-name'>
                            <div className='edit-name-form'>
                                <div className='edit-name-text'>First name</div>
                                <input className='edit-name-box'
                                    type="text" 
                                    value={this.state.firstname} 
                                    onChange={this.handleInput('firstname')}
                                    placeholder='Ex. Jo'/>

                            </div>
                            <div className='edit-name-form edit-lastname-form'>
                                <div className='edit-name-text'>Last name</div>
                                <input className='edit-name-box '
                                    type="text" 
                                    value={this.state.lastname} 
                                    onChange={this.handleInput('lastname')}
                                    placeholder='Ex. Smith'/>
                            </div>
                        </div>
                        <div className='edit-about'>
                            <div className='edit-about-name'>About your profile</div>
                            <textarea className='edit-about-box'
                                cols="30" rows="10" 
                                value={this.state.about_me} 
                                onChange={this.handleInput('about_me')}
                                placeholder='Write a little bit about yourself here'>
                            </textarea>
                        </div>
                        <div className='edit-location'>
                            <div className='edit-location-name'>Location</div>
                            <input className='edit-location-box'
                                type="text" 
                                value={this.state.location} 
                                onChange={this.handleInput('location')}
                                placeholder='Ex. San Francisco, CA'/>
                        </div>
                    </div>
                </div>
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