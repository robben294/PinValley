import React from 'react';

const Dropdown = ({ showDropdown, openModal }) => {
    return (
        <div>
            {
                showDropdown
                    ? (
                        <div className="profile-dropdown-content">
                            <div className="profile-arrow"> </div>
                            <div className="profile-arrow-up"></div>
                            <div className="profile-arrow-up-border"></div>
                            <div className="profile-dropdown-item">
                                <div onClick={() => openModal('createBoard')}>Create board</div>
                            </div>
                            <div className="profile-dropdown-item">
                                <div>Create Pin</div>
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