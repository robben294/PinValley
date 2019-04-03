import React from 'react';

const Dropdown = ({ showDropdown, push, openModal }) => {
    return (
        <div>
            {
                showDropdown
                    ? (
                        <div className="profile-dropdown-content">
                            <div className="profile-arrow"> </div>
                            <div className="profile-arrow-up"></div>
                            <div className="profile-arrow-up-border"></div>
                            <div className="profile-dropdown-item" 
                                onClick={() => openModal({ modalType: 'createBoard'})}>
                                <div>Create board</div>
                            </div>
                            <div 
                                className="profile-dropdown-item"
                                onClick={() => push('/pin/new')}>
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