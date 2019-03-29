import React from 'react';
import Navbar from '../nav_bar/nav_bar';

class Profile extends React.Component {


    render() {
        const { currentUser } = this.props;
        return (
            <div>
                <Navbar />
                <div>{currentUser.firstname} {currentUser.lastname}</div>
            </div>
        );
    }
}

export default Profile;