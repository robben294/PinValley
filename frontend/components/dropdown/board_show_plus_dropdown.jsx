import React from 'react';

const Dropdown = ({ showDropdown, push }) => {
    return (
        <div>
            {
                showDropdown
                    ? (
                        <div className="board-show-dropdown-content">
                            <div className="board-show-arrow"> </div>
                            <div className="board-show-arrow-up"></div>
                            <div className="board-show-arrow-up-border"></div>
                            <div className="board-show-dropdown-item" onClick={() => push('/pin/new')}>
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