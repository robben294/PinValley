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
                <div className='board-item-header'>
                    <div className='board-item-text'>
                        <div className='board-item-title'>
                            {board.title}
                        </div>
                        <div className='board-item-number-pins'>
                            {board.pin_ids.length} Pins
                        </div>
                    </div>
                    <div onClick={e => e.stopPropagation()}>
                        <div 
                            onClick={() => this.props.openModal({ modalType: 'editBoard',
                                                                 modalProps: board })}>
                            <i className="fas fa-pen"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BoardIndexItem;