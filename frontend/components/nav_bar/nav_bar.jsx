import React from 'react';
import Dropdown from './narbar_dropdown';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showDropdown: false,
            redirectToProfile: false,
            redirectToFeed: false,
            currentUser: this.props.currentUser,
        };
        this.showDropdown = this.showDropdown.bind(this);
        this.closeDropdown = this.closeDropdown.bind(this);
        this.setRedirectToProfile = this.setRedirectToProfile.bind(this);
        this.setRedirectToFeed = this.setRedirectToFeed.bind(this);
    }

    setRedirectToProfile(e) {
        e.preventDefault();
        if (!this.state.showDropdown) {
            this.setState({
                redirectToProfile: true,
            });
        }
    }

    setRedirectToFeed(e) {
        e.preventDefault();
        if (!this.state.showDropdown) {
            this.setState({
                redirectToFeed: true,
            });
        }
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
        // if (!this.dropdownMenu.contains(e.target)) {
            this.setState({
                showDropdown: false,
            }, () => {
                document.removeEventListener('click', this.closeDropdown);
            });
        // }
        //when showing the drop down, you are not able to click on redirect components.     
    }

    render() {
        const { logout } = this.props;
        
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
                            
                            <div className="fas" onClick={this.setRedirectToProfile}>
                            {this.renderRedirect()}
                                <span className='my-circle'>{this.state.currentUser.firstname[0]}</span>
                                <span className='name'>{this.state.currentUser.firstname}</span> 
                            </div>
                        </div>

                        <div className='navbar-option' onClick={this.showDropdown}>
                            <i id='navbar-option' className="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                </div>
                {/* <div ref={(element) => {
                    this.dropdownMenu = element;
                }}> */}
                    <Dropdown logout={logout} showDropdown={this.state.showDropdown}/>
                {/* </div> */}
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