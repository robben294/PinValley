import React from 'react';
import Dropdown from './dropdown';
import { Redirect } from 'react-router-dom';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showDropdown: false,
            redirectToProfile: false,
        };
        this.showDropdown = this.showDropdown.bind(this);
        this.closeDropdown = this.closeDropdown.bind(this);
        this.setRedirect = this.setRedirect.bind(this);
    }

    setRedirect(e) {
        e.preventDefault();
        this.setState({
            redirectToProfile: true,
        });
    }

    renderRedirect() {
        if (this.state.redirectToProfile) {
            return <Redirect to='/profile' />
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
                        <div className="navbar-logo">
                            <img className="fas" src={window.logo} />
                        </div>
                        <div className='navbar-welcome'>
                            <span>Welcome to PinValley</span>
                        </div>
                    </div>

                    <div className='navbar-right'>
                        <div className='navbar-user'>
                            {this.renderRedirect()}
                            <span className="fas" onClick={this.setRedirect}>{currentUser.firstname}</span>
                        </div>

                        <div id='navbar-option 'className='navbar-option' onClick={this.showDropdown}>
                            <i className="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                </div>
                <Dropdown logout={logout} showDropdown={this.state.showDropdown}/>
            </div>
        )
    }
}


export default Navbar;