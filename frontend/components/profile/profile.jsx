import React from 'react';
import Navbar from '../nav_bar/nav_bar';

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            circle: this.props.currentUser.firstname[0],
        };
    }

    render() {
        const { currentUser } = this.props;
        return (
            <div>
                <Navbar />
                <div className='profile'>
                    <div className='profile-icon'>
                        <div><i className="fas fa-plus"></i></div>
                        <div><i className="fas fa-pen"></i></div>
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