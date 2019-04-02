import React from 'react';

class BoardIndexItem extends React.Component{

    constructor(props) {
        super(props);
        this.redirectToBoardShow = this.redirectToBoardShow.bind(this);
    }

    redirectToBoardShow(e) {
        // debugger
        this.props.push(`/boards/${this.props.board.id}`);
    }

    render() {
        const { board } = this.props;
        return (
            <div className='board-item' onClick={this.redirectToBoardShow}>
                <div className='board-cover'>
                </div>
                <div>
                    <div>
                        {board.title}
                    </div>
                    <div>
                        {/* {board.pinsId.length} */}
                        0 Pins
                    </div>
                </div>
                <div>
                    <i className="fas fa-pen"></i>
                </div>
            </div>
        )
    }
}

export default BoardIndexItem;