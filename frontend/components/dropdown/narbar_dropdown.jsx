import React from 'react';

const Dropdown = ({ showDropdown,logout }) => {
    return (
        <div>
            {
                showDropdown
                    ? (
                        <div className="dropdown-content">
                            <div className="arrow-up"></div>
                            <div className="arrow-up-border"></div>
                            <div className="dropdown-item">
                                <div onClick={logout}>Log out</div>
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

export default Dropdown;