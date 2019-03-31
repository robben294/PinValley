import React from 'react';
import Navbar from '../nav_bar/nav_bar';
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
                <Navbar />
                <div className='edit-profile'>
                    <div className='edit-sidebar'>
                        <div><i className="edit-sidebar-pen fas fa-pen"></i></div>
                        <div className='edit-sidebar-text'>Edit profile</div>
                    </div>
                    <div className='edit-main'>
                        <div className='edit-head'>
                            <div className='edit-head-text'>
                                <div className='edit-title'>Edit profile</div>
                                <div className='edit-subtext'>People on Pinterest will get to know you with the info below</div>
                            </div>
                            <div className='edit-buttons'>
                                <div className='edit-button'>Cancel</div>
                                <div className='edit-button' onClick={this.handleSubmit}>Done</div>
                            </div>
                        </div>
                        <div className='edit-name'>
                            <div className='edit-firstname-form'>
                                <div className='edit-firstname'>First name</div>
                                <input className='edit-firstname-box'
                                    type="text" 
                                    value={this.state.firstname} 
                                    onChange={this.handleInput('firstname')}
                                    placeholder='Ex. Jo'/>

                            </div>
                            <div className='edit-lastname-form'>
                                <div className='edit-lastname'>Last name</div>
                                <input className='edit-lastname-box '
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