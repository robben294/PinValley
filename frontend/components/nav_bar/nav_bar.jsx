import React from 'react';
import NavbarDropdown from '../dropdown/narbar_dropdown';
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
        this.renderRedirect = this.renderRedirect.bind(this);
    }

    // componentWillUnmount() {
    //     document.removeEventListener('click', this.closeDropdown);
    // }


    renderRedirect(path) {
        return (e) => {
            if (this.props.match.path !== `/${path}`){
                this.props.history.push(`/${path}`);
            }
        };
    }

    showDropdown(e) {
        e.preventDefault();
        this.setState({
            showDropdown: true,
        });
    } 
    
    closeDropdown(e) {

        // if (!this.dropdownMenu.contains(e.target)) {
            this.setState({
                showDropdown: false,
            });
        // }
        //when showing the drop down, you are not able to click on redirect components.     
    }

    render() {
        const { logout } = this.props;
        if (!this.props.currentUser) {
            return null;
        }
        return (
            <div>
                <div className='navbar-main'>
                    <div className='navbar-left'>
                        <div className="navbar-logo" onClick={this.renderRedirect('feed')}>
                            <img className="fas" src={window.logo} />
                        </div>
                        <div className='navbar-welcome'>
                        </div>
                    </div>

                    <div className='navbar-right'>
                        <div className='navbar-user'>
                            
                            <div className="fas" onClick={this.renderRedirect('profile')}>
                            {/* {this.renderRedirect()} */}
                                <span className='my-circle'>{this.props.currentUser.firstname[0]}</span>
                                <span className='name'>{this.props.currentUser.firstname}</span> 
                            </div>
                        </div>

                        <div className='navbar-option' 
                            tabIndex="1" 
                            onFocus={this.showDropdown}
                            onBlur={this.closeDropdown}>
                            <i id='navbar-option' className="fas fa-ellipsis-h"></i>
                            <NavbarDropdown logout={logout} showDropdown={this.state.showDropdown}/>
                        </div>
                    </div>
                </div>
                {/* <div ref={(element) => {
                    this.dropdownMenu = element;
                }}> */}
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