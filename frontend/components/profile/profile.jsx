import React from 'react';
import { NavLink } from 'react-router-dom';

import Navbar from '../nav_bar/nav_bar';
import BoardsModal from '../modal/boards_modal';
import ProfileCreateDropdown from '../dropdown/profile_create_dropdown';
import BoardIndex from '../boards/board_index';

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

    // componentWillUnmount() {
    //     document.removeEventListener('click', this.closeDropdown);
    // }

    redirectToEdit(e) {
        e.preventDefault();
        this.props.history.push('/profile/edit');
    }

    showDropdown(e) {
        e.preventDefault();
        this.setState({
            showDropdown: true,
        });
    }

    closeDropdown(e) {
        this.setState({
            showDropdown: false,
        });
    }

    render() {
        const { currentUser } = this.props;
        if (!currentUser) {
            return null;
        }
        
        return (
            <div>
                <Navbar />
                <BoardsModal />
                <div className='profile'>
                    <div className='profile-icon'>
                        <div id="profile-dropdown" tabIndex='1' onFocus={this.showDropdown} onBlur={this.closeDropdown}>
                            <i className="fas fa-plus"></i>
                            <ProfileCreateDropdown 
                                showDropdown={this.state.showDropdown}
                                openModal={this.props.openModal}/>  
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

                    <div className="profile-content">
                        <div className='profile-content-nav'>                                       
                            <NavLink to='/profile/boards'>Boards</NavLink>
                        </div>
                        <div className='profile-content-nav'>
                            <NavLink to='/profile/Pins'>Pins</NavLink>
                        </div>
                    </div>
                </div>  
                <BoardIndex fromProfile={true}/>
            </div>
        );
    }
}

export default Profile;