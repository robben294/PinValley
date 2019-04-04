import React from 'react';

class PinIndexItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { pin } = this.props;
        return (
            <div className='pin-item' onClick={() => this.props.push(`/pin/${pin.id}`)}>
                <div className='pin-cover'>
                    <img src={pin.photoUrl}/>

                    <div onClick={e => e.stopPropagation()}>
                        <div
                            onClick={() => this.props.openModal({
                                modalType: 'editPin',
                                modalProps: pin
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
                </div>
            </div>
        )
    }
}

export default PinIndexItem;