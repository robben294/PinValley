import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchPin } from '../../action/pin_actions';
import { fetchBoards } from '../../action/board_actions';

class PinShow extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchBoards();
        this.props.fetchPin(this.props.match.params.pinId);
    }

    render() {

        const {pin, boards} = this.props;
        return (
            <div>
                <div className='pin-show-back'>
                    <i className="fas fa-chevron-left"></i>
                </div>
                <div className='pin-show-main'>
                    <div className='pin-show-nav'>
                        <div className='pin-show-icons'> 
                            <div className='pin-show-icon'>
                                <i className="fas fa-ellipsis-h"></i>
                            </div>
                            <div className='pin-show-icon'>
                                <i className="fas fa-pen"></i>
                            </div>
                        </div>
                        <div>
                            <div>
                                { boards ? boards[0].title : null}
                                <i className="fas fa-chevron-down"></i>
                            </div>
                            <div>
                                Save
                            </div>
                        </div>
                    </div>
                    { pin ? 
                        <div>
                            <div>
                                {pin.title}
                            </div>
                            <div>
                                {pin ? <img src={pin.photoUrl} /> : null}
                            </div>
                            <div>
                                {pin.website}
                            </div>
                            <div>
                                {pin.description}
                            </div>
                        </div>
                    : null }
                </div>
            </div>
        )
    }
}

const msp = (state, ownProps) => {
    return { 
        pin: state.entities.pins[ownProps.match.params.pinId],
        boards: Object.values[state.entities.boards],
    }
};

const mdp = dispatch => ({
    fetchPin: (pinId) => dispatch(fetchPin(pinId)),
    fetchBoards: () => dispatch(fetchBoards()),
});

export default withRouter(connect(msp, mdp)(PinShow));