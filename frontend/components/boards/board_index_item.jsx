import React from 'react';

class BoardIndexItem extends React.Component{

    render() {
        const { board } = this.props;
        return (
            <div className='board-item'>
                <div className='board-cover'>
                </div>
                <div>
                    {board.title}
                </div>
                <div>
                    {/* {board.pinsId.length} */}
                    0 Pins
                </div>
            </div>
        )
    }
}

export default BoardIndexItem;