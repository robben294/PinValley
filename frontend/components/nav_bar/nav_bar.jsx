import React from 'react';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showDropdown: false,
        };
    }

    

    render() {
        const { currentUser, logout } = this.props;
        return (
            <div className='navbar-main'>
                <div className='navbar-left'><img src={window.logo} /></div>

                <div className='navbar-right'>
                    <div className='navbar-user'>
                        {currentUser.firstname} {currentUser.lastname}
                    </div>

                    <div className='navbar-option' onClick={this.showDropdown}>
                        <div><i className="fas fa-ellipsis-h"></i></div>
                        <div className="dropdown-content">
                            <a onClick={logout}>Log out</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Navbar;