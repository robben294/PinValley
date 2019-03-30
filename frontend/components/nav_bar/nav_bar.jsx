import React from 'react';
import Dropdown from './dropdown';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showDropdown: false,
            redirectToProfile: false,
            redirectToFeed: false,
            circle: this.props.currentUser.firstname[0],
        };
        this.showDropdown = this.showDropdown.bind(this);
        this.closeDropdown = this.closeDropdown.bind(this);
        this.setRedirectToProfile = this.setRedirectToProfile.bind(this);
        this.setRedirectToFeed = this.setRedirectToFeed.bind(this);
    }

    setRedirectToProfile(e) {
        e.preventDefault();
        this.setState({
            redirectToProfile: true,
        });
    }

    setRedirectToFeed(e) {
        e.preventDefault();
        this.setState({
            redirectToFeed: true,
        });
    }

    renderRedirect() {
        if (this.state.redirectToProfile && this.props.match.path !== '/profile') {
            return <Redirect to='/profile' />
        }

        if (this.state.redirectToFeed && this.props.match.path !== '/feed') {
            return <Redirect to='/feed' />
        }
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
        e.preventDefault();
        this.setState({
            showDropdown: false,
        }, () => {
            document.removeEventListener('click', this.closeDropdown);
        });
    }

    render() {
        const { currentUser, logout } = this.props;
        
        return (
            <div>
                <div className='navbar-main'>
                    <div className='navbar-left'>
                        <div className="navbar-logo" onClick={this.setRedirectToFeed}>
                            <img className="fas" src={window.logo} />
                        </div>
                        <div className='navbar-welcome'>
                        </div>
                    </div>

                    <div className='navbar-right'>
                        <div className='navbar-user'>
                            {this.renderRedirect()}
                            
                            <div className="fas" onClick={this.setRedirectToProfile}>
                                <span className='my-circle'>{this.state.circle}</span>
                                <span className='name'>{currentUser.firstname}</span> 
                            </div>
                        </div>

                        <div className='navbar-option' onClick={this.showDropdown}>
                            <i id='navbar-option' className="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                </div>
                <Dropdown logout={logout} showDropdown={this.state.showDropdown}/>
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
    logout: () => dispatch(logout()),
});

export default withRouter(connect(msp, mdp)(Navbar));