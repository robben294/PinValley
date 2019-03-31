import React from 'react';
import Navbar from '../nav_bar/nav_bar';
import { Redirect } from 'react-router-dom';
import ProfileCreateDropdown from '../dropdown/profile_create_dropdown';

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            circle: this.props.currentUser.firstname[0],
            showDropdown: false,
        };
        this.showDropdown = this.showDropdown.bind(this);
        this.closeDropdown = this.closeDropdown.bind(this);
        this.redirectToEdit = this.redirectToEdit.bind(this);
    }

    redirectToEdit(e) {
        e.preventDefault();
        this.props.history.push('/profile/edit');
    }

    showDropdown(e) {
        e.preventDefault();
        this.setState({
            showDropdown: true,
        }, () => {
            document.addEventListener('click', this.closeDropdown);
        });
    }

    closeDropdown(e) {
        this.setState({
            showDropdown: false,
        }, () => {
            document.removeEventListener('click', this.closeDropdown);
        });
        //when showing the drop down, you are not able to click on redirect components.     
    }

    render() {
        const { currentUser } = this.props;
        return (
            <div>
                <Navbar />
                <div className='profile'>
                    <div className='profile-icon'>
                        <div id="profile-dropdown" onClick={this.showDropdown}>
                            <i className="fas fa-plus"></i>
                            <ProfileCreateDropdown showDropdown={this.state.showDropdown}/>  
                        </div>
                        <div onClick={this.redirectToEdit}>
                            <i className="fas fa-pen"></i>
                        </div>
                    </div>
                    <div className='profile-info'>
                        <div className='profile-user'>
                            <div className='profile-username'>{currentUser.firstname} {currentUser.lastname}</div>
                            <div className='profile-follow-info'>follower · following</div>
                            <div className='profile-location'>{currentUser.location}</div>
                        </div>
                        <div>
                            <div className='profile-circle'>{this.state.circle}</div>
                        </div>
                    </div>
                </div>  
            </div>
        );
    }
}

export default Profile;