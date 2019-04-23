import React from 'react';


class PinIndexItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleOpenPin = this.handleOpenPin.bind(this);
    }

    shortenWebsite(website) {
        if (website.includes(".com")) {
            website = website.split(".com")[0] + ".com";
        }
        if (website.includes("//")) {
            website = website.split("//")[1];
        }
        if (website.includes("www.")) {
            website = website.split("www.")[1];
        }
        return website;
    }

    handleOpenPin(e) {
        e.preventDefault();
        const { pinBoard, openModal } = this.props;
        // this.props.push(`/pinBoards/${pinBoard.id}`);
        openModal({
            modalType: 'showPin',
            modalProps: { pinBoard }
        });
    }

    render() {
        const { pin, board, pinBoard } = this.props;
        return (
            <div className='pin-item' onClick={this.handleOpenPin}>
                <div className='pin-cover'>
                    <img src={pin.photoUrl}/>

                    <div onClick={e => e.stopPropagation()}>
                        <div
                            onClick={() => this.props.openModal({
                                modalType: 'editPin',
                                modalProps: { pin, board, pinBoard }
                            })}>
                            <i className="fas fa-pen"></i>
                        </div>
                    </div>

                    <div className='pin-save-container' onClick={e => e.stopPropagation()}>
                        <div className='pin-save' >
                            <div className='pin-save-pin'>
                                <i className="fas fa-thumbtack"></i>
                            </div>
                            <div className='pin-save-text'>
                                Save
                            </div>
                        </div>
                    </div>
                    {
                        pin.website
                            ? <div className='pin-website-container' onClick={e => e.stopPropagation()}>

                                    <a href={pin.website} className='pin-website'>
                                        <i className="fas fa-link"></i>
                                        <span>{this.shortenWebsite(pin.website)}</span>
                                    </a>

                            </div>
                            : null
                    }
                </div>
            </div>
        )
    }
}

export default PinIndexItem;