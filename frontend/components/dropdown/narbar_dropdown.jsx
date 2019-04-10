import React from 'react';

class Dropdown extends React.Component {

    handleLogout() {
        this.props.closeDropdown();
        this.props.logout();
    }
    
    render() {
        const { showDropdown } = this.props;
        return (
            <div>
                {
                    showDropdown
                        ? (
                            <div className="dropdown-content">
                                <div className="arrow-up"></div>
                                <div className="arrow-up-border"></div>
                                <div className="dropdown-item" onClick={this.handleLogout.bind(this)}>
                                    <div>Log out</div>
                                </div>
                            </div>
                        )
                        : (
                            null
                        )
                }      
            </div>
        )
    }
} 

export default Dropdown;