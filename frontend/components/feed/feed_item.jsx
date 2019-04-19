import React from 'react';


class FeedItem extends React.Component {

    constructor(props) {
        super(props);
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

    render() {
        const { pin, board, pinBoard, boards, openModal } = this.props;
        if (!pin || !board || !pinBoard) {
            return null;
        }
        return (
            <div className='pin-item' onClick={() => this.props.push(`/pinBoards/${pinBoard.id}`)}>
                <div className='pin-cover'>
                    <img src={pin.photoUrl} />

                    <div className='pin-save-container' onClick={e => e.stopPropagation()}>
                        <div className='pin-save'>
                            <div className='pin-save-pin'>
                                <i className="fas fa-thumbtack"></i>
                            </div>
                            <div className='pin-save-text' 
                                onClick={() => openModal({
                                                modalType: 'savePin',
                                                modalProps: { boards, pin },
                                                })}>
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

export default FeedItem;